import style from './main.module.css'

  export default function Layout({ children }) {
    return <main className={style.container}>{children}</main>
  }