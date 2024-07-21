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

export default function BookingFields() {
    const [originalData, setOriginalData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        bookingFieldDetails();
    }, []);

    const bookingFieldDetails = () => {
        axios
            .get(`${process.env.REACT_APP_DEV_BASE_URL}/booking/getAll`)
            .then(res => {
                if (res.data.result) {
                    setOriginalData(res.data.result);
                    setFilteredData(res.data.result);
                }
            })
            .catch(error => console.log(error));
    };

    const deleteBookingField = id => {
        console.log(id, "hjkl");
        axios
            .delete(`${process.env.REACT_APP_DEV_BASE_URL}/booking/delete/${id}`)
            .then(res => {
                if (res.status === 200) {
                    const newOne = filteredData.filter(item => item.id != id);
                    setFilteredData(newOne);
                }
            });
    };

    const handleSearch = e => {
        const name = e.target.value;
        const newData = filteredData.filter(list =>
            list.name.toLowerCase().includes(name.toLowerCase())
        );

        setFilteredData(newData);

        if (name === "") {
            setFilteredData(originalData);
        }
    };

    const columns = [
        {
            title: "Booking List",
            dataIndex: "name",
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
                                navigate("/admin/createBookingField", {
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
                            onConfirm={() => deleteBookingField(record.id)}>
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
        navigate("/admin/createBookingField");
    };

    return (
        <DataListTable
            columns={columns}
            dataList={filteredData}
            handleSearch={handleSearch}
            title="Booking List"
            handleAddNewBtn={handleAddNewBtn}
        />
    );
}
