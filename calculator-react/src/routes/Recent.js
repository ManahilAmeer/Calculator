import React, { useEffect } from "react";
import "../style/Recent.css";
import {
  ListGroup,
} from "react-bootstrap";
import MyNavbar from "../components/Navbar";
import { pre } from "../Reducer/reducer";
function Recent() {
  useEffect(() => {
    document.title = "Calculator App";
  }, []);
  return (
    <>
      <div>
        <MyNavbar></MyNavbar>
        <ListGroup variant="flush">
          <ListGroup.Item>Recent Calculations</ListGroup.Item>
          {pre.map((item) => {
            if(pre.length===0){
              return (
                <>
                  <ListGroup.Item>
                    <p>All your recent Calculations will appear here</p>
                  </ListGroup.Item>
                </>
              );
            }
            else{
              return (
                <ListGroup.Item as="li" className="item">
                    {item.state} = {item.output}
                  </ListGroup.Item>
              );
            }
          })}
        </ListGroup>
      </div>
    </>
  );
}
export default Recent;
