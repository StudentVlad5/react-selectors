import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <div>
              <h1>Home</h1>
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div>
              <h1>Home</h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};
