import React, {Component} from 'react';
import Appy from './Appy';

class Hello extends Component{
    render(){
        return (
        <div className='f1 tc'>
            <h1>StopHating.com</h1>
            <h2>{this.props.myProperty}</h2>
            <h3><Appy myProperty={this.props.myProperty}/></h3>
        </div>);
    }
}

export default Hello; 