import React from "react";
import styles from "./card.module.css";

export default class Card extends React.Component {
    render() {
       const user: any = this.props;
        return (
            <div className={styles.container}>
                <img src={user.avatar_url} className={styles.image}></img>
                <div className={styles.info}>
                    <span className={styles.label}>Name:</span>
                    <div className={styles.name}>{user.login}</div>
                </div>
                <i ></i>
            </div>
        )
    }
}