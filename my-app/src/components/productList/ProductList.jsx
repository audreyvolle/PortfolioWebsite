import "./productList.css";
import Product from "../product/Product";


const ProductList = () => {
    return (
        <div className = "pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Projects</h1>
                <p className = "pl-desc">
                    A few projects from the past couple of years...
                </p>
            </div>
            <div className="pl-list">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>

        </div>
    )
}

export default ProductList