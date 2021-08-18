import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../utils/ProductsData';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions';
import './SingleProduct.css'

const SingleProduct = () => {

    const { id } = useParams();

    //  console.log(id)
    let singleProduct =  products.find((item) => item.id === id);
   
    // console.log(singleProduct);


    let dispatch = useDispatch();
    const addItemToBasket = () =>{
           const item = {
                id : singleProduct.id,
                rating : singleProduct.rating,
                price : singleProduct.price,
                image : singleProduct.image,
                specification : singleProduct.specification,
                detail : singleProduct.detail

           }
           console.log("nihal")
           console.log(item);
           console.log(singleProduct);
           dispatch(addToBasket(item));
    }

    return (
        <div className="single-product-container">
            <img className="single-product"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="kl"
            />
            <div>
                <div className="single-product">
                    <img src={singleProduct.image} className="single-product-image" alt="lk" />
                    <div className="single-product-info">
                        <div className="single-product-title">{singleProduct.title}</div>
                        <div className="single-product-rating">
                            {Array(singleProduct.rating).fill().map((_, index) => <p key={index}>⭐</p>)}
                        </div>
                        <p className="single-product-price">
                            Price : <strong>$</strong>
                            <strong>{singleProduct.price}</strong>
                        </p>
                        <div className="single-product-specification">
                            <h4>Specifications</h4>
                            <p>{singleProduct.specification}</p>
                        </div>
                        <div className="single-product-description">
                            <h4>Product Descrpition</h4>
                            <p>{singleProduct.detail}</p>
                        </div>
                        <button onClick={addItemToBasket}>Add To Cart
                        <i>
                                 <ShoppingCartIcon/>
                        </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
