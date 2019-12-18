import React, { Component, Fragment } from 'react';

class SpeedTest1 extends Component {
  render() {
    return (
      <Fragment>
        <h1>SpeedTest1</h1>
        <button type="button" style={{
            display: 'inline-block',
            position: 'relative',
            padding: '2em 4em',
            background: '#fff',
            border: '1px solid #000',
            borderRadius: '0px',
            color: '#4a4a4a',
            fontSize: '1em',
            textAlign: 'center',
            verticalAlign: 'top',
            textDecoration: 'none',
            outline: '0',
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}>Button</button>
      </Fragment>
    );
  }
}
export default SpeedTest1;