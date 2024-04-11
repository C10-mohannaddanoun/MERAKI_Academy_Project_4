import React, { useState , useEffect} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Button } from '@chakra-ui/react'






const OneProduct = () => {
    const [OneProduct,setOneProduct]=useState({})
    const { id } = useParams();
  

    useEffect(()=>{
        axios
        .get(`http://localhost:5000/product/productById/${id}`)
        .then((Result) => {
          console.log(Result);
          setOneProduct(Result.data.Product)
         
        })
        .catch((err) => {
          console.log(err);
          
        });

    },[])




  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" ,marginTop:20 }}>
    <Card
   direction={{ base: 'column', sm: 'row' }}
   overflow='hidden'
   variant='outline'
  >
    
    <Image
      src={OneProduct.img}
      alt={OneProduct.title}
      objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
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
      <Button variant="solid" colorScheme="blue">
        {OneProduct.price}
      </Button>
    </CardFooter>
  </Card>
  </div>
  )
}

export default OneProduct