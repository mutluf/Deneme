import { AppBarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router-dom";
import styles from './navbar.module.css'
import Links from "../links/Links";

const links = [
  { id: 1, name: "Users", url: "/users" },
  { id: 2, name: "Posts", url: "/posts" },
]
const Navbar = () => {
  return (
    <div className='control-container'>
      <AppBarComponent colorMode="Primary"
        style={{ height: 130 }}>
        {/* <ButtonComponent cssClass='e-inherit menu' iconCss='e-icons e-menu' ></ButtonComponent> */}
        <div className={styles.linkWrapper}>

          <Link className={styles.link} to='/'>
            <span className="regular">React AppBar</span>
          </Link>
          <Links links={links} />
        </div>
        <div className="e-appbar-spacer"></div>

      </AppBarComponent>
    </div>
  )
}

export default Navbar


