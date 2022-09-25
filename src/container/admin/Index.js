import React from "react";

export const Dashboard = React.lazy(() => import('./dashboard/Index'));
export const ContactInfo = React.lazy(() => import('./settings/contactinfo/Index'));

export const SocialLinks = React.lazy(() => import('./settings/sociallinks/Index'));
export const SocialLinksCreateOrEdit = React.lazy(() => import('./settings/sociallinks/CreateOrEdit'));

export const Users = React.lazy(() => import('./settings/users/Index'));
export const UsersCreateOrEdit = React.lazy(() => import('./settings/users/CreateOrEdit'));

