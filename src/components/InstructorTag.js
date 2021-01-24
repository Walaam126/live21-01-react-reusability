import { TagWrapper } from '../styles';

const InstructorTag = (props) => {
  // Create the InstructorTag component here
  return (
   <TagWrapper
    onClick={() => window.open(`${props.github}`)}
  >
    <span className="Emoji">{props.emoji}</span>
    <span className="Name">{props.name}</span>
    <span className="GoToGithub">Go to GitHub</span>
    </TagWrapper>
    );
};

export default InstructorTag;
