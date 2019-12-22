import React, { Component, Fragment } from 'react';
import '../css/button.css';

class Sample1 extends Component {
  render() {
    return (
      <Fragment>
        <h1>Sample 1</h1>
        <button type="button" className={"btn btn_confirm"}>Confirm</button>
        <button type="button" className={"btn btn_cancel"}>Cancel</button>
      </Fragment>
    );
  }
}
export default Sample1;