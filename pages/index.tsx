import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/index.module.css";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const IndexPage = () => (
  <Layout title="tinashemuchineripi">
    <div className={styles.wrapper}>
      <span className={styles.first_of_span}> Hi, my name is </span>
      <h2> Tinashe Muchineripi. </h2>
      <span className={styles.last_of_span}>
        {" "}
        I enjoy building products that reside on the web, writing about products
        that reside on the web.
      </span>
      <button className={styles.primary}>
        Check out the latest blog post !
      </button>
    </div>
  </Layout>
);

export default IndexPage;
