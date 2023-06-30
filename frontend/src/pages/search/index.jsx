import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Box, Container, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import courseService from "../../services/course";
import SearchItem from "./SearchItem";

//TODO: rating
export default function SearchResults() {
  const [results, setResults] = useState(null);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const fetchResults = async () => {
      try {
        console.log(searchParams.get("query"));
        const data = await courseService.search(searchParams.get("query"));
        console.log(data);
        setResults(data);
      } catch (err) {
        alert(err);
        console.log(err);
      }
    };

    fetchResults();
  }, [searchParams]);
  return (
    <>
      <Header />
      <Container>
        <Box height="100vh">
          <Typography variant="h2" component="h1" marginY={4}>
            {results?.length ?? 0} result(s) found for &quot;
            {searchParams.get("query")}&quot;
          </Typography>
          {results?.map((course) => (
            <SearchItem course={course} key={course.id} />
          ))}
        </Box>
      </Container>
      <Footer />
    </>
  );
}
