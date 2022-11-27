import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Gustavo Campos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusantium autem non praesentium mollitia fugiat veritatis corrupti voluptatem. Odit laborum magni nisi ut aliquam saepe quisquam consequuntur nostrum nam tempore!"
          />
          <Post author="Henrique Fernandes" content="Novo lorem ipsum" />
        </main>
      </div>
    </div>
  );
}
