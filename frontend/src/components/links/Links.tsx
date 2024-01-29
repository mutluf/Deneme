import { Link } from 'react-router-dom'
import { LinkType } from '../../types/types'
import styles from './link.module.css'

interface LinksProps {
  links: LinkType[]
}
const logout=()=>{
  localStorage.clear();
  window.location.reload();
}
const Links = ({ links }: LinksProps) => {
  const session = localStorage.getItem('token')?.valueOf;
console.log("link " ,session)
  return (
    <div className={styles.container}>
      {
        session ? (
          <>
            {links.map(link => (
              <Link className={styles.link} key={link.id} to={link.url}>
                {link.name}
              </Link>
            ))}
            <Link className={styles.link} to={'/logout'} onClick={logout}>
              Logout
            </Link>
          </>
        ) : (
          <>
          </>
        )
      }
    </div>
  )
}

export default Links
