import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <h1>Home page</h1>
   <button onClick={()=>{navigate('/products')}}>Go to Product</button>
    </div>
  );
}

export default Home;
