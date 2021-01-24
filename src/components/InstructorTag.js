import { TagWrapper } from '../styles';

const InstructorTag = (props) => {
  // Create the InstructorTag component here
  return (
   <TagWrapper
    onClick={() => window.open(`${props.Instructor.github}`)}
  >
    <span className="Emoji">{props.Instructor.emoji}</span>
    <span className="Name">{props.Instructor.name}</span>
    <span className="GoToGithub">Go to GitHub</span>
    </TagWrapper>
    );
};

export default InstructorTag;
