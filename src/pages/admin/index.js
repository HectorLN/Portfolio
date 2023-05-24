import Page_template from "@/components/Page_template";
import ProjectItem from "@/components/ProjectItem";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddProject_Modal from "@/components/modals/AddProject_Modal";

export default function AdminPage() {

  const [isNewProjectModalVisible, setIsNewProjectModalVisible] = useState(false)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleOnSubmit = values => {
    setProjects(prev => [
      ...prev,
      { ...values, _id: projects.length + 1 }
    ])
  }

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/project")
      const responseJson = await response.json()
      setProjects(responseJson)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <Page_template
        title="Admin"
        description="Here you can manage your projects."
      />
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Button
          variant="contained"
          size="large"
          onClick={ () => setIsNewProjectModalVisible(true) }
        >
          Add new project
        </Button>
      </div>
      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
      <AddProject_Modal
        open={ isNewProjectModalVisible }
        onClose={ () => setIsNewProjectModalVisible(false) }
        onSubmit={ handleOnSubmit }
      />
    </section>
  );
}