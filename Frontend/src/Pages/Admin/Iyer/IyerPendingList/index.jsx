import React, { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.min.css";
import DataListTable from "../../../../components/shared/DataListTable";
import IyerPendingModal from "./IyerPendingModal";

const btnStyles = { fontSize: "0.7rem" };

const Action = ({ record }) => {
    const [show, setShow] = useState(false);

    return <>
        <IyerPendingModal show={show} id={record.iyer_booking_id} handleClose={() => setShow(false)} />
        <button className="btn btn-primary" style={btnStyles} onClick={() => setShow(true)}>View</button>
    </>;
};

export default function IyerPendingList() {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => { getIyerList(); }, []);

    const getIyerList = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/iyerbooking/getIyerbookingDataFromAdmin/0/0`)
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

    const columns = [
        { title: "User Name", dataIndex: "UserName" },
        { title: "Function Name", dataIndex: "function_name" },
        { title: "Inside or outside Function", dataIndex: "function_type" },
        { title: "Action", dataIndex: "", key: "x", render: (_, record) => (<Action record={record} />) },
    ];

    return (
        <DataListTable
            showAddNewBtn={false}
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title="Pending List"
        />
    );
}
