import "./About.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <h2>Welcome to my portfolio.</h2>
      <div className="statement">
        <h3>Intro</h3>
        <p>
          Hello my name is Wesley Cundle. I am a 31 year old self-taught
          developer looking to break into the field. I am passionate about
          learning and greatly enjoy the ever evolving world of web development.
          My journey started with a udemy course on HTML, CSS, and JavaScript.
          From there I have progressed to React js, redux and RTK Query. I also
          have experience developing back end code using Node js and express
          with a mongo database.
        </p>
      </div>
      <div className="statement">
        <h3>Projects</h3>
        <p>
          Below you will see my projects that I have developed. My very first
          project taught me a great deal and gave me a strong foundation for
          MERN stack applications. This application also has a simple json web
          token authentication for user login.
        </p>
      </div>
    </div>
  );
};
