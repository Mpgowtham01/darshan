import React, { useRef, useState } from "react";
import { Table, Input, Button, Space, Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function AboutList() {
  const data = [
    {
      name: "Kala Bhairavar temple",
      description:
        "Kapaleeshwarar Temple is a temple of Shiva located in Chennai, Tamil Nadu. The form of Shiva's wife Parvati worshipped at this temple is called Karpagambal. The temple was built around the 7th century CE in Dravidian architecture.",
    },
    {
      name: "Kottai maariamman temple",
      description:
        "The Kottai Mariamman Temple is located on the banks of river Tirumanimutthar. It is regarded as one of the oldest pilgrimage centres of the city of Salem. The presiding deity at this temple is Goddess Kottai Mariamman. Pilgrims travel from near and distant places to seek blessings at this temple and to soak up the calm and quietness.",
    },
  ];
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const removeData = id => {
    fetch(id, {
      method: "DELETE",
      headers: {
        Accept: "",
        "content-Type": "",
      },
    })
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
  };
  const columns = [
    {
      title: "About List",
      dataIndex: "name",
    },

    {
      title: "Aboyt Tag",
      dataIndex: "description",
    },
    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          {console.log(record, "ADF")}
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ cursor: "pointer" }}
              onClick={() => navigate("")}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => removeData(record.key)}>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ cursor: "pointer" }}
              />
            </Popconfirm>
          </div>
        </>
      ),
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="blog-list-main">
      <h4 className="blog-list-header">About List</h4>
      <div className="blog-list-top mt-4 py-4 px-3">
        <input
          enterButton="Search"
          placeholder="Search..."
          className="blog-list-search ps-2"
        />
        <Button
          type=""
          onClick={() => navigate("/create-Aboutus")}
          className="blog-list-button">
          <FontAwesomeIcon icon={faPlus} />
          Add New
        </Button>
      </div>
      <div className="blog-list-table">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="mt-2"
        />
      </div>
    </div>
  );
}
