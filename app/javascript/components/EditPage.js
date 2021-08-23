import React from "react";

const EditPage = (props) => {
  // this is not html this is JSX
  // which embedded html in js'
  return (
    <div className="container">
      <h1>Form</h1>
      <a href="/">back</a>
      <form action={`/pages/${props.page.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>title</p>
        <input defaultValue={props.page.title} name="page[title]" />
        <p>author</p>
        <input defaultValue={props.page.author} name="page[author]" />
        <p>body</p>
        <textarea defaultValue={props.page.body} name="page[body]" />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default EditPage;
