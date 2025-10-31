export default function Home() {
  return (
    <>
      <main>
        <h1 className="page-title">Hello World!</h1>
        <div className="about">
          <div className="about-image">
            <img
              src="/images/sky.jpg"
              width="1000"
              alt="A video of an image of the sky and clouds being too big"
            />
          </div>
          <div className="about-text">
            <p>
              Hi, my name is <em>Ethan Ma</em> and I am from Newark CA.
              Something things about me is that I enjoy reading{" "}
              <strong>light novels</strong> like Shadow Slave and Lord of the
              Mystery. My favorite subject in Computer Science is something in
              along the lines of AI and cyber security
            </p>

            <p>
              I am a third year transfer at Cal Poly SLO as a CS major. I plan
              on doing my masters as well, don't know where yet.
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        © 2023 Ethan's Website | All Rights Reserved
      </footer>
    </>
  );
}
