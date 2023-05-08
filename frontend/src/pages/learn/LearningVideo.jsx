export default function LearningVideo() {
  return (
    <div>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/7CqJlxBYj-M"
        title="YouTube video player"
        style={{ border: "none" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      <h2>Description</h2>
      <p>
        Hello, I am <strong>John Doe</strong>, a web developer from{" "}
        <strong>London, United Kingdom</strong>. I hold a Master&apos;s Degree
        in Computer Science from the University of London. I also have a
        Bachelor&apos;s Degree in Computer Science from the University of
        London. I have been working as a freelance web developer for the past 10
        years.
      </p>
    </div>
  );
}
