import { Link } from "react-router-dom";
function Product() {

    const products=[{id:1,name:'product 1'},{id:2,name:'product 2'},{id:3,name:'product 3'}]
    return ( <>
        <h1>Products Page</h1>

        {products.map((item)=><li key={item.id}><Link to={`/products/${item.id}`}>{item.name}</Link></li>)}

    </> );
}

export default Product;