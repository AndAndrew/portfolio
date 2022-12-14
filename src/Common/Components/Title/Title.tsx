import styles from "./Title.module.scss";

type PropsType = {
    title: string
}
export const Title = (props: PropsType) => {
    return <div className={styles.title}>
        <h2>{props.title}</h2>
    </div>
}