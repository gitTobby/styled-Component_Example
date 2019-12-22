import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';

class Sample4 extends Component {
  render() {
    return (
      <Fragment>
        <h1>Sample 4</h1>
        <TestButton1>Button</TestButton1>
        <TestButton2>Button</TestButton2>
      </Fragment>
    );
  }
}

const defaultBtn = css`
  display: inline-block;
  width: 100px;
  padding: 10px;
  background-color: gray;
  border: 1px solid #b4b4b4;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  vertical-align: top;
  cursor: pointer;
  box-sizing: border-box;
  &+button {
    margin-left: 4px;
  }
`
const TestButton1 = styled.button`
    ${defaultBtn};
`;

const TestButton2 = styled.button`
    ${defaultBtn};
    background-color: purple;
`;

export default Sample4;