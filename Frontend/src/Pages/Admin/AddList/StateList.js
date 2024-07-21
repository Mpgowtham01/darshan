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

const StateList = () => {
  const [data, setData] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    stateListData();
  }, []);

  const stateListData = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/state/getAll`)
      .then(res => {
        setOriginalData(res.data);
        setFilteredData(res.data);
      })
      .catch(error => console.log(error));
  };

  const deletestate = id => {
    axios
      .delete(`${process.env.REACT_APP_DEV_BASE_URL}/state/delete/${id}`)
      .then(res => {
        if (res.status === 200) {
          const newOne = filteredData.filter(item => item.id != id);
          setFilteredData(newOne);
        }
      });
  };

  const handleSearch = e => {
    const state = e.target.value;
    const newData = filteredData.filter(list =>
      list.state.toLowerCase().includes(state.toLowerCase())
    );
    console.log(newData);
    setFilteredData(newData);

    if (state === "") {
      setFilteredData(originalData);
    }
  };

  const columns = [
    {
      title: "Country",
      dataIndex: "country",
      key: "x",
    },
    {
      title: "StateName",
      dataIndex: "state",
      key: "x",
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
                navigate("/admin/StateForm", {
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
              onConfirm={() => deletestate(record.id)}>
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
    navigate("/admin/StateForm");
  };
  return (
    // <div className="temple-form-main">
    //   <h3 className="temple-form-header">State List</h3>
    //   <div className="temple-form-top mt-4 py-4 px-3">
    //     <input
    //       placeholder="Search..."
    //       className="temple-form-search ps-2"
    //       onChange={e => handleSearch(e)}
    //     />
    //     <Button
    //       type="light"
    //       onClick={() => navigate("/StateForm")}
    //       className="temple-form-button">
    //       <FontAwesomeIcon icon={faPlus} />
    //       Add New
    //     </Button>
    //   </div>
    //   <div className="temple-form-table">
    //     <Table
    //       columns={columns}
    //       dataSource={filteredData}
    //       pagination={{
    //         showSizeChanger: true,
    //         position: ["bottomCenter"],
    //       }}
    //       className="mt-2"
    //     />
    //   </div>
    // </div>
    <DataListTable
      columns={columns}
      dataList={filteredData}
      handleSearch={handleSearch}
      title={`State List ( ${filteredData.length} )`}
      handleAddNewBtn={handleAddNewBtn}
    />
  );
};

export default StateList;
