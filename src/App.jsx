import { useEffect, useState } from "react"
import grapesjs from 'grapesjs'
import gjsPresentWebpage from 'grapesjs-preset-webpage'
function App() {
  const [editor, setEditor] = useState(null);
  useEffect(()=>{
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsPresentWebpage],
      pluginsOpts: {
        [gjsPresentWebpage]: {
          
        },
      },
    });
    setEditor(editor);
  }, []);
  return (
   <div className="App">
    <div id="editor"></div>
   </div>
  )
}

export default App
