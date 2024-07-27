import React, { useState, useEffect } from "react";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//style
import "../../../components/Css/sass/AmenityList.scss";
import DataListTable from "../../../components/shared/DataListTable";

export default function Grouptable() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    GrouptableData();
  }, []);

  const GrouptableData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/subGrroup/getAllsubGroup`)
      .then((res) => {
        console.log('object', res)
        setOriginalData(res.data.data);
        setFilteredData(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteGroup = (id) => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/subGrroup/deleteSubGroup/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const newOne = filteredData.filter((item) => item?.id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = (e) => {
    const group_name = e.target.value;
    const newData = filteredData.filter((list) =>
      list.group_name.toLowerCase().includes(group_name.toLowerCase())
    );

    setFilteredData(newData);

    if (group_name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Group List",
      dataIndex: "groupName",
    },
    {
        title: "Sub Group List",
        dataIndex: "subgroupName",
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
                navigate("/admin/subGroup", { state: { ...record } });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteGroup(record.id)}
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
    navigate("/admin/subGroup");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Sub Group List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
