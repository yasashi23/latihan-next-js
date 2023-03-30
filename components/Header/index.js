import Link from 'next/link'
import styles from './Head.module.css'
export default function Header() {
  return (

<nav className={styles["head"]}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/user">User</Link>
        </li>
        <li>
          <Link href="/user/blog">Blog</Link>
        </li>
</nav>

  )
}
