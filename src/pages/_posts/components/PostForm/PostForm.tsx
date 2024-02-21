import { memo, useState } from "react";
import { useAppDispatch } from "../../../../hooks/useRedux";
import { postsSlice } from "../../../../store/reducers/postReducer";

const PostForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const handleCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      const newPost = {
        id: Number(new Date()),
        title: value,
      };
      dispatch(postsSlice.actions.addNewPostAction(newPost));
      setValue("");
    }
  };

  return (
    <form onSubmit={handleCreatePost}>
      <input
        placeholder="title"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">create</button>
    </form>
  );
};

export default memo(PostForm);
