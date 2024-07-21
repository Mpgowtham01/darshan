import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Temple.scss";
import DataListTable from "../.././../../components/shared/DataListTable";

export default function PriestBooking() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

 
//   const handleSearch = e => {
//     const temple_name = e.target.value;
//     const newData = filteredData.filter(list =>
//       list.temple_name.toLowerCase().includes(temple_name.toLowerCase())
//     );
//     setFilteredData(newData);

//     if (temple_name === "") {
//       setFilteredData(originalData);
//     }
//   };

  const columns = [
    {
      title: "Pooja Name",
      dataIndex: " ",
    },
    {
      title:"Priest Name",
      dataIndex:""
    },
    {
      title:"Priest Number",
      dataIndex:""
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
                navigate("/admin/templeForm", { state: { ...record } });
              }}
              className="me-4"
            />
            <Popconfirm
              title="Sure to delete?"
            //   onConfirm={() => handleDeleteItem(record.id)}>
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
    navigate("");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={""}
      handleSearch={""}
      title="Priest Booking"
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
