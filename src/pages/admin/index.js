import Page_template from "@/components/Page_template";
import ProjectItem from "@/components/ProjectItem";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function AdminPage() 
{
    const [projects, setProjects ] = useState([]);

    useEffect(() => {
        fetchProjects()
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/project');
            const resJson = await res.json();
            setProjects(resJson);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section>
            <Page_template title = "Admin"
            description="Here you can manage your projects"/>

            <div style={{textAlign: "center", marginBottom: '40px'}}>
                <Button
                variant = "contained"
                size="large"
                >
                    Add Project
                </Button>
            </div>
            {projects.map((project) => (
            <ProjectItem key={project._id} project={project} />))}

        </section>
    )
}