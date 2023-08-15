import { Post } from "./post";
import './styles.css';
export function App() {
  return (
    <div>
      <Post
        author="Fernando Pereira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus, nulla odit suscipit cum eaque molestiae consectetur, veniam illum accusantium vel ratione architecto non dolore ullam obcaecati sit beatae. Soluta!"
      />
      <Post
        author="Franciele da Silva"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus, nulla odit suscipit cum eaque molestiae consectetur!"
      />
    </div>
  );
}
