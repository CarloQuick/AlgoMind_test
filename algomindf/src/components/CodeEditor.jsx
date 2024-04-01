//Tutorial used: https://www.youtube.com/watch?v=aXXZwyeTJ98
//CodeMirror Documentation: https://codemirror.net/
//Additional GitHub resource/refernce: https://github.com/uiwjs/react-codemirror  
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror"
import {languages} from "@codemirror/lang-cpp"
import { useCallback, useState } from "react";
//import '@uiw/react-codemirror/src/theme';
//import '@uiw/react-codemirror/src/theme'
//import "codemirror/keymap/sublime"
//import "codemirror/theme/dracula.css"

//initial to test if CodeMirror imported and implemented correctly
//const code = "const a = 0;";

const CodeEditor = () => {
    //Bind Code to React Hook
    const  [value, setValue] = useState('#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main(){\n\treturn 0;\n}');
    const [testCaseResults, setTestCaseResults] = useState([]);
    const onChange = useCallback((val, ViewUpdate) => {
        //console.log('val:', val); //check that code is updating
        setValue(val);
    }, []);

    //function to eventually submit code to the backend
    const submitCode = async (e) => {
        e.preventDefault(); //doesn't allow the page to refresh when submit is clicked

        console.log(value); //for now, console.log the code

        //initial code in try-catch
        const res = await fetch("api/codeeditor", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            value,
            }),
        });
        console.log("post fetch");
        /*
        try {
            console.log("loading code...")
            const sendCode = await get("api/codeeditor", {
              method: "GET",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                value,
              }),
            });
          } catch (error) {
            console.log("what code?", error);
          }
          */
    }

    //return CodeMirror object
    return (
        <div className="CodeEditor">
            <header className="CodeEditor-header">
                <div className="absolute top-40 bottom-40 left-10 right-10 text-left">
                    <div>Create a funciton that adds two numbers in C++.</div>
                    <div className="flex space-x-2">
                        {testCaseResults.map((res, i) => {
                            return (
                                <div key={i}>
                                    <div>{res === 'True' ? '✅ passed' : '❌ failed'}</div>
                                </div>
                            );
                        })}
                    </div>
                <CodeMirror
                    value={value}
                    options={{
                        //theme: "dracula",
                        keymap: "sublime",
                        //mode: "python",
                        languages: "cpp",
                    }}
                    onChange={onChange}
                    /* getValue didn't work
                    //when code is changed in code editor
                    onChange={(editor, data, value) => {
                        //automatically changing the code value from editor 
                        setCode(editor.getValue());
                        console.log(code);
                    }}
                    */
                />
                <button className="mt-4 border-2 bg-lime-500 px-4 py-2 rounded-md" onClick={submitCode}>Submit</button>
                </div>
            </header>
        </div>
    );
}

export default CodeEditor;