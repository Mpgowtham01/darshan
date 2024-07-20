import React, { useState, useEffect } from "react";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

//style
import axios from "axios";
import DataListTable from "../../../components/shared/DataListTable";

export default function BlogList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    mainGodData();
  }, []);

  const mainGodData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/blog/getAll`)
      .then((res) => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteMaingod = (id) => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/blog/delete/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const newOne = filteredData.filter((item) => item.id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = (e) => {
    const god_name = e.target.value;
    const newData = filteredData.filter((list) =>
      list.god_name.toLowerCase().includes(god_name.toLowerCase())
    );
    console.log(newData);
    setFilteredData(newData);

    if (god_name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Blog Title",
      dataIndex: "blog_title",
      key: "BlogTitle",
    },
    {
      title: "Blog Description",
      dataIndex: "blog_description",
      key: "BlogDescription",
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
              onClick={() => {
                console.log("Record", record);
                navigate("/admin/blogForm", {
                  state: {
                    ...record,
                  },
                });
              }}
              className="me-5"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                deleteMaingod(record.id);
              }}>
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
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Blog List ( ${filteredData.length} )`}
      handleAddNewBtn={() => navigate("/admin/blogForm")}
    />
  );
}
