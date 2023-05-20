import Page_template from "@/components/Page_template";
import ProjectItem from "@/components/ProjectItem";

export default function Projects({projects}) 
{
    return (
        <section>
            <Page_template title = "Projects"
            description="Explore a collection of my school and personal projects showcasing my projects in web development and software engineering.
            "/>

            {projects.map((project) => (
            <ProjectItem key={project._id} project={project} />))}

        </section>
    )
}

export async function getServerSideProps()
{
  let projects = [];

  try {
  const response = await fetch(
    "http://localhost:3000/api/project"
  );
  projects = await response.json();
} catch (error) {
  console.error(error);
}
    return {
        props: {
            projects,
        }
    }
}