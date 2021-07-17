import React from 'react'

export default function Files(props) {
    // const changeProps_func=props.changeProps_func;
    return (
        <div className="files">
            <h3 className="title">CODE EDITOR</h3>
            <hr className="line" />
            
            <div className="buttons">
            <button onClick={()=>props.changeProps_func('html')}>index.html</button>
            <button onClick={()=>props.changeProps_func('css')}>index.css</button>
            <button onClick={()=>props.changeProps_func('js')}>index.js</button>
            </div>
            
        </div>
    )
}
