import React from "react";
import { useNavigate } from "react-router-dom";

const BlogsCard = ({ index, id, blog_image, blog_description, blog_title }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        key={id}
        className={`blogsPage__container--cards ${
          index % 2 === 0 ? "even" : "odd"
        }`}
      >
        <div className="first">
          <img
            src={`${process.env.REACT_APP_DEV_BASE_URL}${blog_image}`}
            alt=""
          />
        </div>
        <div className="second">
          <h3 className="title">{blog_title}</h3>
          <p className="description">
            {blog_description.length > 200
              ? blog_description.substring(0, 200) + "...."
              : blog_description}
          </p>
          <button
            className="customBtn small dark-text"
            onClick={() => navigate(`/blog-details/${id}`)}
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;
