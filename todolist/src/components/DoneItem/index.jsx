import React from 'react';
/*
渲染列表
* */
export default class DoneItem extends React.Component{


    render(){
        return(
            <div>
              <ul>
                  {this.props.doneitem.map((item) =>
                          <li id={item.index}>{item}
                                   </li>

                  )
                  }
              </ul>
            </div>
        )
    }
}
