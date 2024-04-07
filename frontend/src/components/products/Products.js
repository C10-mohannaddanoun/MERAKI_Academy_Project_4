import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Avatar, Card } from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined,HeartOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
const { Meta } = Card;



const Products = () => {
    const [Products ,setProducts]=useState([])
    const [message, setMessage] = useState("");
    const { id } = useParams();
    console.log(id);


    useEffect(()=>{
        axios
        .get(`http://localhost:5000/product/productsByCategory/${id}`)
        .then((Result) => {
            console.log(Result);
            if(Result.data.success){ setProducts(Result.data.Categoryes);}else {
                setMessage(Result.data.message);
            }
                
            
          })
          .catch((err) => {
            console.log(err);
            setMessage(err.response.data.message);
          });

    },[])





  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gridGap: '10px', padding:15}}>
      {Products.length===0 ?<h1>no products yet</h1> :
        Products.map((oneProduct, index) => {
          return (
            <div  key={index}>
              <Card
                style={{
                    width: 300,
                  }}
                  cover={
                    <img
                      
                      src={oneProduct.img}
                    />
                  }
                  actions={[
                    <DeleteOutlined key="delete" />,
                    <EditOutlined key="edit" />,
                    <HeartOutlined key="favorite"/>
                    
                  ]}
                >
                  <Meta
                    title={oneProduct.title}
                    description={`price : ${oneProduct.price}
                    color : ${oneProduct.color}
                    
                    description : ${oneProduct.description}`}
                  />
              </Card>
            </div>
          );
        })}
    </div>
   
  )
}

export default Products