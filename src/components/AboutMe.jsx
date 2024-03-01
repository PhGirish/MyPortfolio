function AboutMe() {
  return (
    <>
      <div className="aboutme">
        <h1>about me</h1>

        <p>
          I have completed my bachelor's degree in Computer Application from
          Kristu Jayanti College and currently persuing my{" "}
          <span class="highlight">Master of Computer Application</span> at
          <span class="highlight"> Kristu Jayanti College</span>
          ,Bengaluru.
        </p>

        <p>
          My interest mainly resides in{" "}
          <span class="highlight">frontend development</span>. In my free time I
          love to listen to music , watch youtube or play video games. Here are
          some technologies I have been working with:
        </p>
        <div className="lists">
          <ul className="list1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul className="list2">
            <li>React.js</li>
            <li>Java</li>
            <li>ASP.NET</li>
          </ul>
        </div>
        <div className="about-image">
          <img className="dp" src="/img1.jpg" alt="" />
        </div>
      </div>
      <footer>
        <small>Built and designed by Phurailatpam Girish Sharma</small>
      </footer>
    </>
  );
}
export default AboutMe;
