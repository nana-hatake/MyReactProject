import React from "react";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem";
import DoneItem from "./components/DoneItem";


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            todoitem:[],
            doneitem:[
                'eat 饭',
                'eat 水果'
            ],
            todotitle:'ToDoList',
            donetitle:'DoneList'
        }

        this.saveTodo=this.saveTodo.bind(this);
    }

    //定义在类上的方法
    saveTodo(){
        console.log(this)
        const todoInput =document.getElementById('todoInput').value
                    console.log(todoInput)
        console.log(this.state.todoitem)
        const obj= this.state.todoitem
        this.setState({
            todoitem: [...obj,todoInput]
        });



    }

        render(){

            return (
                <div >

                    <Header title={this.state.todotitle}/>
                    <span>
                        <input id='todoInput' placeholder={'回车或者按键保存' }/>
                        <button onClick={this.saveTodo} >保存</button>
                    </span>
                    <Todoitem todoitem={this.state.todoitem}>
                    </Todoitem>
                    <Header title={this.state.donetitle}/>
                    <DoneItem doneitem={this.state.doneitem}/>
                </div>
            );
        }
}


