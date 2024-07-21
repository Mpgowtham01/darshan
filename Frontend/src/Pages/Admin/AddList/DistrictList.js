import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import { Modal, Form } from "react-bootstrap";
import Select from "react-select";
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

const DistrictList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    DistrictListData();
  }, []);

  const DistrictListData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/district/getAll`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
        console.log("District", res.data);
      })
      .catch(error => console.log(error));
  };

  const deleteDistrict = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/district/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const district = e.target.value;
    const newData = filteredData.filter(list =>
      list.district.toLowerCase().includes(district.toLowerCase())
    );
    console.log(newData);
    setFilteredData(newData);

    if (district === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "State ",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "District ",
      dataIndex: "district",
      key: "District",
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
                console.log("Recordssssss", record);
                // const { id, code, country } = record;
                navigate("/admin/districtForm", {
                  state: {
                    ...record,
                  },
                  // replace: true,
                });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteDistrict(record.id)}>
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
    navigate("/admin/districtForm");
  };
  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`District List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
};

export default DistrictList;
