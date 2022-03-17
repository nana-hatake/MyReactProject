import React from 'react';
/*
渲染列表
* */
export default class Todoitem extends React.Component{
    constructor(props) {
        super(props);

        //e =>this.props.removeTodo() ;console.log(this.props)
    }

        render(){
        return(
            <div>
                <ul >
                    {this.props.todoitem.map((item,index) =>

                        <li id={index} onClick={this.props.MoveToDone} value={item}>{item}
                            <button id={index} onClick={this.props.removeTodo}>删除</button>
                            <button id={index} onClick={this.props.editTodo}>编辑</button>
                        </li>


                    )
                    }
                </ul>
            </div>
        )
    }
}
