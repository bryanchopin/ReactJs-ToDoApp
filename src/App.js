import './App.css';
import TitleText from './components/TitleText';
import DisplayTask from './components/DisplayTask';
function App() {
  return (
    <div className="App">
      <div className='titleContainer'>
        <TitleText
          classNamee='titleH1'
          title= 'To Do App' />
      </div>
      <div className='mainContainer'>
        <DisplayTask />
      </div>
    </div>
  );
}

export default App;
