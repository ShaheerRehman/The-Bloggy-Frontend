import { useEffect, useState } from "react";
import axiosInstance from "../Axios";
import PostLoading from "./PostLoading";
import Posts from "./Posts";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const search = "search";
  const [appState, setAppState] = useState({
    search: "",
    posts: [],
  });

  useEffect(() => {
    if (appState.posts.length === 0 || !appState.posts) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [appState]);
  useEffect(() => {
    axiosInstance.get(search + "/" + window.location.search).then((res) => {
      const allPosts = res.data;
      setAppState({ posts: allPosts });
    });
  }, [setAppState]);
  return loading ? <PostLoading /> : <Posts postdata={appState.posts} />;
}
