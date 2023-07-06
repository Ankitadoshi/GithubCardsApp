"use client";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./cardList.module.css";


export default function CardList () {

const [users, setUsers] = useState([]);

const getData = async () => {
  const response = await fetch("https://api.github.com/users");
  const usersResp = await response.json();
  setUsers(usersResp);
}

useEffect(() => {
    getData();
}, []);

return (
    <>
    <div className={styles.grid}>
        {users.map((user: any) => {
            return <Card key={user.id} {...user}/>
        })}
    </div>
    </>
)

}

