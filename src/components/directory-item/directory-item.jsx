import './directory-item.styles.scss'

const DirectoryItemComponent = ({category}) =>{
    const {imgUrl, title} = category;
    return(
        <div className='direct-item-container'>
            <div className='background-image' style={{background: `url(${imgUrl})`}}>
            </div>
            <div className='body'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )

}

export default DirectoryItemComponent