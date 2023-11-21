import React, { Component } from 'react';
import loading from './loading.gif.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center ' style={{marginTop:"300px",}}>
        <img src={loading} alt="loading"></img>
      </div>
    );
  }
}
