import React, { useContext, useState } from "react";
import { myContext } from "../App";

const Cart = () => {
  const [data, setData] = useContext(myContext);

  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 0),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 0),
    0
  );
  const add = (id, quantity) => {
    setData((quant) => {
      return quant.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 || quantity + 1 };
        }
        return element;
      });
    });
  };
  const reduce = (id, quantity) => {
    setData((quant) => {
      return quant.map((element) => {
        if (element.id === id && quantity > 0) {
          return {
            ...element,
            quantity: element.quantity - 1 || quantity - 1,
          };
        }
        return element;
      });
    });
  };

  const remove = (id) => {
    setData(data.filter((element) => element.id !== id));
  };
  return (
    <div>
      
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {data.map((element, index) => {
            return (
              <div key={index}>
                <div className="col">
                  <div className="card h-100 ">
                    <div className="card-header">{element.title}</div>

                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div id={index} className="carousel slide">
                            <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img
                                  src={element.thumbnail}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              {element.images.map((photo, i) => {
                                return (
                                  <div className="carousel-item" key={i}>
                                    <img
                                      src={photo}
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                );
                              })}
                            </div>
                            <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target={`#${index}`}
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              />
                              <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target={`#${index}`}
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              />
                              <span className="visually-hidden">Next</span>
                            </button>
                          </div>
                        </div>
                        <div className="col-6">{element.description}</div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-6">
                          <div className="card-text">
                            Price : {element.price}
                          </div>
                          <div className="card-text">
                            Brand : {element.brand}
                          </div>
                        </div>
                        <div className="col-6">
                          <input
                            type="text"
                            className="form-control"
                            value={element.price * (element.quantity || 0)}
                            readOnly
                          />
                          <br />
                          <div className="btn-group " role="group">
                            <button
                              className="btn btn-success"
                              onClick={() =>
                                add(element.id, element.quantity || 0)
                              }
                            >
                              +
                            </button>
                            <button className="btn disabled ">
                              {element.quantity || 0}
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                reduce(element.id, element.quantity || 0)
                              }
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                          className="btn btn-secondary"
                          onClick={() => remove(element.id)}
                        >
                          Remove
                        </button>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h2>Cart</h2>
      <h3>Total Price : {totalPrice}</h3>
      <h3>Total Quantity : {totalQuantity}</h3>
      </div>
    </div>
  );
};

export default Cart;