import React, { useEffect, useState } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      setTimeout(() => setSubmit(false), 4000);
    }
  }, [submit]);

  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate setSubmit={setSubmit} />
      <hr />
      <h1>Posts</h1>
      <PostList submit={submit} setSubmit={setSubmit} />
    </div>
  );
};
export default App;
