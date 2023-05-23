import * as yup from 'yup'
import { Grid, TextField, Select, InputLabel } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
//1:12:31 may 11 video
export default function ProjectForm({}) {
  const defaultValues = {
    name: "",
    description: "",
    overview:"",
    tools:[],
    imageURL:"",
  }

  const ProjectFormSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup.string(),
    overview: yup.string(),
    tools: yup.array(),
    imageURL: yup.string(),
})

const {control} = useForm({
  defaultValues,
  resolver: yupResolver(ProjectFormSchema),
  mode: 'all',
})

  return (
    <form>
        <Grid container spacing={ 4 }>
            <Grid item xs= {8} >
              <Controller
              control = {control}
              name = 'name'
              render = {({field, fieldState}) =>(
                <TextField
                {...field}
                label = 'Project Name'
                variant = 'outlined'
                fullWidth = {true}
                error = {!!fieldState.error}
                helperText = {fieldState.error?.message}
                />
              )}
              />
            </Grid>

            <Grid item xs= {12} >
              <Controller
              control = {control}
              name = 'Description'
              render = {({field, fieldState}) =>(
                <TextField
                {...field}
                label = 'Description'
                variant = 'outlined'
                fullWidth = {true}
                multiline
                minRows={2}
                maxRows={2}
                error = {!!fieldState.error}
                helperText = {fieldState.error?.message}
                />
              )}
              />
            </Grid>
            <Grid item xs= {12} >
              <Controller
              control = {control}
              name = 'overview'
              render = {({field, fieldState}) =>(
                <TextField
                {...field}
                label = 'Overview'
                variant = 'outlined'
                fullWidth = {true}
                multiline
                minRows={5}
                maxRows={5}
                error = {!!fieldState.error}
                helperText = {fieldState.error?.message}
                />
              )}
              />
            </Grid>

            <Grid item xs= {12} >
              <InputLabel id="tools-label">Tools</InputLabel>
              <Controller
              control = {control}
              name = 'tools'
              render = {({field, fieldState}) =>(
                <Select
                {...field}
                labelId='tools-label'
                variant = 'outlined'
                fullWidth = {true}
                multiple
                renderValue={}
                />
              )}
              />
            </Grid>

        </Grid>
    </form>
  )
}