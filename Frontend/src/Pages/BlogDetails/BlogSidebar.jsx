import React from "react";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { filterSearchData } from "../../components/Redux_Toolkit/blogDetailsSlice";

const BlogSidebar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const filteredTempleData = useSelector(
    state => state.blogDetails.filteredTemple
  );

  const handleSearchText = e => {
    setSearchText(e.target.value);
    dispatch(filterSearchData(e.target.value));
  };

  const params = useParams();

  return (
    <div className="blogDetailsPage__container--sidebar">
      <div className="quote">
        <h2>"The Temple of the purest thoughts is silence"</h2>
      </div>

      <>
        <div className="searchBar">
          <Form.Label htmlFor="searchBar">Search the temple Blogs</Form.Label>
          <InputGroup>
            <Form.Control
              value={searchText}
              onChange={handleSearchText}
              id="searchBar"
              placeholder="Search blog..."
            />
            <InputGroup.Text>
              <AiOutlineSearch />
            </InputGroup.Text>
          </InputGroup>
        </div>

        <div className="relatedTemplesByTags">
          {filteredTempleData.map(item => (
            <h6
              className={`relatedTemplesByTags__title ${
                params.id == item.id ? "active" : ""
              }`}>
              <Link to={`/blog-details/${item?.id}`}>{item?.blog_title}</Link>{" "}
            </h6>
          ))}
        </div>
      </>
    </div>
  );
};

export default BlogSidebar;
