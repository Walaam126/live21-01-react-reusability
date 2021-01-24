import "./App.css";
import data from './data';
import { AppWrapper } from './styles';
import InstructorTag from './components/InstructorTag';
const App = () => {
  const Instlist = data.map((Instructor) => (
    <InstructorTag name={Instructor.name} github={Instructor.github} emoji={Instructor.emoji} />
  ));
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {Instlist}
      {/* <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/DarthHamza`)}
      >
        <span className="Emoji">🌚</span>
        <span className="Name">Hamza</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/Lailz`)}
      >
        <span className="Emoji">🐥</span>
        <span className="Name">Laila</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div>

      <div
        className="TagWrapper"
        onClick={() => window.open(`https://github.com/thehasanas`)}
      >
        <span className="Emoji">🦍</span>
        <span className="Name">Hasan</span>
        <span className="GoToGithub">Go to GitHub</span>
      </div> */}
    </AppWrapper>
  );
};

export default App;
