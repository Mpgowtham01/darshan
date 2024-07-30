import React, { useRef, useState, useEffect } from "react";
import { Table, Input, Button, Space, Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//style
import "../../../components/Css/sass/AmenityList.scss";
import DataListTable from "../../../components/shared/DataListTable";

export default function AddnewTempleList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    PariharamListData();
  }, []);

  const PariharamListData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/Pariharams/getAll`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deletePariharam = id => {
    console.log(id, "hjkl");
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/pariharams/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.pariharam_id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const pariharam_name = e.target.value;
    const newData = filteredData.filter(list =>
      list.pariharam_name.toLowerCase().includes(pariharam_name.toLowerCase())
    );

    setFilteredData(newData);

    if (pariharam_name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Pariharam List",
      dataIndex: "pariharam_name",
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
                navigate("/admin/addNewTemple", {
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
              onConfirm={() => deletePariharam(record.pariharam_id)}>
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
    navigate("/admin/addNewTemple");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Add New Temple ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
