import { useNavigate } from 'react-router-dom';
import './directory-item.styles.jsx'
import { BackgroundImageStyle, BodyStyle, DirectItemContainerStyle } from './directory-item.styles.jsx';

const DirectoryItemComponent = ({category}) =>{
    const {imgUrl, title, route} = category;
    const navigate = useNavigate(),

    onNavigateHandle = ()=> navigate(route)

    return(
        <DirectItemContainerStyle>
            <BackgroundImageStyle imgUrl= {imgUrl}></BackgroundImageStyle>
            <BodyStyle>
            <h2>{title}</h2>
                <p>Shop Now</p>
            </BodyStyle>
        </DirectItemContainerStyle>
    )

}

export default DirectoryItemComponent