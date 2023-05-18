import Page_template from "@/components/Page_template";
import {Grid, Button, Chip, Stack} from "@mui/material";
import { useRouter } from 'next/router';

export default function About({skills}) 
{
    const router = useRouter();

    return(
        <section>
            <Page_template 
            title = "About Me" 
            description="Here, you can get to know me better and learn about my background, skills, and experience as a fullstack developer."
            />
            
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <h2>Get to know me!</h2>
                    <p>
                    I am a highly motivated and detail-oriented senior computer science engineering student 
                    with a passion for frontend development. My academic background has equipped me with a 
                    strong foundation in programming and software development, which I have further 
                    enhanced through my hands-on experience in various school projects. I am now eager to 
                    expand my skills and knowledge as I transition into a fullstack developer role. I am open to 
                    new job opportunities and excited to collaborate with teams to create innovative 
                    and impactful projects.
                    </p>

                    <Button variant = "contained" size = "large"  
                    onClick={() => router.push("/contact")}>
                        Contact
                    </Button>
                </Grid>
                <Grid item md={6}>
                    <h2>My Skills</h2>
                    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                        {skills.map((skill) => (
                            <Chip key={skill} label={skill} />
                        ))}
                    </Stack>
                </Grid>
            </Grid>

            
        </section>
    )
}

export async function getStaticProps() {
  let skills = [];

    try {
    const response = await fetch(
      "https://portfolio-83e4e-default-rtdb.firebaseio.com/skills.json"
    );
    const data = await response.json();
    skills = data.split(",");
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      skills,
    },
    revalidate: 30,
  };
  }