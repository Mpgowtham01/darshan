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

export default function LiveStream() {
  const [liveStreamData, setLiveStreamData] = useState([]);
  //   const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    LiveStreamData();
  }, []);

  const LiveStreamData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/livestream/getAll`)
      .then((res) => {
        console.log("object :>> ", res.data);
        setLiveStreamData(res.data);
        //   setFilteredData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteMaingod = (id) => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/livestream/delete/${id}`)
      .then((res) => {
        if (res.status === 200) {
          const newOne = liveStreamData.filter((item) => item.id != id);
          setLiveStreamData(newOne);
        }
      });
  };

  const handleSearch = (e) => {
    const livestream_title = e.target.value;
    const newData = liveStreamData.filter((list) =>
      list.livestream_title
        .toLowerCase()
        .includes(livestream_title.toLowerCase())
    );
    console.log(newData);
    setLiveStreamData(newData);

    if (livestream_title === "") {
      setLiveStreamData(liveStreamData);
    }
  };

  const columns = [
    {
      title: "LiveStream Title",
      dataIndex: "livestream_title",
      key: "x",
      editable: true,
    },
    {
      title: "Temple Name",
      dataIndex: "temple_name",
      key: "x",
      editable: true,
    },
    {
      title: "Start Date",
      dataIndex: "livestream_startdate",
      key: "x",
      editable: true,
      render: (_, record) => {
        let va = new Date(record.livestream_startdate)
          .toLocaleDateString()
          .split("/");
        // console.log("record",`${va[1] }-${va[0]}-${va[2]}`)
        return (
          <>
            {va[1]}-{va[0]}-{va[2]}
          </>
        );
      },
    },
    {
      title: "End Date",
      dataIndex: "livestream_enddate",
      key: "x",
      editable: true,
      render: (_, record) => {
        let va = new Date(record.livestream_enddate)
          .toLocaleDateString()
          .split("/");
        // console.log("record",`${va[1] }-${va[0]}-${va[2]}`)
        return (
          <>
            {va[1]}-{va[0]}-{va[2]}
          </>
        );
      },
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
                navigate("/admin/LiveStream/LiveStreamForm", {
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
    navigate("/admin/LiveStream/LiveStreamForm");
  };

  return (
    <DataListTable
      columns={columns}
      dataList={liveStreamData}
      handleSearch={handleSearch}
      title="Livestream"
      handleAddNewBtn={handleAddNewBtn}
    />
  );
}
