import { useEffect, useState } from "react";
import axiosInstance from "../Axios";
import PostList from "./admin/PostList";
import PostLoading from "./posts/PostLoading";

export default function Admin() {
  const [appState, setAppState] = useState({
    loading: true,
    posts: null,
  });
  useEffect(() => {
    axiosInstance.get().then((res) => {
      const allPosts = res.data;
      setAppState({ loading: false, posts: allPosts });
    });
  }, [setAppState]);
  return appState.loading ? (
    <PostLoading />
  ) : (
    <PostList postData={appState.posts} />
  );
}
