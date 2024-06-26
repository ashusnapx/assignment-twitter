interface NavItemProps {
  label: string;
}

const NavItem = ({ label }: NavItemProps) => (
  <h1 className='hover:text-orange-600 hover:underline hover:underline-offset-8 cursor-pointer'>
    {label}
  </h1>
);

const Strap = () => {
  const navItems: Array<NavItemProps> = [
    { label: 'Job preview' },
    { label: 'Applicants' },
    { label: 'Match' },
    { label: 'Message' },
  ];

  return (
    <div className='flex items-center space-x-9 p-3 mx-9'>
      {navItems.map((item, index) => (
        <NavItem key={index} label={item.label} />
      ))}
    </div>
  );
};

export default Strap;
