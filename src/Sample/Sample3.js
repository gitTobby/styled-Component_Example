import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class Sample3 extends Component {
  render() {
    return (
      <Fragment>
        <h1>Sample 3</h1>
        <Button type="button">Confirm</Button>
        <Button type="button" danger>Cancel</Button>
        <Anchor href="https://www.wehago.com" target="_blink" bgcolor="purple">WEHAGO</Anchor>
      </Fragment>
    );
  }
}

const Button = styled.button`
  display: inline-block;
  width: 100px;
  padding: 10px;
  background-color: gray;
  // background-color: ${props => props.danger ? 'red' : 'green'};
  // background-color: ${props => props.bgcolor || "green"};
  background-color: ${props => props.danger ? 'red' : props.bgcolor || "green"};
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
`;

const Anchor = styled(Button.withComponent("a"))`
  margin-left: 4px;
  text-decoration: none;
  text-align: center;
  //background-color: yellow;
`;

export default Sample3;