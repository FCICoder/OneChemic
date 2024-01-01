import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import { useTranslation } from "../i18n";
import Content from "./Home/page";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <div>
      <Content lng={lng}/>
    </div>
  );
}
