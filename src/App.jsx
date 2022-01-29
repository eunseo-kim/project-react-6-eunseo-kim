import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';

// TODO: delete these and make each page
function AboutPage() { return (<div>about</div>); }
function CoursesPage() { return (<div>courses</div>); }
function LoginPage() { return (<div>log in</div>); }
function SignupPage() { return (<div>sign up</div>); }

export default function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}
