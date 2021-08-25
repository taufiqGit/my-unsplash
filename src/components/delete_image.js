import { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState'
import WrapBgBlur from "./wrap_black_blur";
import style from "./delete_image.module.css";

export default function DeleteImage(params) {
    const { handleShowDel, handleDeleteImage, idDel } = useContext(GlobalContext)
    const [password, setPassword] = useState('')

    const DelImage =()=>{
        // console.log(idDel)
        handleDeleteImage(idDel, password)
        handleShowDel(false)
    }

    return(
        <WrapBgBlur>
            <div className={style.box_del}>
                <h2>Are you sure?</h2>
                <div className={style.form_input}>
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" id="password" />
                </div>
                <div className={style.wrap_btn}>
                    <button onClick={() => handleShowDel(false)} className={style.btn_cancel}>Cancel</button>
                    <button onClick={DelImage} className={style.btn_submit}>Submit</button>
                </div>
            </div>
        </WrapBgBlur>
    )
}