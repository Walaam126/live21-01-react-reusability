// import "./App.css";
import data from './data';
import { AppWrapper } from './styles';
import InstructorTag from './components/InstructorTag';
const App = () => {
  const Instlist = data.map((Instructor) => (
    <InstructorTag key={Instructor.id} name={Instructor.name} github={Instructor.github} emoji={Instructor.emoji} />
  ));
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {Instlist}
    </AppWrapper>
  );
};

export default App;
