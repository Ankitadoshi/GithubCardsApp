import React from "react";
import styles from "./card.module.css";

export default class Card extends React.Component {
    state = {
        userName:''
    }
   handleCardClick = async (evt: any) => {
        const { user } = evt.target.dataset;
        const resp = await fetch(`https://api.github.com/users/${user}`);
        const userResp = await resp.json();
        this.setState({userName: userResp.name || 'test'});
    }
    render() {
       const user: any = this.props;
        return (
            <div data-user={user.login} className={styles.container} onClick={this.handleCardClick}>
                <img src={user.avatar_url} className={styles.image}></img>
                <div className={styles.info}>
                    <span className={styles.label}>Name:</span>
                    <div className={styles.name}>{user.login}</div>
                </div>
                <i>{this.state.userName}</i>
            </div>
        )
    }
}