import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class Sample3 extends Component {
  render() {
    return (
      <Fragment>
        <h1>Sample 3</h1>
        <button type="button" className={"btn btn_cofirm"}>확인</button>
        <button type="button" className={"btn btn_cancel"}>취소</button>
        <TestButton className={"btn btn_cofirm"}>New Button</TestButton>
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
    &+.btn {
      margin-left: 10px;
    }
    &:focus,
    &:hover {
        color: #fff;
    }
    &.btn_cofirm:focus,
    &.btn_cofirm:hover {
        background-color: #0067ff;
    }
    &.btn_cancel:focus,
    &.btn_cancel:hover {
        background-color: #e61216;
    }
`;

export default Sample3;