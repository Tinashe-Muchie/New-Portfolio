import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/contact.module.css";

const ContactPage = () => (
  <Layout title="contact-page">
    <main className={styles.container}>
      <h2> Contact Me </h2>
      <form
        className="contact_form"
        id="contact_form"
        method="POST"
        action="https://formsubmit.co/tinashemuchineripi@gmail.com"
      >
        <div className="contact_form_items">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            name="firstName"
            required
          />
        </div>
        <div className="contact_form_items">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            name="lastName"
            required
          />
        </div>
        <div className="contact_form_items">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="name@example.com"
            name="email"
            required
          />
        </div>
        <div className="contact_form_items">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div>
          <button type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
      <span>
        <Link href="/">
          <a>Go to Homepage</a>
        </Link>
      </span>
    </main>
  </Layout>
);

export default ContactPage;
