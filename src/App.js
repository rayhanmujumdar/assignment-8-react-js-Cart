import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Shopping from './Component/Shopping/Shopping';
import Question from './Component/Question/Question';
function App() {
  return (
    <div>
        <Header></Header>
        <Shopping></Shopping>
        <Question></Question>
    </div>
  );
}

export default App;
