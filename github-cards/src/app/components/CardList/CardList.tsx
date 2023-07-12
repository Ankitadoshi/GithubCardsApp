"use client";
import { useState } from "react";
import Card from "../Card/Card";
import styles from "./cardList.module.css";
import usersMock from "../../../mockdata/users.json"
import React from "react";


export default function CardList () {

const [users, setUsers] = useState(usersMock);
const [filtered, setFiltered] = useState(usersMock);
const inputRef = React.useRef<HTMLInputElement>(null);
const selectRef = React.useRef<HTMLSelectElement>(null);
const [selected, setSelected] = useState('');

const getData = async () => {
  const response = await fetch("https://api.github.com/users", {
    headers: {
        'Authorization': 'token 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',
    }
  });
  const usersResp = await response.json();
  setUsers(usersResp);
}


function handleSelectChange(evt: any) {
    setSelected(evt?.target?.value);
}

function handleButtonClick(evt: any) {
    evt.preventDefault();
    let filteredUser = users.filter((user) => {
        return user.login === selected;
    });
    setFiltered(filteredUser);
}

function handleClearButtonClick (evt: any) {
    evt.preventDefault();
    setFiltered(users);
    setSelected('')
}

function handleInputChange (evt: any) {
    let filteredUser = users.filter((user) => {
        return user.login.includes(evt.target.value);
    });
    setFiltered(filteredUser);
}
// useEffect(() => {
//     // getData();
// }, []);

return (
    <>
    <form className={styles.searchForm}>
        <div className={styles.row}>
            <input type="text" placeholder="search" ref={inputRef} className={styles.searchInput} onInput={handleInputChange}></input>
        </div>
       <div className={styles.row}>
        <select ref={selectRef} className={styles.userSelect} onChange={handleSelectChange}>
            <option value="">No selection</option>
            {users.map((user: any) => {
                return <option value={user.login} key={user.id} selected={user.login === selected}>{user.login}</option>
            })}
        </select>
        </div>
        <div className={styles.row}>
            <button className={styles.searchButton} onClick={handleButtonClick}>Filter</button>
            <button className={styles.resetButton} onClick={handleClearButtonClick}>Reset</button>
        </div>
    </form>
    <div className={`${filtered.length>1 ? styles.grid : styles.cardContainer}`}>
        {filtered.map((user: any) => {
            user.isFil
            return <Card key={user.id} {...user} />
        })}
    </div>
    </>
)

}

