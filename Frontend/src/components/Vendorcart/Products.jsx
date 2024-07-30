import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import { addItem } from "../Redux_Toolkit/CartSlice";
import { CartItem } from "./FakeCartItem";
import "../Css/sass/CartPage.scss";

const Products = () => {
  const [filter, setFilter] = useState(CartItem);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  // useEffect(() => {
  //   const getProducts = async () => {
  //     setLoading(true);
  //     const response = await fetch("https://fakestoreapi.com/products/");
  //     if (componentMounted) {
  //       setData(await response.clone().json());
  //       setFilter(await response.json());
  //       setLoading(false);
  //     }

  //     return () => {
  //       componentMounted = false;
  //     };
  //   };

  //   getProducts();
  // }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (category) => {
    if (category === "all") {
      setFilter(CartItem);
    } else {
      const filteredProducts = CartItem.filter(
        (product) => product.category === category
      );
      setFilter(filteredProducts);
    }
    setActiveFilter(category);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-3">
          <button
            className={`btn btn-outline-dark btn-sm m-2 ${
              activeFilter === "all" ? "active" : ""
            }`}
            onClick={() => filterProduct("all")}
          >
            All
          </button>
          <button
            className={`btn btn-outline-dark btn-sm m-2 ${
              activeFilter === "prasadam" ? "active" : ""
            }`}
            onClick={() => filterProduct("prasadam")}
          >
            Prasadam
          </button>
          <button
            className={`btn btn-outline-dark btn-sm m-2 ${
              activeFilter === "archana_items" ? "active" : ""
            }`}
            onClick={() => filterProduct("archana_items")}
          >
            Archana Items
          </button>
          <button
            className={`btn btn-outline-dark btn-sm m-2 ${
              activeFilter === "photos" ? "active" : ""
            }`}
            onClick={() => filterProduct("photos")}
          >
            Photos
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="cart_product justify-content-auto col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-bod">
                  <h5 className="card-title" style={{ marginTop: "0px" }}>
                    {product.title}
                  </h5>
                  <p className="card-text p-2" style={{ color: "blue" }}>
                    {product.description.substring(0, 30)}...
                  </p>
                </div>

                <div>
                  <div className="d-flex p-2" style={{ fontSize: "16px" }}>
                    <div>M.R.P :&nbsp;</div>
                    &nbsp;
                    <span style={{ color: "red" }}>
                      <span
                        style={{
                          fontSize: "12px",
                          position: "relative",
                          bottom: "2px",
                        }}
                      >
                        ₹
                      </span>

                      {product.price}
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
