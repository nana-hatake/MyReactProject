import React from 'react';
/*
渲染列表
* */
export default class Todoitem extends React.Component{


    render(){
        return(
            <div>
                <ul>
                    {this.props.todoitem.map((item) =>
                        <li id={item.index}>{item}
                        </li>

                    )
                    }
                </ul>
            </div>
        )
    }
}
