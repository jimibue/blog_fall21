import React from "react";

const NewPage = () => {
  // this is not html this is JSX
  // which embedded html in js'
  return (
    <div className="container">
      <h1>Form</h1>
      <form action="/pages" method="post">
        <p>title</p>
        <input name="page[title]" />
        <p>author</p>
        <input name="page[author]" />
        <p>body</p>
        <textarea name="page[body]" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewPage;
