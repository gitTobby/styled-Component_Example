import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import './css/button.css';

class Sample2 extends Component {
  render() {
    return (
      <Fragment>
        <h1>Sample 2</h1>
        <button type="button" className={"btn btn_confirm"}>Confirm</button>
        <button type="button" className={"btn btn_cancel"}>Concel</button>
        <TestButton type="button" className={"btn btn_confirm"}>Test Button</TestButton>
      </Fragment>
    );
  }
}

const TestButton = styled.button`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background-color: #fff; 
    border: 1px solid #b4b4b4;
    border-radius: 4px;
    color: #4a4a4a;
    font-size: 14px;
    vertical-align: top;
    cursor: pointer;
    box-sizing: border-box;
    &+.btn {
      margin-left: 10px;
    }
    &:focus,
    &:hover {
        color: #fff;
    }
    &.btn_confirm:focus,
    &.btn_confirm:hover {
        background-color: #0067ff;
    }
    &.btn_cancel:focus,
    &.btn_cancel:hover {
        background-color: #e61216;
    }
`;

export default Sample2;