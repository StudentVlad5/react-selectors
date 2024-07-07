import { Sidebar } from 'components/Sidebar/Sidebar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from './SharedLayout.styled';


export const SharedLayout = () => {
  return (
    <>
      <Box>
        <Suspense fallback={'Loading...'}>
          <Sidebar />
          <main>
            <Outlet />
          </main>
        </Suspense>
      </Box>
    </>
  );
};
