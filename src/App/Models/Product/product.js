import React from "react";
import { getFormattedDate } from '../../Helpers/time'
import './product.scss';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let product = this.props.product
    product.formattedDate = getFormattedDate(product.timeDate)

    return (
      <div className="product-container">
        <div className="product-img-container">
          <img className="product-img" src={product.image}/>
        </div>
        <div className="product-title">{product.title}</div>
        <div className="product-time">{product.formattedDate}</div>
        <div className="product-description">{product.description}</div>
        <div className="product-price">{product.price}</div>
        <button className="product-button">Comprar</button>
      </div>
    )
  }
}


export default Product;
