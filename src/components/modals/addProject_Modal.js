import { Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";
import ProjectForm from "../forms/ProjectForm";

export default function AddProject_Modal({open}) {
  return (
    <Dialog open = {open}>
        <DialogTitle>Adding a new Project</DialogTitle>
        <DialogContent>
           <ProjectForm/> 
        </DialogContent>
        <DialogActions>

        </DialogActions>
    </Dialog>
  )
}