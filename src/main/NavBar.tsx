import Link from 'next/link';
import styles from './NavBar.module.css';

export const navLinks = [
  {
    name: `About Us`,
    path: `/about`,
  },
  {
    name: `Services`,
    path: `/services`,
  },
  {
    name: `Blog`,
    path: `/blog`,
  },
  {
    name: `Contact Us`,
    path: `#contact`,
  },
];

export const NavBar = () => (
  <header className={styles.navBar}>
    <Link className={styles.title} href="/">
      FV+E
    </Link>
    <nav>
      <ul>
        {navLinks.map(({ name, path }) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
