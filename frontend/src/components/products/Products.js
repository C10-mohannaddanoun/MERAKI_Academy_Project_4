import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "antd";
import { useParams, useNavigate } from "react-router-dom";
const { Meta } = Card;

const Products = () => {
  const [Products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/productsByCategory/${id}`)
      .then((Result) => {
        console.log(Result);
        if (Result.data.success) {
          setProducts(Result.data.Categoryes);
        } else {
          setMessage(Result.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: 100,
        padding: "50px",
      }}
    >
      {Products.length === 0 ? (
        <h1>no products yet</h1>
      ) : (
        Products.map((oneProduct, index) => {
          return (
            <div
              style={{
                alignItems: "center",
                width: "25%",
                justifyContent: "center",
                marginRight: "10px",
              }}
              key={index}
            >
              <Card
                style={{
                  width: 300,
                  padding: 20,
                }}
                cover={
                  <img
                    onClick={() => {
                      navigate(`/productById/${oneProduct._id}`);
                    }}
                    src={oneProduct.img}
                  />
                }
              >
                <Meta
                  title={oneProduct.title}
                  description={oneProduct.description}
                />
              </Card>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Products;
