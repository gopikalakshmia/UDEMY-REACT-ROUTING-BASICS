import { useParams } from "react-router-dom";

function ProductsItem() {

    const params=useParams();
    return ( <>
<h1>Product Description</h1>
{params.id}
    </> );
}

export default ProductsItem;