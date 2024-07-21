import React, { useState, useEffect } from "react";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

//style
import axios from "axios";
import DataListTable from "../../../components/shared/DataListTable";

export default function ViewPooja() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    functionData();
  }, []);

  const functionData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/functions/getAll`)
      .then((res) => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const deletefunction = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_DEV_BASE_URL}/functions/deleteFunction/${id}`
      )
      .then((res) => {
        if (res.status === 200) {
          const newOne = filteredData.filter((item) => item.FunctionID != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = (e) => {
    const FunctionName = e.target.value;
    const newData = filteredData.filter((list) =>
      list.FunctionName.toLowerCase().includes(FunctionName.toLowerCase())
    );
    setFilteredData(newData);

    if (FunctionName === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Pooja Name",
      dataIndex: "FunctionName",
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
                navigate("/admin/addPooja", {
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
                deletefunction(record.FunctionID);
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
    navigate("/admin/addPooja");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title="Pooja's List"
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
