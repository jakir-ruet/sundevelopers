import { Component, Fragment } from "react";
import Slider from "./components/Slider";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Greetings from "./components/Greetings.js";
import Process from "./components/Process";

class Home extends Component{
    componentDidMount (){
        document.title = "Home | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <Fragment>
                <Slider/>
                <Greetings/>
                <Features/>
                <Process/>
                <Clients/>
            </Fragment>
        )
    }
}

export default Home;