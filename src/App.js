import './App.css';
import TitleText from './components/TitleText';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <div className='titleContainer'>
        <TitleText
          classNamee='titleH1'
          title= 'To do App' />
      </div>
      <div className='mainContainer'>
        <TitleText
          classNamee='subtitleH2'
          title='My List' />
        <div className='formContainer'></div>
        <div className='listContainer'>
          <Task
            text='Estudiar Algebra'
            taskComplete={true} />
          <Task
            text='Estudiar Algebra'
            taskComplete={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
