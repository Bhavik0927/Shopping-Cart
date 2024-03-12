import { CartState } from "../Context/Context";
import SingleProducts from "./SingleProducts";
import Filter from "./Filter";
import './Style.css';


const Home = () => {

  const { state: { products } } = CartState();
  console.log(products);

  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {
          products.map((prod) =>{
            return <SingleProducts prod={prod} key={prod.id}  />
          })
        }
      </div>
    </div>
  )
}

export default Home;