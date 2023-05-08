import { Box, Typography, Rating, Paper } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CourseContent from "./CourseContent";

export default function CourseDetail() {
  return (
    <Box>
      <Box>
        <Typography variant="h2" component="h1">
          <b>The Complete Python Bootcamp From Zero to Hero in Python</b>
        </Typography>
        <Typography variant="body" component="p" sx={{ marginY: 2 }}>
          Learn Python like a Professional Start from the basics and go all the
          way to creating your own applications and games
        </Typography>
        <Box sx={{ display: "flex", marginBottom: 2 }}>
          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
          <Typography variant="body" component="p">
            (461,951 ratings)
          </Typography>
          <Typography variant="body" component="p" sx={{ marginLeft: 1 }}>
            1,716,556 students
          </Typography>
        </Box>
      </Box>
      <Paper elevation={2} sx={{ marginY: 5 }}>
        <Typography variant="h5" component="h2" sx={{ marginLeft: 2 }}>
          What you&apos;ll learn
        </Typography>
        <Box>
          <Box sx={{ display: "flex" }}>
            <CheckIcon sx={{ width: 12.5, marginX: 2 }} />
            <Typography variant="subtitle1" component="p">
              You will be able to use Python for your own work problems or
              personal projects.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CheckIcon sx={{ width: 12.5, marginX: 2 }} />
            <Typography variant="subtitle1" component="p">
              You will learn how to leverage the power of Python to solve tasks.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CheckIcon sx={{ width: 12.5, marginX: 2 }} />
            <Typography variant="subtitle1" component="p">
              Learn to use Python professionally, learning both Python 2 and
              Python 3!
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CheckIcon sx={{ width: 12.5, marginX: 2 }} />
            <Typography variant="subtitle1" component="p">
              Learn advanced Python features, like the collections module and
              how to work with timestamps!
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CheckIcon sx={{ width: 12.5, marginX: 2 }} />
            <Typography variant="subtitle1" component="p">
              Understand complex topics, like decorators.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CheckIcon sx={{ width: 12.5, marginX: 2 }} />
            <Typography variant="subtitle1" component="p">
              Get an understanding of how to create GUIs in the Jupyter Notebook
              system!
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Typography variant="h5" component="h2">
        <b>Course content</b>
      </Typography>
      <Typography variant="subtitle2" component="p">
        23 lessons • 22h 13m total length
      </Typography>
      <CourseContent sx={{ marginBottom: 5 }} />

      <Typography variant="h5" component="h2">
        <b>Description</b>
      </Typography>
      <Typography variant="body" component="span">
        <b>
          Become a Python Programmer and learn one of employer&apos;s most
          requested skills of 2023!
        </b>
        <br /> This is the most comprehensive, yet straight-forward, course for
        the Python programming language on Udemy! Whether you have never
        programmed before, already know basic syntax, or want to learn about the
        advanced features of Python, this course is for you! In this course we
        will teach you Python 3.
        <br /> With over 100 lectures and more than 21 hours of video this
        comprehensive course leaves no stone unturned! This course includes
        quizzes, tests, coding exercises and homework assignments as well as 3
        major projects to create a Python project portfolio! Learn how to use
        Python for real-world tasks, such as working with PDF Files, sending
        emails, reading Excel files, Scraping websites for informations, working
        with image files, and much more! This course will teach you Python in a
        practical manner, with every lecture comes a full coding screencast and
        a corresponding code notebook! Learn in whatever manner is best for you!
        We will start by helping you get Python installed on your computer,
        regardless of your operating system, whether its Linux, MacOS, or
        Windows, we&apos;ve got you covered. We cover a wide variety of topics,
        including:
        <ul>
          <li>Command Line Basics</li>
          <li>Installing Python</li>
          <li>Running Python Code</li>
          <li>Strings</li>
          <li>Lists</li>
          <li>Dictionaries</li>
          <li>Tuples</li>
          <li>Sets</li>
          <li>Number Data Types</li>
          <li>Functions</li>
        </ul>
      </Typography>
    </Box>
  );
}
