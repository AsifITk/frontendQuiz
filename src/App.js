
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Teacher/Login';
import SignUp from './components/Teacher/SignUp';
import AddQuestion from './components/Teacher/AddQuestion';
import EditQuestion from './components/Teacher/Editquestion'
import Join from './components/Student/Join';
import Quiz from './components/Student/Quiz';
import Waiting from './components/Student/waiting';
import Edit from './components/Teacher/Editquestion/EditPage';
import Quizpage from './components/Teacher/QuizPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  >
          <Route index element={<Login />} />
          <Route path="/teacher/signup" element={<SignUp />} />
          <Route path="/teacher/addQuiz" element={<AddQuestion />} />
          <Route path="/teacher/wait" element={<Waiting />} />
          <Route path="/teacher/quiz" element={<Quizpage />} />

          <Route path="/teacher/editquestion" element={<EditQuestion />} >
            <Route index element={<Edit />} />
          </Route  >

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
