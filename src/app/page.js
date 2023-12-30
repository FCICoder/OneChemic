import styles from "./page.module.css";
import Content from "./Home/page.jsx";
import ContactLink from "./Components/Contact-link/Contact-link";
import Footer from "./Components/Footer/Footer";
export default function Home() {
  return (
    <>
      <Content/>
      <ContactLink/>
    </>
  );
}
