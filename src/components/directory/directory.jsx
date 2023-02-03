import DirectoryItemComponent from "../directory-item/directory-item"

const DirectoryComponent = ({categories}) =>{
    return(
        <div className="directory-container">
        {categories.map((category) =>(
            <DirectoryItemComponent key={category.id} category={category}></DirectoryItemComponent>
        ))}
        </div>
    )
}