import { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import style from './header.module.css'
import logo from "../asset/my_unsplash_logo.svg"

export default function Headers() {
    const { handleShowAdd, handleSearchImage } = useContext(GlobalContext)

    // console.log('header render')
    return(
        <header className={style.header}>
            <div className={style.nav_left}>
                <img className={style.logo} src={logo} alt="logo"/>
                <div className={style.search_box}>
                    <svg className={style.icon_search} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BDBDBD" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <input type="text" onChange={(e)=> handleSearchImage(e.target.value)} name="hehe" placeholder="Search by label"/>
                </div>
            </div>
            <button onClick={() => handleShowAdd(true)} className={style.btn_add_image}>Add a photo</button>
        </header>
    )
}