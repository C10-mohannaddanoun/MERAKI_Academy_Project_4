import React, { useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

const Home = () => {
  const [Categoryes, setCategoryes] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    width: "100%",
    backgroundSize: "cover",
    aspectRatio: 16 / 4,
  };
  const Homefun = () => {
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
  };
  useEffect(() => {
    Homefun();
  }, []);

  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            style={contentStyle}
            src="https://resumespice.com/wp-content/uploads/2021/03/38.png"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://dablew.pk/file/2021/02/banner.jpg"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://stylizedd.com/cdn/shop/files/Banner5_1400x.jpg?v=1650541024"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://t3.ftcdn.net/jpg/03/08/09/84/360_F_308098498_raQvWUt7e7dPnRl7xvxTMqJL1wfaYR3G.jpg"
          />
        </div>
      </Carousel>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gridGap: "10px",
          margin: 20,
          backgroundColor: "ButtonShadow",
          padding: "10px",
        }}
      >
        {Categoryes.length &&
          Categoryes.map((oneCategory, index) => {
            return (
              <div key={index}>
                <Card
                  hoverable
                  style={{
                    maxWidth: 240,
                  }}
                  cover={
                    <img
                      style={{ minHeight: 160 }}
                      src={oneCategory.img}
                      onClick={() => {
                        navigate(`/productsByCategory/${oneCategory._id}`);
                      }}
                    />
                  }
                >
                  <Meta title={oneCategory.type} />
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
