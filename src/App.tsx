import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { ProjectsProvider } from '@/context/ProjectsContext';
import { Header, Footer, WhatsAppButton } from '@/components/layout';
import { ProtectedRoute } from '@/components/admin/ProtectedRoute';
import { HomePage } from '@/pages/HomePage';
import { AdminLoginPage } from '@/pages/admin/LoginPage';
import { AdminDashboardPage } from '@/pages/admin/DashboardPage';
import '@/styles/globals.css';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#111827]">
      {!isAdminRoute && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-[#F5F8FC]">
                <div className="text-center">
                  <h1 className="mb-4 text-6xl font-bold text-[#004090]">404</h1>
                  <p className="mb-8 text-[#5B6472]">Page not found</p>
                  <a href="/" className="inline-flex items-center rounded-xl bg-[#004090] px-5 py-3 font-semibold text-white shadow-lg shadow-[#004090]/20">
                    Go Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </main>
      {!isAdminRoute && <WhatsAppButton />}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ProjectsProvider>
          <AppContent />
        </ProjectsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
