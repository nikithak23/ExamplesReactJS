import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function GETdata() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}



/*
**GET request with a different API.This is a much better example.**

import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/users";
export default function GETdata() {
const [personList, setPersonList] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPersonList(response.data);
      console.log(response.data);
    });
  }, []);

  if (!personList) return null;

  return (
    <div>
    {personList.map(person=>
      <div>
      <h1>{person.id}.{person.name}</h1>
      <p></p>
    </div>
    )}
   </div>
  );
}

*/