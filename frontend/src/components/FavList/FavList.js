import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { tokenContext } from "../../App";

const FavList = () => {
  const { token } = useContext(tokenContext);
  const [Fav, setFav] = useState([]);
  const [message, setMessage] = useState("");

  useEffect (() => {
      axios
        .get("http://localhost:5000/user/favList", {
          headers: { Authorization: `Bearer  ${token}` },
        })
        .then((result) => {
          setFav(result.data.fav);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    []);

  return (
    <div>
      {!Fav.length ? (
        <h3>No products in favList yet</h3>
      ) : (
        Fav.map((oneFav, index) => {
          return(
            <div   style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gridGap: "10px",
              margin: 20,
              backgroundColor:"ButtonShadow",
              padding:"10px"
    
            }} className="favcontainer">

              <div style={{border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden", position: "relative", margin: "50px" ,height:"200px",width:"300px"}}>
                <img style={{ width: "100%", height: "auto" }} src={oneFav.img}/>
                <div style={{padding: "10px", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff", position: "absolute", bottom: 0, left: 0, right: 0 }} className="headerinfo">
                <h3>{oneFav.title}</h3>
                <h2>{oneFav.price}</h2>
                </div>



                </div>
            </div>
          )
        })
      )}
    </div>
  );
};

export default FavList;
