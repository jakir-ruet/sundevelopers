import React from 'react';
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {AnimationFade, Transition} from "../../../shared/Animations";

const Body = ({title, children, paths}) => {

    const navigate = useNavigate();

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={AnimationFade}
            transition={Transition}
            className="section"
            style={{minHeight: '480px'}}
        >
            <div className="pagetitle mb-0">
                <div className="d-flex bd-highlight">
                    <div className="bd-highlight">
                        <h1>{title}</h1>
                    </div>
                    <div className="ms-auto bd-highlight">
                        <nav>
                            <ol className="breadcrumb mb-2">

                                {paths.map(item => (
                                    <li key={item.name} className="breadcrumb-item">
                                        <span onClick={() => navigate(item.path)} style={{ cursor: 'pointer'}}>{item.name}</span>
                                    </li>
                                ))}

                                <li className="breadcrumb-item active">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-12'>
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default Body;