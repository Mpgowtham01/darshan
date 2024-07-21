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
import DataListTable from "../../components/shared/DataListTable";

export default function EvenList() {
  const [eventData, setEventData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    EventlistData();
  }, []);

  const EventlistData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/event/getAll`)
      .then(res => {
        console.log("object :>> ", res.data);
        setEventData(res.data);

        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deleteMaingod = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/event/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.temple_eventid != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const event_name = e.target.value;
    const newData = filteredData.filter(list =>
      list.event_name.toLowerCase().includes(event_name.toLowerCase())
    );
    console.log(newData);
    setFilteredData(newData);

    if (event_name === "") {
      setFilteredData(eventData);
    }
  };

  const columns = [
    {
      title: "Event Name",
      dataIndex: "event_name",
      key: "x",
      editable: true,
    },
    {
      title: "Start Date",
      dataIndex: "event_startdate",
      key: "x",
      editable: true,
    },
    {
      title: "End Date",
      dataIndex: "event_enddate",
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
                const { id, code, country } = record;
                navigate("/admin/eventform", {
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
                deleteMaingod(record.temple_eventid);
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
    navigate("/admin/eventform");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`Event List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
