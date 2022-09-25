import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCheckCircle, faCheckSquare} from "@fortawesome/free-solid-svg-icons";

class PrivacyPolicy extends Component{
    componentDidMount (){
        document.title = "Privacy Policy | Welcome to Sun Developers | A home for your digital supports..."
    }
    render() {
        return(
            <>
                <div className="services">
                    <div id="services" className="wow fadeInUp">
                        <div className="container">
                            <div className="section-header">
                                <h2>Privacy Policy</h2>
                                <p style={{ textAlign: "justify" }}>
                                    Please read these privacy policy carefully before using our
                                    service. A privacy policy is a statement or a legal document that discloses some or all of
                                    the ways a party gathers, uses, discloses, and manages a customer or client's data. It
                                    fulfils a legal requirement to protect a customer or client's privacy.
                                </p>
                                <p>Last updated: January 1, 2022</p>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Interpretation: </b>
                                        <p className="p-0 m-0">
                                            The words of which the initial letter is capitalized have meanings defined under the
                                            following conditions. The following definitions shall have the same meaning regardless
                                            of whether they appear in singular or in plural.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Definitions: </b>
                                        <p className="p-0 m-0">For the purposes of these Terms and Conditions:</p>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <span style={{paddingLeft: '5px'}}>
                                                <FontAwesomeIcon icon={faCheckCircle}/> Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Sun Developers,
                                                 <a href="mailto:info@sundevelopers.net"> info@sundevelopers.net</a>.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <span style={{paddingLeft: '5px'}}>
                                                <FontAwesomeIcon icon={faCheckCircle}/> <b>Country refers to:</b> Bangladesh & Service refers to the Website.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Service provider means any natural or legal person who processes the data on
                                        behalf of the company. It refers to third-party companies or individuals
                                        employed by the company to facilitate the service, to provide the service on
                                        behalf of the company, to perform services related to the service or to assist
                                        the company in analyzing how the service is used.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Third-party social media service refers to any website or any social network
                                        website through which a user can log in or create an account to use the service.
                                        Personal data is any information that relates to an identified or identifiable
                                        individual.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Cookies are small files that are placed on your computer, mobile device or any
                                        other device by a website, containing the details of your browsing history on
                                        that website among its many uses.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 Usage data refers to data collected automatically, either generated by the use
                                                of the service or from the service infrastructure itself (for example, the
                                                duration of a page visit).
                                             </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <p><b>Collecting & using your personal data (Types of data collected):</b></p>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 <b>Personal data:</b>
                                                <p className="p-0 m-0">
                                                    While using our service, we may ask you to provide us with certain
                                                personally identifiable information that can be used to contact or identify you.
                                                Personally, identifiable information may include, but is not limited to email.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 <b>Usage data:</b>
                                                <p className="p-0 m-0">
                                                    Usage data is collected automatically when using the service. Usage data may
                                include information such as your device's internet protocol address (e.g. IP Address),
                                browser type, browser version, the pages of our service that you visit, the time and
                                date of your visit, the time spent on those pages, unique device identifiers and other
                                                </p>
                                                <p className="p-0 m-0">
                                                    When you access the service by or through a mobile device, we may collect certain
                                    information automatically, including, but not limited to, the type of mobile device
                                    you use, your mobile device unique id, the ip address of your mobile device, your
                                    mobile operating system, the type of mobile internet browser you use, unique device
                                    identifiers and other diagnostic data.
                                                </p>
                                                <p className="p-0 m-0">
                                                    We may also collect information that your browser sends whenever you visit our
                                        service or when you access the service by or through a mobile device.
                                                </p>
                                             </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Necessary/essential cookies: </b>
                                        <p className="pb-1 m-0">
                                            We use cookies and similar tracking portfolio to track the activity on our service
                                            and store certain information. Tracking portfolio used are beacons, tags, and scripts
                                            to collect and track information and to improve and analyze our service.
                                        </p>
                                        <p className="pb-1 m-0">
                                            You can instruct your browser to refuse all cookies or to indicate when a cookie is
                                            being sent. However, if you do not accept cookies, you may not be able to use some
                                            parts of our service.
                                        </p>
                                        <p className="pb-1 m-0">
                                            Cookies can be "persistent" or "session" cookies. Persistent cookies remain on
                                            your personal computer or mobile device when you go offline, while session
                                            cookies are deleted as soon as you close your web browser. We use both session
                                            and persistent cookies for the purposes set out below:
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Tracking portfolio and cookies: </b>
                                        Type: session cookies, Administered by: us. Purpose: these cookies are essential
                                        to provide you with services available through the website and to enable you to
                                        use some of its features. They help to authenticate users and prevent fraudulent
                                        use of user accounts. Without these cookies, the services that you have asked
                                        for cannot be provided, and we only use these cookies to provide you with those
                                        services.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Cookies policy/notice acceptance cookies: </b>
                                        Type: persistent cookies, Administered by: us. Purpose: these cookies identify
                                        if users have accepted the use of cookies on the website.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Functionality cookies: </b>
                                        Type: persistent cookies, Administered by: us. Purpose: these cookies allow us
                                        to remember choices you make when you use the website, such as remembering your
                                        login details or language preference. The purpose of these cookies is to provide
                                        you with a more personal experience and to avoid you having to re-enter your
                                        preferences every time you use the website. For more information about the
                                        cookies we use and your choices regarding cookies, please visit our cookies
                                        policy.
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <p><b>Use of your personal data: </b> The company may use personal data for the following purposes</p>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <span style={{paddingLeft: '5px'}}>
                                                <FontAwesomeIcon icon={faCheckCircle}/> To provide and maintain our service, including to monitor the usage of our service.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                <p className="pb-1 m-0">
                                                    <b>To manage your account:</b> To manage your registration as a user of the service. The personal data you provide can give you access to different functionalities of the service that are available to you as a registered user.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                <p className="pb-1 m-0">
                                                    <b>For the performance of a contract:</b> The development, compliance and undertaking of the purchase contract for the products, items or services you have purchased or of any other contract with us through the service.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                <p className="pb-1 m-0">
                                                    <b>To contact you:</b> to contact you by email, telephone calls, SMS, or other
                                        equivalent forms of electronic communication, such as a mobile application's
                                        push notifications regarding updates or informative communications related to
                                        the functionalities, products or contracted services, including the security
                                        updates, when necessary or reasonable for their implementation.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                <p className="pb-1 m-0">
                                                    <b>To provide: </b> To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <span style={{paddingLeft: '5px'}}>
                                                <FontAwesomeIcon icon={faCheckCircle}/> <b>To manage</b> your requests: to attend and manage your requests to us. We may share
                                        your personal information in the following situations.
                                             </span>
                                        </div>

                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                <p className="pb-1 m-0">
                                                    <b>With service providers: </b> we may share your personal information with service
                                        providers to monitor and analyze the use of our service, to show advertisements
                                        to you to help support and maintain our service, to contact you, to advertise on
                                        third party websites to you after you visited our service or for payment
                                        processing.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                <p className="pb-1 m-0">
                                                    <b>For business transfers: </b> we may share or transfer your personal information in
                                        connection with, or during negotiations of, any merger, sale of company assets,
                                        financing, or acquisition of all or a portion of our business to another
                                        company.
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                <p className="pb-1 m-0">
                                                    <b>With affiliates: </b> we may share your information with our affiliates, in which
                                        case we will require those affiliates to honor this privacy policy. Affiliates
                                        include our parent company and any other subsidiaries, joint venture partners or
                                        other companies that we control or that are under common control with us.
                                                </p>
                                             </span>
                                        </div>

                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <span style={{paddingLeft: '5px'}}>
                                                <FontAwesomeIcon icon={faCheckCircle}/> <b> With business partners:</b> we may share your information with our business partners
                                        to offer you certain products, services or promotions.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                <p className="pb-1 m-0">
                                                    <b>With other users: </b> when you share personal information or otherwise interact in
                                        the public areas with other users, such information may be viewed by all users
                                        and may be publicly distributed outside. If you interact with other users or
                                        register through a third-party social media service, your contacts on the
                                        third-party social media service may see you name, profile, pictures and
                                        description of your activity. Similarly, other users will be able to view
                                        descriptions of your activity, communicate with you and view your profile.
                                                </p>
                                             </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Retention of your personal data: </b>
                                        <p>
                                            The company will retain your personal data only for as long as is necessary for the
                                            purposes set out in this privacy policy. We will retain and use your personal data to
                                            the extent necessary to comply with our legal obligations (for example, if we are
                                            required to retain your data to comply with applicable laws), resolve disputes, and
                                            enforce our legal agreements and policies.
                                        </p>
                                        <p>
                                            The company will also retain usage data for internal analysis purposes. Usage data
                                            is generally retained for a shorter period of time, except when this data is used to
                                            strengthen the security or to improve the functionality of our service, or we are
                                            legally obligated to retain this data for longer time periods.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b>Transfer of your personal data: </b>
                                        <p>
                                            Your information, including personal data, is processed at the company's operating
                                            offices and in any other places where the parties involved in the processing are
                                            located. It means that this information may be transferred to — and maintained on —
                                            computers located outside of your state, province, country or other governmental
                                            jurisdiction where the data protection laws may differ than those from your
                                            jurisdiction.
                                        </p>
                                        <p>
                                            Your consent to this privacy policy followed by your submission of such information
                                            represents your agreement to that transfer.The company will take all steps
                                            reasonably necessary to ensure that your data is treated securely and in accordance
                                            with this privacy policy and no transfer of your personal data will take place to an
                                            organization or a country unless there are adequate controls in place including the
                                            security of your data and other personal information.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <p><b>Disclosure of your personal data:</b></p>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 <b>Business transactions</b>
                                                If the company is involved in a merger, acquisition or asset sale, your personal data
                                may be transferred. We will provide notice before your personal data is transferred and
                                becomes subject to a different privacy policy.
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <FontAwesomeIcon style={{margin: '5px'}} icon={faCheckCircle}/>
                                            <span style={{paddingLeft: '5px'}}>
                                                 <b>Law enforcement</b>
                                                <p className="p-0 m-0">
                                                    Under certain circumstances, the company may be required to disclose your personal data
                                if required to do so by law or in response to valid requests by public authorities (e.g.
                                A court or a government agency).
                                                </p>
                                             </span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                            <span style={{paddingLeft: '5px'}}>
                                                <FontAwesomeIcon icon={faCheckCircle}/> <b>Other legal requirements</b>
                                                To provide and maintain our service, including to monitor the usage of our service.
                                                <ul>
                                                    <li className="list-group-item" >
                                                        <p className="p-0 m-0 "><FontAwesomeIcon icon={faCheckSquare}/> Comply with a legal obligation</p>
                                                    </li>
                                                    <li className="list-group-item" >
                                                        <p className="p-0 m-0 "><FontAwesomeIcon icon={faCheckSquare}/> Protect and defend the rights or property of the company</p>
                                                    </li>
                                                    <li className="list-group-item" >
                                                        <p className="p-0 m-0 "><FontAwesomeIcon icon={faCheckSquare}/> Prevent or investigate possible wrongdoing in connection with the service</p>
                                                    </li>
                                                    <li className="list-group-item" >
                                                        <p className="p-0 m-0 "><FontAwesomeIcon icon={faCheckSquare}/> Protect the personal safety of users of the service or the public</p>
                                                    </li>
                                                    <li className="list-group-item" >
                                                        <p className="p-0 m-0 "><FontAwesomeIcon icon={faCheckSquare}/> Protect against legal liability</p>
                                                    </li>
                                                </ul>
                                             </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b> Security of your personal data</b>
                                        <p>
                                            The security of your personal data is important to us, but remember that no method of transmission over the internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b> Detailed information on the processing of your personal data</b>
                                        <p>
                                            Service providers have access to your personal data only to perform their tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b> Children's privacy</b>
                                        <p>
                                            Our service does not address anyone under the age of 13. We do not knowingly collect
                                            personally identifiable information from anyone under the age of 13. If you are a parent
                                            or guardian and you are aware that your child has provided us with personal data, please
                                            contact us. If we become aware that we have collected personal data from anyone under
                                            the age of 13 without verification of parental consent, we take steps to remove that
                                            information from our servers.
                                        </p>
                                        <p>
                                            We also may limit how we collect, use, and store some of the information of users
                                            between 13 and 18 years old. In some cases, this means we will be unable to provide
                                            certain functionality of the service to these users. If we need to rely on consent
                                            as a legal basis for processing your information and your country requires consent
                                            from a parent, we may require your parent's consent before we collect and use that
                                            information.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b> Links to other websites</b>
                                        <p>
                                            Our service may contain links to other websites that are not operated by us. If you
                                            click on a third-party link, you will be directed to that third party's site. We
                                            strongly advise you to review the privacy policy of every site you visit. We have no
                                            control over and assume no responsibility for the content, privacy policies or practices
                                            of any third-party sites or services.
                                        </p>
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
                                    <span className="badge bg-info">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                                    <div className="ms-2 me-auto">
                                        <b> Changes to this privacy policy</b>
                                        <p>
                                            We may update our privacy policy from time to time. We will notify you of any changes by
                                            posting the new privacy policy on this page. We will let you know via email and/or a
                                            prominent notice on our service, prior to the change becoming effective and update the
                                            "last updated" date at the top of this privacy policy. You are advised to review this
                                            privacy policy periodically for any changes. Changes to this privacy policy are
                                            effective when they are posted on this page.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default PrivacyPolicy;