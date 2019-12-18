import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class SpeedTest2 extends Component {
  render() {
    return (
      <Fragment>
        <h1>SpeedTest2</h1>
        <Button>Button</Button>
      </Fragment>
    );
  }
}

const Button = styled.button`
  display: inline-block;
  position: relative;
  padding: 2em 4em;
  background: #fff;
  border: 1px solid #000;
  border-radius: 0px;
  color: #4a4a4a;
  font-size: 1em;
  text-align: center;
  vertical-align: top;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  box-sizing: border-box;
`
export default SpeedTest2;