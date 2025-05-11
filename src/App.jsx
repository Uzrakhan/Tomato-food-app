import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CategoryList from "./Components/CategoryList";
import NavBar from "./Components/NavBar";
import RestaurantList from "./Components/RestaurantList";
import Footer from "./Components/Footer";
import Overview from "./Components/Overview";
import Order from "./Components/Order";
import "./App.css";
import RestaurantDetailsOverview from "./pages/RestDetailsOverview";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp"


function Layout({ children }) {
  const location = useLocation();
  const isAuthPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <div>
      {/* Conditionally show NavBar */}
      {!isAuthPage && <NavBar />}
      {/* Main Content */}
      <main className="content-wrapper">
        {children}
      </main>
      {/* Conditionally show Footer */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

// ProtectedRoute Component
function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace/>;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected Routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/restaurants"
              element={
                <ProtectedRoute>
                  <CategoryList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/restaurants/:category"
              element={
                <ProtectedRoute>
                  <RestaurantList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/restaurant/:id"
              element={
                <ProtectedRoute>
                  <RestaurantDetailsOverview />
                </ProtectedRoute>
              }
            >
              <Route index element={<Overview />} /> {/* Default tab */}
              <Route path="overview" element={<Overview />} />
              <Route path="orderonline" element={<Order />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
