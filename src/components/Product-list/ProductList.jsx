import React, { Fragment } from "react";
import ProductItem from "../Product-item/ProductItem";
import withContext from "../../withContext";

const ProductList = props => {
  const { products } = props.context;
  return (
    <Fragment>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Наши продукты</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products && products.length ? (
            products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                Не найден продукт
              </span>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default withContext(ProductList);
