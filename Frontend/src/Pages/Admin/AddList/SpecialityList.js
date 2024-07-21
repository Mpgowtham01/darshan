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

export default function SpecialityList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    specilityList();
  }, []);

  const specilityList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/speciality/getAll`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deleteMaingod = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/speciality/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const speciality_name = e.target.value;
    const newData = filteredData.filter(list =>
      list.speciality_name.toLowerCase().includes(speciality_name.toLowerCase())
    );
    console.log(speciality_name, newData);
    setFilteredData(newData);

    if (speciality_name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "TempleList",
      dataIndex: "speciality_name",
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
                navigate("/admin/specialityForm", {
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
  const handleAddNewBtn = () => {
    navigate("/admin/specialityForm");
  };
  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Speciality List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
