// styles
import './ValueBar.scss'

export default function ValueBar({ val, img=null}) {

    return (
        <div className={img ? 'value-bar-container-w-img panel-bg' : 'value-bar-container panel-bg'}>
            {img && 
                <img className="circle-img-left" src={img} alt="" />
            }
            <h3>{val}</h3>
        </div>
    )
}


