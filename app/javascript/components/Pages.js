import React from "react";

const Pages = (props) => {
  const renderPages = () => {
    return props.pages.map((page) => {
      return (
        <div style={{ border: "1px solid", margin: "40px" }}>
          <h1>{page.title}</h1>
          <h6>{page.author}</h6>
          <p>{page.body}</p>
          <a href={`/pages/${page.id}`}>show</a>
          <a href={`/pages/${page.id}/edit`}>edit</a>
          <a href={`/pages/${page.id}`} data-method="delete">
            delete
          </a>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Pages</h1>
      <a href="/pages/new">New Page</a>
      {renderPages()}
    </div>
  );
};

export default Pages;
