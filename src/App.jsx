import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./post";
import "./global.css";
import styles from "./App.module.css";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Fernando Pereira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus, nulla odit suscipit cum eaque molestiae consectetur, veniam illum accusantium vel ratione architecto non dolore ullam obcaecati sit beatae. Soluta!"
          />
          <Post
            author="Franciele da Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus, nulla odit suscipit cum eaque molestiae consectetur!"
          />
        </main>
      </div>
    </div>
  );
}
