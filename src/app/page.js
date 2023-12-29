import { imageOptimizer } from "next/dist/server/image-optimizer";
import styles from "./page.module.css";
import Content from "./Home/page.jsx";
export default function Home() {
  return (
    <>
      <Content/>
    </>
  );
}
