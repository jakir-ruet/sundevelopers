const Menus = [
    {title: 'Dashboard', path: '/admin', icon: 'bi bi-grid'},
    {title: 'Reports', path: null, icon: 'bi bi-calculator-fill', subMenus: [
            {title: 'Appointment fee', path: '/admin/users'},
        ]},
    {title: 'Appointments', path: '/admin/doctors', icon: 'bi bi-card-checklist'},
    {title: 'Doctors', path: '/admin/doctors', icon: 'bi bi-people'},
    {title: 'Specializations', path: '/admin/specializations', icon: 'bi bi-patch-check'},
    {title: 'Departments', path: '/admin/departments', icon: 'bi bi-building'},
    {title: 'Settings', path: null, icon: 'bi bi-gear-wide', subMenus: [
            {title: 'Users', path: '/admin/users'},
            {title: 'Social Links', path: '/admin/social-links'},
            {title: 'Contact Info', path: '/admin/contact-info'}
        ]
    },
];

export default Menus;