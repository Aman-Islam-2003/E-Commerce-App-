import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";

const ProductListing=()=>{
    const products = useSelector((state)=>state);
    const dispatch=useDispatch();

    async function getAllProducts() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const productsData = await response.json();
            console.log(productsData);
            dispatch(setProducts(productsData));
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getAllProducts();
    }, []);
    console.log("products: ", products);

   
    //console.log(products);
    return(
        <>
        <div className="ui grid container">
            <ProductComponent/>
        </div>
        </>
    )
}

export default ProductListing;