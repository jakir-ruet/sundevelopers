import React from "react";

export const Home = React.lazy(() => import('./home/Home'));
export const About = React.lazy(() => import('./about/About'));
export const Portfolio = React.lazy(() => import('./portfolio/portfolio'));

export const Interior = React.lazy(() => import('./services/interior/Interior'));
export const Construction = React.lazy(() => import('./services/construction/Construction'));

export const Commercial = React.lazy(() => import('./developments/commercial/Commercial'));
export const Residential = React.lazy(() => import('./developments/residential/Residential'));
export const Bridgeflyover = React.lazy(() => import('./developments/bridge-flyover/Bridgeflyover'));
export const Roadshighway = React.lazy(() => import('./developments/roads-highway/Roadshighway'));

export const Contact = React.lazy(() => import('./contacts/Contacts'));

export const Disclaimer = React.lazy(() => import('./pages/disclaimer/Disclaimer'));
export const PrivacyPolicy = React.lazy(() => import('./pages/privacypolicy/PrivacyPolicy'));
export const TermsOfServices = React.lazy(() => import('./pages/termsofservices/TermsofServices'));
export const FrequentlyAskingQuestion = React.lazy(() => import('./pages/frequentlyaskingquestion/FrequentlyAskingQuestion'));
