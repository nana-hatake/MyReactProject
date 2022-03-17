import React from 'react';
/*
用于展示标题：TodoList
* */
export default class Header extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
