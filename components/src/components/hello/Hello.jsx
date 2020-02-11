import React, { Component } from 'react';
import "./hello.scss";

const
    RANDOM_DOG_URL = "https://random.dog/",
    RANDOM_DOG_CONTAINER_ID = "dog-img";

//=============================================================================
function _fetchRandomDog() {
    fetch(RANDOM_DOG_URL)
        .then(i_oResponse => i_oResponse.body.getReader().read())
        .then(i_oReadData => {
            let l_sRawHTML = String.fromCharCode.apply(String, i_oReadData.value),
                l_oDOMParser = new DOMParser(),
                l_oDocument,
                l_oElement;

            l_oDocument = l_oDOMParser.parseFromString(l_sRawHTML, "text/html");
            l_oElement = l_oDocument.getElementById(RANDOM_DOG_CONTAINER_ID);

            if (l_oElement) {
                this.setState({
                    randomDogElement: l_oElement
                });
            }
        })
}

//=============================================================================
class Hello extends Component {

    //=============================================================================
    constructor(props) {
        super(props);
        this.state = {
            randomDogElement: null
        };

        this.fetchRandomDog = _fetchRandomDog.bind(this);
    }

    //=============================================================================
    render() {
        let l_oRandomDog,
            l_oSourceElement = this.state.randomDogElement,
            l_sSrc;

        if (l_oSourceElement) {
            if (l_oSourceElement.tagName === "IMG") {
                l_sSrc = RANDOM_DOG_URL + l_oSourceElement.src.replace(/.*\/(.*\.\w+)$/, "$1");
                l_oRandomDog = (<img src={l_sSrc} />);
            } else if (l_oSourceElement.tagName === "VIDEO") {
                l_oSourceElement = l_oSourceElement.getElementsByTagName("source")[0];
                l_sSrc = RANDOM_DOG_URL + l_oSourceElement.src.replace(/.*\/(.*\.\w+)$/, "$1");
                l_oRandomDog = (
                    <video autoPlay={true} loop={true} muted={true}>
                        <source src={l_sSrc} type={l_oSourceElement.type} />
                    </video>
                );
            }
        }

        return (
            <div className="hello-container">
                <span className="">Hello From React! Here's a random dog. &#x1f436;</span>
                {l_oRandomDog}
            </div>
        );
    }

    //=============================================================================
    componentDidMount() {
        // fetch random dog
        this.fetchRandomDog();
    }
}

export default Hello;

