import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import css from './Layout.module.css';

const Layout = () => {
  return (
    <main className={css.main}>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Layout;
