import React from 'react';
import ReactDOM from 'react-dom';
import Hello from 'hello/Hello.jsx';

class Loader {
    createHelloComponent() {
        let l_oDiv = document.createElement("div");
        ReactDOM.render(<Hello />, l_oDiv);
        return l_oDiv.childNodes[0];
    }
}

export default new Loader();
export const bobo = "strFromLoader";