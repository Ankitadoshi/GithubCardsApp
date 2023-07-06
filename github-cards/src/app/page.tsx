import Image from 'next/image'
import styles from './page.module.css'
import CardList from './components/CardList/CardList'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Github Cards App</h1>
      <CardList/>
    </main>
  )
}
