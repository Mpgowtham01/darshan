import React, { useState, useEffect } from "react";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DataListTable from "../../../components/shared/DataListTable";

//style
import axios from "axios";

const AreaList = () => {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    areaListData();
  }, []);

  const areaListData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/area/getAll`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deleteArea = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/area/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.area_id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const area_name = e.target.value;
    const newData = filteredData.filter(list =>
      list.area_name.toLowerCase().includes(area_name.toLowerCase())
    );
    setFilteredData(newData);

    if (area_name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      key: "Country",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "State",
    },
    {
      title: "District ",
      dataIndex: "district",
      key: "District",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "City",
    },

    {
      title: "Area",
      dataIndex: "area_name",
      key: "Area",
    },

    {
      title: "Activity",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <>
          <>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log("Recordssssss", record);
                // const { id, code, country } = record;
                navigate("/admin/areaForm", {
                  state: {
                    ...record,
                  },
                });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => deleteArea(record.area_id)}>
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ cursor: "pointer" }}
              />
            </Popconfirm>
          </>
        </>
      ),
    },
  ];
  const navigate = useNavigate();
  const handleAddNewBtn = () => {
    navigate("/admin/areaForm");
  };
  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Area List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
};

export default AreaList;
