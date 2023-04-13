import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
