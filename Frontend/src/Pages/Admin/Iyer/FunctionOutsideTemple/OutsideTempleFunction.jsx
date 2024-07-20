import React, { useState, useEffect } from "react";
import { Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataListTable from "../../../../components/shared/DataListTable";

export default function OutsideTempleFunction() {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        OutsideFunctionListData();
    }, []);

    const OutsideFunctionListData = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/priestFunction/getAll?searchBy=2`)
            .then(res => {
                setOriginalData(res.data.result);
                setFilteredData(res.data.result);
            })
            .catch(error => console.log(error));
    };

    const deletePariharam = id => {
        console.log(id, "hjkl");

        axios
            .delete(`${process.env.REACT_APP_DEV_BASE_URL}/priestFunction/delete/${id}`)
            .then(res => {
                if (res.data) {
                    const newOne = filteredData.filter(item => item.id != id);
                    setFilteredData(newOne);
                }
            });
    };

    const handleSearch = e => {
        const function_name = e.target.value;
        const newData = filteredData.filter(list => list.function_name.toLowerCase().includes(function_name.toLowerCase()));

        setFilteredData(newData);

        if (function_name === "") {
            setFilteredData(originalData);
        }
    };

    const columns = [
        {
            title: "Function Name",
            dataIndex: "function_name",
        },

        {
            title: "Activity",
            dataIndex: "",
            key: "x",
            render: (_, record) => (
                <>
                    <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: "pointer" }} className="me-4" onClick={() => {
                        console.log("Record", record);
                        navigate("/admin/outsidethetemple", { state: { ...record } });
                    }}
                    />
                    <Popconfirm title="Sure to delete?" onConfirm={() => deletePariharam(record?.id)}>
                        <FontAwesomeIcon icon={faTrashCan} style={{ cursor: "pointer" }} />
                    </Popconfirm>
                </>
            ),
        },
    ];
    const navigate = useNavigate();

    const handleAddNewBtn = () => {
        navigate("/admin/outsidethetemple");
    };

    return (
        <DataListTable
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title={`Functions Outside Temple ( ${filteredData.length} )`}
            handleAddNewBtn={handleAddNewBtn}
        />
    );
}