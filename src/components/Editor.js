import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompressAlt,faExpandAlt} from '@fortawesome/free-solid-svg-icons';


export default function Editor(props) {
    const [open, setOpen] = useState(true)
    const {
        language,
        displayName,
        value,
        onChange,
    }=props;

    
    function handleChange(editor,data,value){
        onChange(value)
    }
    function toggle_close(){
        setOpen(prevOpen=>!prevOpen);
    }
    return (
        <div className={`editor-container ${open ? '':'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button 
                className="Expand-collapse-btn"
                onClick={()=>toggle_close()}>
                    {/* {open_close} */}
                    <FontAwesomeIcon icon={open? faCompressAlt:faExpandAlt}/>
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping:true,
                    lint:true,
                    theme:'material',
                    mode:language,
                    lineNumbers:true
                }}
            />


        </div>
    )
}
