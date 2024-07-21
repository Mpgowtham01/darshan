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
import { useNavigate, useParams } from "react-router-dom";
//style
import axios from "axios";
import DataListTable from "../../../../components/shared/DataListTable";
// import Api from "Api"

// import Api from "../../../../Api";
export default function NotificationList() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { groupName } = useParams();

  useEffect(() => {
    NotifyData();
  }, []);

  const NotifyData = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/kulatheaivam/getnotificationByGroup/${groupName}`,
        { withCredentials: true }
      )
      .then((res) => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch((error) => console.log(error));
  };
  const deleteNotify = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/deleteNotification/${id}`
      )
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
    console.log(newData);
    setFilteredData(newData);

    if (name === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Notification",
      dataIndex: "title",
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

                navigate(`/community/${groupName}/notification`, {
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
                deleteNotify(record.id);
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
    navigate(`/community/${groupName}/notification`);
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title="Notification List"
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
