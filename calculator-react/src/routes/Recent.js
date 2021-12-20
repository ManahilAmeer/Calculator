import React, { useEffect } from "react";
import "../style/Recent.css";
import {
  Nav,
  Navbar,
  Container,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import MyNavbar from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { pre } from "../Reducer/reducer";
// import { ViewRecent } from "../Reducer/reducer";
// const mapStateToProps = (state) => {
//   return {
//     recent: state,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     ViewRecent: (obj) => dispatch(ViewRecent(obj)),
//   };
// };

function Recent(props) {
  useEffect(() => {
    fetch();
  }, []);
  const fetch = () => {
    // props.ViewRecent();
    document.title = "Calculator App";
    console.log("Recent: ",pre.length);
    // console.log("Recent: ",props.recent[0]);
  };
  return (
    <>
      <div>
        <MyNavbar></MyNavbar>
        <ListGroup variant="flush">
          {pre.map((item, index) => {
            if(!pre.length){
              return (
                <>
                  <ListGroup.Item>
                    <p>All your recent Calculations will appear here</p>
                  </ListGroup.Item>
                  {/* <ListGroup.Item></ListGroup.Item> */}
                </>
              );
            }
            if(pre.length){
              return (
                // alert("asa")
                <ListGroup.Item as="li" className="item">
                    {item.state} = {item.output}
                  </ListGroup.Item>
              );
            }
          })}
        </ListGroup>
        {/* <table className="RecentTable">
          <tbody>
            <tr>
              <th>Calculation</th>
              <th>Result</th>
            </tr>
            {/* <tr></tr> */}
        {/* {pre.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.state} = </td>
                  <td>{item.output}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </div>
    </>
  );
}
export default Recent;
