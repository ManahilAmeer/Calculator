import React from "react";

class Keyboard extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <td>
            <button className="number">1</button>
          </td>
          <td>
            <button className="number">2</button>
          </td>
          <td>
            <button className="number">3</button>
          </td>
          <td>
            <button className="operator">+</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="number">4</button>
          </td>
          <td>
            <button className="number">5</button>
          </td>
          <td>
            <button className="number">6</button>
          </td>
          <td>
            <button className="operator">-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="number">7</button>
          </td>
          <td>
            <button className="number">8</button>
          </td>
          <td>
            <button className="number">9</button>
          </td>
          <td>
            <button className="operator">*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className="C">C</button>
          </td>
          <td>
            <button className="number">0</button>
          </td>
          <td>
            <button className="number">=</button>
          </td>
          <td>
            <button className="operator">/</button>
          </td>
        </tr>
      </table>
    );
  }
}
export default Keyboard;
