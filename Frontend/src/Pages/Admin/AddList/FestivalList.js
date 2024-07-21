import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import { Modal } from "react-bootstrap";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

//style
import axios from "axios";
import DataListTable from "../../../components/shared/DataListTable";

export default function MaingodList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    festivalData();
  }, []);

  const festivalData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/festival/getAll`)
      .then(res => {
        console.log(res, "ass");
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deletefestivalgod = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/festival/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.festival_id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const festival_name = e.target.value;
    const newData = filteredData.filter(list =>
      list.festival_name.toLowerCase().includes(festival_name.toLowerCase())
    );
    console.log(newData);
    setFilteredData(newData);

    if (festival_name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Festival Name",
      dataIndex: "festival_name",
      key: "x",
      editable: true,
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
                // const { id, code, country } = record;
                navigate("/admin/festivalForm", {
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
                deletefestivalgod(record.festival_id);
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
    navigate("/admin/festivalForm");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Festival List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
