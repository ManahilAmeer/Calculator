import React, { useEffect } from "react";
import "../style/Recent.css";
import { connect } from "react-redux";
import { ViewRecent } from "../Reducer/reducer";
const mapStateToProps = (state) => {
  return {
    recent: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ViewRecent: (obj) => dispatch(ViewRecent(obj)),
  };
};

function Recent(props) {
  useEffect(() => {
    fetch();
  }, []);
  const fetch = () => {
    props.ViewRecent();
    document.title = "Calculator App";
      console.log("Recent: ",props.recent);
  };
  return (
    <>
      <div>
        <table className="RecentTable">
          <tbody>
            <tr>
              <th>Calculation</th>
              <th>Result</th>
            </tr>
            <tr></tr>
            {/* {props.recent.map((item, index) => {
              return (
                <tr>
                  <td>{item.state}</td>
                  <td>{item.output}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Recent);
