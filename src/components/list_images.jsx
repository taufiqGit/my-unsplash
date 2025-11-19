import { useEffect, useContext, memo } from 'react'
import { GlobalContext } from '../context/GlobalState'
import style from './list_images.module.css'

function ListImages() {
    const { handleGetAll, images, loading, error, handleShowDel, handleIdDel } = useContext(GlobalContext)  
    
    useEffect(()=>{
        handleGetAll()
    }, [])

    const getIdImage =(id)=>{
        handleShowDel(true)
        handleIdDel(id)
    }

    // let walik = images.reverse()
    // console.log('list render')
    // console.log(images, error)
    return (
        <div className={style.wrap_masonry}>
            {error && <p>{error}</p>}
            {loading && <p>Loading..</p>}
            {
                images.length > 0 ?
                images.map(image =>{
                    return (
                        <figure key={image?.id} className={style.image}>
                            <div className={style.bg_img_item}>
                                <div className={style.wrap_btn_del}>
                                    <button onClick={()=> getIdImage(image?.id)} className={style.btn_del}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ffffff" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>                                    
                                </div>
                                <h2>{image.label}</h2>
                            </div>
                            <img className={style.img_c} src={image.image_url} alt={image.label}/>
                        </figure>
                    )
                }) : ""
            }
        </div>
    )
}

function areEqual(prevProps, nextProps) {
    return JSON.stringify(prevProps) !== JSON.stringify(nextProps)
}
const ListImagesMemo = memo(ListImages, areEqual)

export default ListImagesMemo