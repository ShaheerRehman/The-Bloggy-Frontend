import { useState, useEffect } from "react";
import PostLoading from "./components/posts/PostLoading";
import Posts from "./components/posts/Posts";

function App() {
  const [state, setState] = useState({
    loading: true,
    posts: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestData();
  }, []);
  useEffect(() => {
    if (state.posts.length === 0 || !state.posts) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [state]);
  async function requestData() {
    const res = await fetch("http://127.0.0.1:8000/api/");
    const data = await res.json();
    setState({ loading: false, posts: data });
  }

  return loading ? <PostLoading /> : <Posts postdata={state.posts} />;
}

export default App;
