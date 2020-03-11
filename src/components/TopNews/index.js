import React, { useState } from "react";
export default function TopNews(props) {
  const [count, loadMore] = useState(4);

  const formatDate = date => {
    let newDate = [];
    newDate = [
      "0" + date.getDate(),
      "0" + (date.getMonth() + 1),
      "" + date.getFullYear()
    ].map(component => component.slice(-2));

    return newDate.join(".");
  };

  return (
    <div className="list-container">
      <ul className="post-container">
        {/* {props.posts.slice(0, count).map(post => {
          return (
            <li key={post.id} className="post">
              <img
                src={post.img_url}
                alt={post.title}
                className="post-image"
              ></img>
              <div className="post-image_data">
                <p>{formatDate(new Date(post.created_at))} </p>
                <p>{post.category && post.category.name} </p>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-content">{post.content}</p>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
}
