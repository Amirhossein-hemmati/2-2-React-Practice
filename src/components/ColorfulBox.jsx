import './ColorfulBox.css'

const box = ({color}) => {
    return (
        <div className={'colorful_items_box'}
             style={{background: color}}>
        </div>
    )
}

export default box;