import React, { useState, useEffect } from "react";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

//style
import axios from "axios";
import DataListTable from "../../../../components/shared/DataListTable";

export default function JobList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { groupName } = useParams();

  useEffect(() => {
    jobData();
  }, []);

  const jobData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/community/getAllJob`, {
        withCredentials: true,
      })
      .then((res) => {
        setOriginalData(res.data.result);
        setFilteredData(res.data.result);
      })
      .catch((error) => console.log(error));
  };

  const deleteJob = (id) => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/community/deleteJob/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const newOne = filteredData.filter((item) => item.id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = (e) => {
    const name = e.target.value;
    const newData = filteredData.filter((list) =>
      list.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(newData);

    if (name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Job Name",
      dataIndex: "position",
      key: "x",
      editable: true,
    },
    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate(`/community/${groupName}/addJob`, {
                  state: { ...record },
                })
              }
              className="me-5"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                deleteJob(record.id);
              }}
            >
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

  const handleAddNewBtn = () => {
    navigate(`/community/${groupName}/addJob`);
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title="Job List"
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
