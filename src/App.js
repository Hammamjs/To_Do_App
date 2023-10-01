import Container from './components/tasks/Container';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Auth/Layout';
import RequireAuth from './components/Auth/RequireAuth';
import ForgotPassword from './pages/Auth/forgotPassword';
import VerifyPassResetCode from './pages/Auth/verifypassResetCode';
import ResetPassword from './pages/Auth/resetPassword';
import UpdateUserInfo from './pages/Auth/updateUserInfo';
import Signup from './pages/Auth/signup';
import NotFound from './pages/Auth/notFound';
import AddTask from './pages/Tasks/AddTask';
import TaskDetails from './pages/Tasks/TaskDetails';
import Signin from './pages/Auth/signin';
import EditTask from './pages/Tasks/EditTask';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Container />} />
          <Route path="/updateInfo" element={<UpdateUserInfo />} />
          <Route path="editTask/:id" element={<EditTask />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/taskDetails/:id" element={<TaskDetails />} />
        </Route>
        {/* Public Routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/verifyPassResetCode" element={<VerifyPassResetCode />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
