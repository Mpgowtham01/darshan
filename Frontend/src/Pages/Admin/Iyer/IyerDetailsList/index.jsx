import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import axios from "axios";
import DataListTable from "../../../../components/shared/DataListTable";
import { Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import IyerDetailsModal from "./IyerDetailsModal";

const btnStyles = { fontSize: "0.7rem" };

const Action = ({ handleDeleteItem, record }) => {
    const [show, setShow] = useState(false);

    return <>
        <IyerDetailsModal show={show} id={record.iyerId} handleClose={() => setShow(false)} />
        <button className="btn btn-primary" style={btnStyles} onClick={() => setShow(true)}>View</button>

        <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDeleteItem(record?.iyerId)}
        >
            <FontAwesomeIcon
                icon={faTrashCan} className="ms-3"
                style={{ cursor: "pointer", fontSize: "1.1rem" }}
            />
        </Popconfirm>
    </>;
};

export default function IyerDetailsList() {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => { getIyerList(); }, []);

    const getIyerList = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/iyer/getAllIyer`)
            .then(res => {
                setOriginalData(res.data);
                setFilteredData(res.data);
            })
            .catch(error => console.log(error));
    };

    const handleSearch = e => {
        const iyername = e.target.value;
        const newData = filteredData.filter(list => list.iyername.toLowerCase().includes(iyername.toLowerCase()));

        setFilteredData(newData);

        if (iyername === "") {
            setFilteredData(originalData);
        }
    };


    const handleDeleteItem = (id) => {
        axios
            .delete(`${process.env.REACT_APP_DEV_BASE_URL}/iyer/deleteIyer/${id}`)
            .then(res => {
                if (res.data) {
                    setFilteredData(prev => ([...prev].filter(item => parseInt(item.iyerId) != parseInt(id))));
                }
            }).catch(err => {
                console.log("Error", err);
            });
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "iyername",
        },

        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (_, record) => (<Action record={record} handleDeleteItem={handleDeleteItem} />),
        },
    ];

    return (
        <DataListTable
            showAddNewBtn={false}
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title="Priest Details"
        />
    );
}
