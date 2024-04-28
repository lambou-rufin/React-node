
import DashboardPage from 'admin/modules/dashboard';
import SitePage from 'admin/modules/setting/Site';
import { SuspenseView } from 'public/shared/components/SuspenseView';
import React, { lazy, useEffect, useRef } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import '../assets/scss/style.scss';
import AuthPageAdmin from '../modules/auths/components';
// import { useHistory } from 'react-router-dom';

const RouterAdmin: React.FC = () => {
  const navigate = useNavigate();
  const inactivityDuration = 30;
  const initialTimeLeft = inactivityDuration * 60;
  const timeLeftRef = useRef(initialTimeLeft);
  const activityEvents = ['mousemove', 'keydown'];

  const resetTimer = () => {
    timeLeftRef.current = initialTimeLeft;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      timeLeftRef.current -= 1;
      // Obtenir l'URL actuelle
      const currentUrl = window.location.pathname;

      // Mettez ici le code que vous souhaitez exécuter si l'URL correspond
      if (timeLeftRef.current === 0) {
        if (currentUrl != '/admin/auth/login') {
          localStorage.removeItem('user');
          navigate('/admin/auth/login', {
            state: {
              deconexion: 'auto'
            }
          });
        }
      }
    }, 1000);

    const handleUserActivity = () => {
      resetTimer();
    };

    activityEvents.forEach((event) => {
      window.addEventListener(event, handleUserActivity);
    });

    return () => {
      clearInterval(interval);
      activityEvents.forEach((event) => {
        window.removeEventListener(event, handleUserActivity);
      });
    };
  }, []);

  const Dashboard = lazy(() => import('admin/modules/personn'));
  const SongPage = lazy(() => import('admin/modules/song'));

  return (
    <Routes>
      <Route>
        <Route
          path="/person/*"
          element={
            <SuspenseView>
              <Dashboard />
            </SuspenseView>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <SuspenseView>
              <DashboardPage />
            </SuspenseView>
          }
        />

        <Route
          path="/process/*"
          element={
            <SuspenseView>
              <ProcessPage />
            </SuspenseView>
          }
        />

        <Route
          path="/site/*"
          element={
            <SuspenseView>
              <SitePage />
            </SuspenseView>
          }
        />

        <Route
          path="/auth/*"
          element={
            <SuspenseView>
              <AuthPageAdmin />
            </SuspenseView>
          }
        />

        <Route path="*" element={<Navigate to="/admin/modules/dashboard" />} />
      </Route>
    </Routes>
  );
};

export default RouterAdmin;
