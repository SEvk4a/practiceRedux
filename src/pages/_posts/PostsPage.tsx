import { useState } from "react";
import PostForm from "./components/PostForm/PostForm";
import PostList from "./components/PostList/PostList";
import styles from "./PostsPage.module.scss";

const PostsPage = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <PostForm />
      <PostList value={value} />
    </div>
  );
};

export default PostsPage;
