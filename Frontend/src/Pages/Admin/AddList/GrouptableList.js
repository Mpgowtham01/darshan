import React, { useState, useEffect } from "react";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//style
import "../../../components/Css/sass/AmenityList.scss";
import DataListTable from "../../../components/shared/DataListTable";

export default function Grouptable() {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        GrouptableData();
    }, []);

    const GrouptableData = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/grouptable/getAll`)
            .then(res => {
                setOriginalData(res.data);
                setFilteredData(res.data);
            })
            .catch(error => console.log(error));
    };

    const deleteGroup = id => {
        axios
            .delete(`${process.env.REACT_APP_DEV_BASE_URL}/grouptable/delete/${id}`)
            .then(res => {
                if (res.status === 200) {
                    const newOne = filteredData.filter(item => item?.id != id);
                    setFilteredData(newOne);
                }
            });
    };

    const handleSearch = e => {
        const group_name = e.target.value;
        const newData = filteredData.filter(list =>
            list.group_name.toLowerCase().includes(group_name.toLowerCase())
        );

        setFilteredData(newData);

        if (group_name === "") {
            setFilteredData(originalData);
        }
    };

    const columns = [
        {
            title: "Group List",
            dataIndex: "group_name",
        },

        {
            title: "Activity",
            dataIndex: "",
            key: "x",
            render: (_, record) => (
                <>
                    {console.log(record, "ADF")}
                    <div>
                        <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} onClick={() => {
                            navigate("/admin/groupForm", { state: { ...record } });
                        }}
                            className="me-4"
                        />
                        <Popconfirm title="Sure to delete?" onConfirm={() => deleteGroup(record.id)}>
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
        navigate("/admin/groupForm");
    };

    return (
        <DataListTable
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title={`Group List ( ${filteredData.length} )`}
            handleAddNewBtn={handleAddNewBtn}
        />
    );
}
