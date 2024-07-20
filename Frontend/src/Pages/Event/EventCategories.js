import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import { Modal } from "react-bootstrap";
import "antd/dist/antd.css";
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

export default function EventCategories() {
    const [eventData, setEventData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        EventCatData();
    }, []);

    const EventCatData = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/blogeventcategory/getcategories`)
            .then(res => {
                console.log('object :>> ', res.data);
                setEventData(res.data);

                setFilteredData(res.data);
            })
            .catch(error => console.log(error));
    };

    const deleteEventCat= id => {
        axios
            .delete(`${process.env.REACT_APP_DEV_BASE_URL}/blogeventcategory/delete/${id}`)
            .then(res => {
                if (res.status === 200) {
                    const newOne = filteredData.filter(item => item.id != id);
                    setFilteredData(newOne);
                }
            });
    };

    const handleSearch = e => {
        const category_name = e.target.value;
        const newData = filteredData.filter(list =>
            list.category_name.toLowerCase().includes(category_name.toLowerCase())
        );
        console.log(newData);
        setFilteredData(newData);

        if (category_name === "") {
            setFilteredData(eventData);
        }
    };

    const columns = [
        {
            title: "Category Name",
            dataIndex: "category_name",
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
                                navigate("/admin/mainGodForm", {
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
                                deleteEventCat(record.id);
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
        navigate("/admin/mainGodForm");
    };

    return (
        <DataListTable
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title={`Blog&Categories ( ${filteredData.length} )`}
            handleAddNewBtn={handleAddNewBtn}
        />
    );
}
