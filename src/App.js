
import React, { useState, useEffect } from 'react';
import Editor from './components/Editor';
import useLocal_storage from './hooks/useLocal_storage';
import Files from './components/Files';
function App() {
  const [html, setHtml] = useLocal_storage('html',`<!--You can add all your HTML code here-->
<div class="center">
  <h1> Hello! peeps</h1>
  <h3>Edit Html Css and Js files here and check the output live here</h3>
</div>`)
  const [css, setCss] = useLocal_storage('css',`/*You can add all your css here*/
  .center{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color:white;
}
body{
    background-color: #66b9ca;
}
`)
  const [js, setJs] = useLocal_storage('js','//You can add all your JS code here')
  const [srcDoc, setSrcDoc] = useState('');
  const  html_editor={
    language:"xml",
    displayName:"index.html",
    value:html,
    onChange:setHtml  
  }
  const [select, setSelect]=useLocal_storage('output',1)
  // const [state, setstate] = useState(initialState)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
      <body> ${html} </body>
      <style> ${css} </style>
      <script> ${js} </script> 
    </html> `
      )
    }, 300);
    return () => {
      clearTimeout(timeout);
    }
  }, [html, css, js])

  var css_editor={
    language:"css",
    displayName:"index.css",
    onChange:setCss,
    value:css,
  }

  var js_editor={
    language:"javascript",
    displayName:"index.js",
    value:js,
    onChange:setJs  
  }


    function changeProps_func(lang){
      if(lang==='html'){
        setSelect(1)
      }
      else if(lang==='css'){
        setSelect(2)
      }
      else if(lang==='js'){
        setSelect(3)
      }
    }
    var output='';
    if(select===1){
      output=<Editor
        {...html_editor}
      />
    }else if(select===2){
      output=<Editor
      {...css_editor}
      />
    }else if(select===3){
      output=<Editor
      {...js_editor}
    />
    }
  return (
    <>  
      <div className="pane top-pane">
        <Files
        changeProps_func={changeProps_func}
        />
      {output}
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
