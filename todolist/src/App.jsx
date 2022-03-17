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
        this.removeTodo=this.removeTodo.bind(this);
        this.editTodo=this.editTodo.bind(this);
        this.MoveToDone=this.MoveToDone.bind(this);
    }

    //定义在类上的方法
    saveTodo(){

        // console.log(this)
        const todoInput =document.getElementById('todoInput').value
                    // console.log(todoInput)
        // console.log(this.state.todoitem)
        const obj= this.state.todoitem
        this.setState({
            todoitem: [...obj,todoInput]
        });
        // console.log(this.refs.myInput)
        //点击保存清空输入框文本
        this.refs.myInput.value='';

    }
    //监听回车键保存方法
    onKeyDownchange(e) {
            //回车键
        if(e.keyCode == 13) {
            if( this.refs.myInput.value==''){

            }
            else {
                //事件操作
                this.saveTodo()
            }

        }
    }
    removeTodo(event){
        // console.log(event.target.id)
        const index =event.target.id;
        let todoitem =this.state.todoitem
        todoitem.splice(index,1)
        this.setState({
            todoitem:todoitem
        }
        )

    }
    editTodo(event){
        // console.log(event.target)
    }
    MoveToDone(event){
        // console.log(event.target.id)
        const index =event.target.id;
        const value =event.target.value;
        console.log(value)
        //移动到doneitem
        let doneitem =this.state.doneitem
        this.setState({
            doneitem:[...doneitem,value]
        })
        //从todoitem移出去
        let todoitem =this.state.todoitem
        todoitem.splice(index,1)
        this.setState({
                todoitem:todoitem
            }
        )


    }

        render(){

            return (
                <div >

                    <Header title={this.state.todotitle}/>
                    <span>
                        <input ref="myInput" id='todoInput' placeholder={'回车或者按键保存' } onKeyDown={e=> this.onKeyDownchange(e)}/>
                        <button onClick={this.saveTodo} >保存</button>
                    </span>
                    <Todoitem todoitem={this.state.todoitem} removeTodo={this.removeTodo} editTodo={this.editTodo} MoveToDone={this.MoveToDone}>
                    </Todoitem>
                    <Header title={this.state.donetitle}/>
                    <DoneItem doneitem={this.state.doneitem}/>
                </div>
            );
        }
}


