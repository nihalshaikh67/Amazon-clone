import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../utils/ProductsData';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/actions';
import './SingleProduct.css'

const SingleProduct = () => {

    // const { id } = useParams();

    //  console.log(id)
    let singleProduct =  products.find((item) => item.id);
   
    // console.log(singleProduct);


    let dispatch = useDispatch();
    const addItemToBasket = () =>{
           const item = {
                id : SingleProduct.id,
                rating : SingleProduct.rating,
                price : SingleProduct.price,
                image : SingleProduct.image,
                specification : SingleProduct.specification,
                detail : SingleProduct.detail,

           }
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
                            {Array(SingleProduct.rating).fill().map((_, index) => <p key={index}>⭐</p>)}
                        </div>
                        <p className="single-product-price">
                            Price : <strong>$</strong>
                            <strong>12</strong>
                        </p>
                        <div className="single-product-specification">
                            <h4>Specifications</h4>
                            <p>"27 inch 4K UHD (3840 x 2160) Resoltion with HDR 10",
        "IPS Screen with 178/178 deg viewing angle with 300 nits brightness",
        "Color Calibrated Display with sRGB 99% and 1.07 Billion Color",
        "Radeon Freesync - Gaming Features - DAS Mode and Black Stablizer",
        "Connectivity: HDMI x 2 , Display Port & Headphone out",
        "VESA Wall Mount 100 x 100",
        "HDCP 2.2 for Displaying 4K Content from Streaming Service & Game Console"</p>
                        </div>
                        <div className="single-product-description">
                            <h4>Product Descrpition</h4>
                            <p> "LG IPS display has extraordinary color accuracy, covering 98% of the sRGB color spectrum. It also has a wider viewing angle, so it's even easier to enjoy true color visuals. Radeon FreeSync reduces the tearing and stuttering that occur between a graphic card's frame rate and a monitor's refresh rate enabling smoother motion and less stuttering in demanding games."</p>
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
