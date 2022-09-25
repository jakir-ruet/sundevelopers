const menuItems = [
    {title: 'Home', path: '/'},
    {title: 'About', path: '/about'},
    {title: 'portfolio', path: '/portfolio'},
    {title: 'Services', path: null, dropdownItems: [
        {title: 'Interior', path: '/interior'},
        {title: 'Construction', path: '/construction'},
        ]
    },
    {title: 'We Develop', path: null, dropdownItems: [
        {title: 'Commercial', path: '/commercial'},
        {title: 'Residential', path: '/residential'},
        {title: 'Bridge & Flyover', path: '/bridge-flyover'},
        {title: 'Roads & Highway', path: '/roads-highway'},
        ]
    },
    { title: 'Contacts', path: '/contacts' },
    
    // {title: 'disclaimer', path: '/disclaimer'},
    // {title: 'Privacy Policy', path: '/privacypolicy'},
    // {title: 'Terms of services', path: '/termsofservices'},
    // {title: 'Frequently Asking Question', path: '/frequentlyaskingquestion'}
];

export default menuItems;