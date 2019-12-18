import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class Sample2 extends Component {
  render() {
    return (
      <Fragment>
        <h1>Sample 2</h1>
        <Button type="button">Confirm</Button>
        <Button danger>Cancel</Button>
        <Anchor href="https://www.wehago.com" target="_blank">WEHAGO</Anchor>
      </Fragment>
    );
  }
}

const Button = styled.button`
  float:left;
  height: 58px;
  padding: 20px;
  background-color: ${props => props.danger ? 'red' : 'green'};
  border: none;
  color: #fff;
  font-size:15px;
  box-sizing: border-box;
  &+button {
    margin-left: 4px;
  };
`;

const Anchor = styled(Button.withComponent("a"))`
  margin-left: 4px;
  text-decoration: none;
  vertiacl-align: top;
`;

export default Sample2;