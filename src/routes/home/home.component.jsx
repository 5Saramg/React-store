import CategoryComponent from "../../components/category/category.component";
//import "./app.styles.scss";

const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Blusas",
      imgUrl:
        "./assets/img/category-blusas2.jpeg",
    },
    { id: 3, 
      name: "Faldas", 
      imgUrl:
    "./assets/img/category-faldas2.jpeg", },
    { id: 2, 
      name: "Vestidos y enterizos", 
      imgUrl:
    "./assets/img/category-enterizo.jpeg", },
    { id: 4, name: "Crops", imgUrl:
    "./assets/img/category-crop.jpeg", },
  ];
  return (
    <div className="container categories-container">
      {categories.map((category) => {
        return (
          <div className="category-container backgroundImage-container" key={category.id} style={{
            backgroundImage: `url(${category.imgUrl})`}}>
            <CategoryComponent categoryData={category} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
