import React, { Component, Fragment } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import theme from '../theme';

class Sample5 extends Component {
  render() {
    return (
      <Fragment>
        <h1>Sample 5</h1>
        <ThemeProvider theme={theme}>
          <TestButton1>Button</TestButton1>
          <TestButton2>Button</TestButton2>
        </ThemeProvider>
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
    background-color: ${props => props.theme.successColor};
`;

const TestButton2 = styled.button`
    ${defaultBtn};
    background-color: ${props => props.theme.dangerColor};
`;

export default Sample5;