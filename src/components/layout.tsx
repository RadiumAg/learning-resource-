import type React from 'react';
import { useOutlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const outlet = useOutlet();

  return outlet;
};

export default Layout;
