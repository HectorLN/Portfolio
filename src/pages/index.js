import styles from '../styles/Home.module.css'
import { Button } from "@mui/material";
import { useRouter } from 'next/router';

export default function Home({ name, summary}) {
  const router = useRouter();

  return (
    <section className={styles.Home}>
      <h1 className={styles.Name}>{name}</h1>
      <div className={styles.Summary}>{summary}</div>
      <div>
        <Button variant = "contained" size = "large" onClick={() => router.push("/projects")}>
          Projects
        </Button>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  return {
    props: {
      name: "Hector Lucero",
      summary: "As a fullstack developer, I have a unique skillset that allows me to work on all aspects of web development, from design to implementation. My ability to write code for both the client and server side, as well as manage databases, is essential for delivering high-quality web solutions. My expertise makes me a valuable asset to any development team."
    }
  }
}