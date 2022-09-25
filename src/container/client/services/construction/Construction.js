import React, {Component} from "react";
import blockcahin from "../../../../assets/img/Services/blockchain.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

class BlockChain extends Component{
    componentDidMount() {
        document.title = "Block Chain | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <div className="container mt-3" id="ecommerce" style={{marginTop: "25"}}>
                <div className="section-header">
                    <h2>Block Chain:</h2>
                    <p className="wow fadeInUp"  style={{textAlign:"justify"}}>
                        Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved.
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-6 wow fadeInLeft">
                        <div className="img-ecommerce pt-5">
                            <img className="img-responsive" width='100%' src={blockcahin} alt="blockcahin"/>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '5px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto" style={{textAlign: 'justify'}}>
                                    There are some exciting blockchain features but among them “Immutability” is undoubtedly one of the key features of blockchain technology.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '5px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto" style={{textAlign: 'justify'}}>
                                    The network is decentralized meaning it does’t have any governing authority or a single person looking after the framework.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '5px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto" style={{textAlign: 'justify'}}>
                                    Usually, a public ledger will provide every information about a transaction and the participant. It’s all out in the open, nowhere to hide.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '5px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto" style={{textAlign: 'justify'}}>
                                    Every blockchain thrives because of the consensus algorithms. The architecture is cleverly designed, and consensus algorithms are at the core of this architecture.
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                <span className="badge bg-info" style={{marginTop: '5px'}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                                <div className="ms-2 me-auto" style={{textAlign: 'justify'}}>
                                    Traditional banking systems are quite slow. Sometimes it can take days to process a transaction after finalizing all settlements.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row pb-1">
                    <div className="wow fadeInUp" style={{padding: "11 25 0", fontSize: "20", fontWeight: "bold", color: "purple"}}>You should have to know?
                    </div>
                    <hr/>
                    <p className="wow fadeInUp" style={{padding: "11 25 0", fontSize: "16", textAlign: "justify"}}>
                        Business runs on information. The faster it’s received and the more accurate it is, the better. Blockchain is ideal for delivering that information because it provides immediate, shared and completely transparent information stored on an immutable ledger that can be accessed only by permissioned network members. A blockchain network can track orders, payments, accounts, production and much more. And because members share a single view of the truth, you can see all details of a transaction end to end, giving you greater confidence, as well as new efficiencies and opportunities.
                    </p>
                </div>
            </div>
        )
    }
}
export default BlockChain;