
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Teacher/Login';
import SignUp from './components/Teacher/SignUp';
import AddQuestion from './components/Teacher/AddQuestion';
import EditQuestion from './components/Teacher/Editquestion'
import Join from './components/Student/Join';
import Quiz from './components/Student/Quiz';
import Waiting from './components/Student/waiting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teacher"  >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="addquestion" element={<AddQuestion />} />
          <Route path="addquestion" element={<AddQuestion />} />
          <Route path="editquestion" element={<EditQuestion />} />

        </Route>
        <Route path="/student"  >
          <Route path="join" element={<Join />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="wait" element={<Waiting />} />

        </Route>
      </Routes>
    </BrowserRouter >

  );
}

export default App;
