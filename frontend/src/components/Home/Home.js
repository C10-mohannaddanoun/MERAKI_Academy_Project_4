import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "antd";
const { Meta } = Card;

const Home = () => {
  const [Categoryes, setCategoryes] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/category/AllCategoryes")
      .then((Result) => {
        console.log(Result);
        setCategoryes(Result.data.Categoryes);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  }, []);

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gridGap: '10px'}}>
      {Categoryes.length &&
        Categoryes.map((oneCategory, index) => {
          return (
            <div>
              <Card
                hoverable
                style={{
                  maxWidth: 240,
                  
                }}
                cover={
                  <img
                   
                    src={oneCategory.img}
                  />
                }
              >
                <Meta
                  title={oneCategory.type}
                
                />
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
