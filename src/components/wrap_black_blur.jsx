import style from './wrap_black_blur.module.css'

const WrapBgBlur =({ children })=>{
    return (
        <div className={style.wrap_bg_add}>
            <div className={style.wrap_center}>
                { children }
            </div>
        </div>
    )
}

export default WrapBgBlur