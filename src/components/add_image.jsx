import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import style from "./add_image.module.css"
import WrapBgBlur from './wrap_black_blur'

export default function AddImage({ setShowAdd }) {
    const { handleAddImage, handleShowAdd } = useContext(GlobalContext)
    const [label, setLabel] = useState('')
    const [url, setUrl] = useState('')

    const AddImage = () => {
        let data = { title: label, image_url: url }
        handleAddImage(data)
        handleShowAdd(false)
    }

    // console.log('add image render')
    return (
        <WrapBgBlur>
            <div className={style.box_add}>
                <h2>Add a new photo</h2>
                <div className={style.form_input}>
                    <label htmlFor="label">Label</label>
                    <input onChange={(e) => setLabel(e.target.value)} type="text" placeholder="label" id="label" />
                </div>
                <div className={style.form_input}>
                    <label htmlFor="url">Photo URL</label>
                    <input onChange={(e) => setUrl(e.target.value)} type="url" placeholder="image url" id="url" />
                </div>
                <div className={style.wrap_btn}>
                    <button onClick={() => handleShowAdd(false)} className={style.btn_cancel}>Cancel</button>
                    <button onClick={AddImage} className={style.btn_submit}>Submit</button>
                </div>
            </div>
        </WrapBgBlur>
    )
}