import {
  BaggageClaimIcon,
  BellIcon,
  Briefcase,
  ChevronDown,
  HandCoins,
  MessageSquare,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const navItems = [
  { icon: Briefcase, label: 'Jobs' },
  { icon: MessageSquare, label: 'Messages', hasNotification: true },
  { icon: HandCoins, label: 'Payments' },
];

const NotificationDot = () => (
  <span className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-600'></span>
);

const NavItem = ({
  Icon,
  label,
  hasNotification,
}: {
  Icon: any;
  label: string;
  hasNotification: boolean | undefined;
}) => (
  <div className='relative border rounded-full p-2 flex hover:bg-orange-600 hover:cursor-pointer hover:text-white items-center'>
    <div className='relative'>
      <Icon className='mr-1' />
      {hasNotification && <NotificationDot />}
    </div>
    {label}
  </div>
);

const Navbar = () => {
  return (
    <div className='flex items-center justify-between flex-row'>
      <div className='border bg-slate-200 text-orange-600 p-3'>Logo</div>
      <div className='flex items-center justify-between flex-row border rounded-full p-3 space-x-5'>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            Icon={item.icon}
            label={item.label}
            hasNotification={item.hasNotification}
          />
        ))}
      </div>
      <div className='relative flex items-center space-x-4'>
        <div className='relative'>
          <BellIcon />
          <NotificationDot />
        </div>
        <div className='flex items-center'>
          <Image src='/logo.png' alt='logo' width={30} height={30} />
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
