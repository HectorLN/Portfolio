import Page_template from "@/components/Page_template";
import {Grid} from "@mui/material"

export default function About() 
{
    return(
        <section>
            <Page_template 
            title = "About Me" 
            description="Here, you can get to know me better and learn about my background, skills, and experience as a fullstack developer."
            />
            
            <Grid container spacing={2}>
                <Grid item md={6}></Grid>
                <Grid item md={6}></Grid>
            </Grid>

            
        </section>
    )
}