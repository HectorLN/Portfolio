import styles from "./styles/PageTemplate.module.css"

export default function Page_template({title, description})
{
    return ( 
    <div className={styles.PageDescription}>
        <h1>{title}</h1>

        <div className={styles.Divider}>

        </div>
        <span>{description}</span>
    </div>
    )
}