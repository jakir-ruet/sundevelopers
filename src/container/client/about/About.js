import React, {Component} from "react";
import Overview from "./components/Overview";
import ManagmentMeassage from "./components/ManagmentMeassage";
import OurMethodology from "./components/OurMethodology";
import OurStrength from "./components/OurStrength";
import './components/About.css';

class About extends Component{
    componentDidMount (){
        document.title = "About | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <>
                <Overview/>
                <ManagmentMeassage/>
                <OurMethodology/>
                <OurStrength/>
            </>
        )
    }
}

export default About;