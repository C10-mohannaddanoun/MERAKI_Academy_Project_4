import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { tokenContext } from "../../App";

const OneProduct = () => {
  const [OneProduct, setOneProduct] = useState({});
  const { id } = useParams();
  const { token } = useContext(tokenContext);
  const [Fav, setFav] = useState(id);

    const AddToFav = () => {
      axios
        .put("http://localhost:5000/user/Fav",{Fav}, {
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

  const DeleteFav = () => {
    axios
      .put(
        "http://localhost:5000/user/deleteFav",
        { Fav },
        {
          headers: { Authorization: `Bearer  ${token}` }
        }
      )
      .then((Result) => {
        console.log(Result);
        console.log(token);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        console.log(token);
      });
  };


  const DeleteProduct = () => {
    axios.delete(`http://localhost:5000/product/deleteProduct/${id}`,{
      headers: { Authorization: `Bearer  ${token}` }
    })
    .then((Result) => {
      console.log(Result);
      
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response.data.message);
      
    });





  }

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
        marginTop: 20,
      }}
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          src={OneProduct.img}
          alt={OneProduct.title}
          objectFit="cover"
          maxW={{ base: "150%", sm: "350px" }}
        />
        <CardBody>
          <Stack spacing={4}>
            <Heading size="lg">{OneProduct.title}</Heading>
            <Text>{OneProduct.description}</Text>
            <Text fontWeight="bold" color="blue.600" fontSize="2xl">
              {OneProduct.color}
            </Text>

            <Text fontWeight="bold" color="blue.600" fontSize="2xl">
              {OneProduct.price}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button onClick={AddToFav} variant="solid" colorScheme="blue">
            Add to Fav
          </Button>
          <Button
            onClick={DeleteProduct}
            style={{ marginLeft: 15 }}
            variant="solid"
            colorScheme="blue"
          >
            Delete product
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OneProduct;
