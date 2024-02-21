import { FC, useEffect, useMemo } from "react";

import styles from "./PostList.module.scss";
import { useAppSelector, useAppDispatch } from "../../../../hooks/useRedux";
import { fetchPosts } from "../../../../store/asyncActions/posts";
import { postsSlice } from "../../../../store/reducers/postReducer";

type Props = {
  value: string;
};

const PostList: FC<Props> = ({ value }) => {
  const { posts, loading } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const handleDeletePost = (id: number) => {
    dispatch(postsSlice.actions.deletePostAction(id));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts);

  const sortedPosts = useMemo(() => {
    return posts.filter((post) => post.title.includes(value));
  }, [posts, value]);

  return (
    <>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div className={styles.list}>
          {sortedPosts.map((post) => (
            <div className={styles.item}>
              <div key={post.id}>{post.title}</div>
              <button onClick={() => handleDeletePost(post.id)}>delete</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
