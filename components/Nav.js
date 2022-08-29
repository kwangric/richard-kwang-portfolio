import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li className={router.asPath === "/" ? '' : navStyles.opacity}>
          <Link href='/'>Home</Link>
        </li>
        <li className={router.asPath === "/skills" ? '' : navStyles.opacity}>
          <Link href='/skills'>Skills</Link>
        </li>
        <li className={router.asPath === "/projects" ? '' : navStyles.opacity}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className={router.asPath === "/music" ? '' : navStyles.opacity}>
          <Link href='/music'>Music</Link>
        </li>
        <li className={router.asPath === "/about" ? '' : navStyles.opacity}>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
