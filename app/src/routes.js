import { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import FlashcardLayout from './layouts/flashcard/flashcardLayout';
import LearningMaterial from './layouts/learningMaterial/learningMaterial';
import MockTest from './pages/MockTest';
import RealTest from './pages/RealTest';
import loginContext from './context/loginContext/loginContext';

// ----------------------------------------------------------------------

function LogoutPage() {
  // perform any necessary logout logic here...

  // redirect the user to the login page
  const a = useContext(loginContext);
  a.setIsLoggedIn(false);

}

const loggedInRoutes = [
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to="/dashboard/app" />, index: true },
      { path: 'app', element: <DashboardAppPage /> },
      { path: 'user', element: <UserPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'learn', element: <LearningMaterial /> },
      { path: 'mock', element: <MockTest /> },
      { path: 'real', element: <RealTest /> },
      { path: 'flashcard', element: <FlashcardLayout /> },
    ],
  },
  {
    path: '/logout',
    element: <LogoutPage />,
  },
  {
    element: <SimpleLayout />,
    children: [
      { element: <Navigate to="/dashboard/app" />, index: true },
      { path: '404', element: <Page404 /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
];

const loggedOutRoutes = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
];

export default function Router() {
  const a = useContext(loginContext);
  const routes = useRoutes(a.isLoggedIn ? loggedInRoutes : loggedOutRoutes); // uncomment it want login redirection if user not signed in
  // const routes = useRoutes(loggedInRoutes);
  a.setDisplayName(a.displayName)
  return routes;
}