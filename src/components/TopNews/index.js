import React from "react";
export default function TopNews(props) {
  const formatDate = date => {
    let time = new Date();
    let newTime = time.getTime();
    let difference = newTime - date;

    console.log("difference", difference);

    switch (true) {
      case difference < 60000:
        console.log("1 minute");
        return "1 minute";

      case difference < 3600000:
        console.log(Math.floor(difference / 60000) + " minutes");
        return Math.floor(difference / 60000) + " minutes";

      case difference < 7200000:
        console.log("1 hour");
        return Math.floor(difference / 60000 / 60) + " hour";

      case difference < 3600000 * 24:
        console.log(Math.floor(difference / 60000 / 60) + " hours");
        return Math.floor(difference / 60000 / 60) + " hours";

      case difference < 3600000 * 48:
        console.log("1 day");
        return "1 day";

      case difference < 3600000 * 24 * 30:
        console.log(Math.floor(difference / 60000 / 60 / 24) + " days");
        return Math.floor(difference / 60000 / 60 / 24) + " days";

      case difference < 3600000 * 24 * 60:
        console.log("1 month");
        return "1 month";

      case difference < 3600000 * 24 * 30 * 12:
        return Math.floor(difference / 60000 / 60 / 24 / 30 / 12) + " months";

      case difference > (3600000 - 1) * 24 * 30 * 12:
        console.log("  more than a year");
        return " more than a year";
    }
  };

  // formatDate(1584363230820);
  formatDate(1584373295986);

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
