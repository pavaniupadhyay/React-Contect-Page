import styles from "./navigation.module.css";
const Navigation = () => {

  console.log(styles);
  return (
    <nav className={`${styles.Navigation} container`}>
      <div className="logo">
    <img src="./image/Frame 2 1.png" alt=" do some codeing logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contect</li>
      </ul>
    </nav>
    
  )
}

export default Navigation