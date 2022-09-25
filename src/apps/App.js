import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { Route, Routes } from 'react-router';
import Loader from "../components/ui/Loader";
import * as Admin from "../container/admin/Index";
import * as Website from "../container/client/Index";
import AdminLayout from "../hoc/admin/Layout";
import Layout from "../hoc/client/Layout";
import './App.css';
//import {frequentlyaskingquestion, privacypolicy, TermsOfServices} from "../container/client/Index";

function App(){
    return(
        <AnimatePresence exitBeforeEnter>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path='/' element={ <Layout/>}>
                        <Route exact index element={<Website.Home />} />
                        <Route exact path="about" element={<Website.About />} />
                        <Route exact path="portfolio" element={<Website.Portfolio />} />

                        <Route exact path="interior" element={<Website.Interior />} />
                        <Route exact path="construction" element={<Website.Construction />} />

                        <Route exact path="commercial" element={<Website.Commercial />} />
                        <Route exact path="residential" element={<Website.Residential />} />
                        <Route exact path="bridge-flyover" element={<Website.Bridgeflyover />} />
                        <Route exact path="roads-highway" element={<Website.Roadshighway />} />

                        <Route exact path="contacts" element={<Website.Contact />} />

                        <Route exact path="disclaimer" element={<Website.Disclaimer />} />
                        <Route exact path="privacy-policy" element={<Website.PrivacyPolicy />} />
                        <Route exact path="term-of-services" element={<Website.TermsOfServices />} />
                        <Route exact path="faq" element={<Website.FrequentlyAskingQuestion />} />
                    </Route>

                    <Route path='/admin' element={ <AdminLayout/>}>
                        <Route exact index element={<Admin.Dashboard />} />
                        <Route exact path='contact-info' element={<Admin.ContactInfo />} />

                        <Route exact path='social-links' element={<Admin.SocialLinks />} />
                        <Route exact path='social-links/create' element={<Admin.SocialLinksCreateOrEdit />} />
                        <Route exact path='social-links/edit/:id' element={<Admin.SocialLinksCreateOrEdit />} />

                        <Route exact path='users' element={<Admin.Users />} />
                        <Route exact path='users/create' element={<Admin.UsersCreateOrEdit />} />
                        <Route exact path='users/edit/:id' element={<Admin.UsersCreateOrEdit />} />

                    </Route>
                </Routes>
            </Suspense>
        </AnimatePresence>
    )
}
export default App;
