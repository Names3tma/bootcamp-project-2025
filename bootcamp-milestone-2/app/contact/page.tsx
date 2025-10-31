export default function Contact() {
  return (
    <>
      <main>
        <h1 className="page-title">Contact</h1>

        <form id="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
          <input type="submit" />
        </form>
      </main>
      <footer className="footer">
        © 2023 Ethan's Website | All Rights Reserved
      </footer>
    </>
  );
}
