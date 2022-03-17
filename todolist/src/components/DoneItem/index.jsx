import React from 'react';
/*
渲染列表
* */
export default class DoneItem extends React.Component{



    render(){
        return(
            <div>
              <ul>
                  {this.props.doneitem.map((item,index) =>
                          <li id={index}>{item}
                                   </li>

                  )
                  }
              </ul>
            </div>
        )
    }
}
