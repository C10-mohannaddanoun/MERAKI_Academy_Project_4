import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Image, Heading, Text } from "@chakra-ui/react";
import { tokenContext } from "../../App";
import { DeleteOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";

const OneProduct = () => {
  const [OneProduct, setOneProduct] = useState({});
  const { id } = useParams();
  const { token } = useContext(tokenContext);
  const [Fav, setFav] = useState(id);
  const [isFav, setIsFav] = useState(false);

  const AddToFav = () => {
    axios
      .put(
        "http://localhost:5000/user/Fav",
        { Fav },
        {
          headers: { Authorization: `Bearer  ${token}` },
        }
      )
      .then((Result) => {
        console.log(Result);
        setIsFav(true);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  };

  const DeleteFav = () => {
    axios
      .put(
        "http://localhost:5000/user/deleteFav",
        { Fav },
        {
          headers: { Authorization: `Bearer  ${token}` },
        }
      )
      .then((Result) => {
        console.log(Result);
        console.log(token);
        setIsFav(false);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        console.log(token);
      });
  };

  const DeleteProduct = () => {
    axios
      .delete(`http://localhost:5000/product/deleteProduct/${id}`, {
        headers: { Authorization: `Bearer  ${token}` },
      })
      .then((Result) => {
        console.log(Result);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/productById/${id}`)
      .then((Result) => {
        console.log(Result);
        setOneProduct(Result.data.Product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width:"700px",
        margin: "80px",
        backgroundColor: "ButtonHighlight",
        padding: "10px",
        borderRadius: "12px",
      }}
    >
      <div>
        <Image
          style={{ aspectRatio: 4 / 3, width: "500px" }}
          src={OneProduct.img}
          alt={OneProduct.title}
          objectFit="cover"
          maxW={{ base: "150%", sm: "350px" }}
        />
        <Text fontWeight="bold" color="blue.600" fontSize="2xl">
          {OneProduct.color}
        </Text>
      </div>

      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            marginTop: 20,
          }}
        >
          <Heading size="lg">{OneProduct.title}</Heading>
          <Text fontWeight="bold" color="blue.600" fontSize="2xl">
            {OneProduct.price}
          </Text>
        </div>

        <Text
          style={{
            marginTop: "10px",
            fontFamily: "sans-serif",
            fontSize: "15px",
            fontWeight: "bolder",
          }}
        >
          {OneProduct.description}
        </Text>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            marginTop: 20,
          }}
        >
          {isFav ? (
            <HeartFilled onClick={DeleteFav} key="favorite" />
          ) : (
            <HeartOutlined onClick={AddToFav} key="favorite" />
          )}

          <DeleteOutlined onClick={DeleteProduct} key="delete" />
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
