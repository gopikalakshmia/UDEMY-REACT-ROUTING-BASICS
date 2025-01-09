import { Link } from "react-router-dom";

function MainHeader() {
    return ( <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Product</Link></li>
            </ul>
        </nav>
    </header> );
}

export default MainHeader;