import { Box, Button, Chip, Grid } from "@mui/material";
import Page_template from "@/components/Page_template";
//1:15:40 
function Project({project})
{
    return (
        <>
            <Grid container 
            direction = "column" 
            alignItems="center"
            justifyContent="center"
            >
                <Page_template 
                title= {project.name}
                description={project.name}
                />
               <Box textAlign="center">
                    <Button variant="contained" size="large">
                        Project Link
                    </Button>
               </Box>
               <Box>
                    <img src ={project.imageUrl} alt = "sd" ></img>
               </Box>
               <h1>Project Overview</h1>
               <Box>
                    <span>{project.description}</span>
               </Box>
               <h1>Tools Used</h1>
               <Box sx = {{display: "flex", flexWrap: "wrap", gap: 1}}>
                    {project.tools.map((tool) =>{
                        <Chip key={tool} label = {tool} variant="outline"/>
                    })}
               </Box>
            </Grid>
        </>
    );
}

// export async function getServerSideProps(context)
// {
//     const id = context.params.id;
//     try {
//         const response = await fetch("http://localhost:3000/api/projects/${id}");
//         const project = await response.json();
//         return {
//             props: {
//                 project,
//             },
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

export async function getStaticPaths(){
    try {
        const response = await fetch("http://localhost:3000/api/projects/");
        const project = await response.json(); 
        const paths = project.map((project) => {
            return{
                params: {id: project._id.toString()}
            }
        });
        return {
            paths,
            fallback: false,
        }
    } catch (error) {
        console.error(error);  
    }
}
export default Project;