import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DataListTable from "../../../components/shared/DataListTable";

//style
import axios from "axios";

export default function TrainingList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    specilityList();
  }, []);

  const specilityList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/training/getAll`)
      .then(res => {
        console.log(res, "jklopo");
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deleteMaingod = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/training/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.training_id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const training_name = e.target.value;
    const newData = filteredData.filter(list =>
      list.training_name.toLowerCase().includes(training_name.toLowerCase())
    );
    console.log(training_name, newData);
    setFilteredData(newData);

    if (training_name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Traning Name",
      dataIndex: "training_name",
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
              onClick={() => {
                console.log("Record", record);
                // const { id, code, country } = record;
                navigate("/admin/trainingForm", {
                  state: {
                    ...record,
                  },
                  // replace: true,
                });
              }}
              className="me-5"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                deleteMaingod(record.training_id);
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
  const handleAddNewBtn = () => {
    navigate("/admin/trainingForm");
  };
  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Training List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
