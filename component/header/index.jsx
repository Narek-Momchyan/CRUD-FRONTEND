import styles from './header.module.css'
import Link from 'next/link'
export default function Header() {
  return (
    <header className={styles.header}>
          
        <Link href="/">student list</Link>
        <Link href="/addStudents">📝add students info</Link>

      
    </header>
  )
}
