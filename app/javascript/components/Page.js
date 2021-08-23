import React from "react";
const Page = (props) => {
  return (
    <div>
      <h1>{props.page.title}</h1>
      <h6>{props.page.author}</h6>
      <p>{props.page.body}</p>
      <a href={`/pages/${props.page.id}/edit`}>edit</a>
      <a href={`/`}>back</a>
    </div>
  );
};

export default Page;
