import React, { useState, useEffect } from "react";
import { Table, Button, Popconfirm, message } from "antd";
import "antd/dist/antd.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CourseList() {
  const [courseData, setCourseData] = useState([]);
  const { courseId } = useParams(); // Get courseId from URL parameters
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch course data by courseId from the backend API
    const fetchCourseById = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/course/getCourse/${courseId}`);
        if (Array.isArray(response.data)) {
          setCourseData(response.data);
        } else {
          setCourseData([response.data]); // Wrap single object in an array
        }
      } catch (error) {
        console.error("Error fetching course:", error);
        message.error("Error fetching course data.");
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/course/getAllCourses`);
        setCourseData(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        message.error("Error fetching courses data.");
      }
    };

    if (courseId) {
      fetchCourseById();
    } else {
      fetchCourses();
    }
  }, [courseId]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      editable: true,
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      editable: true,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      editable: true,
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
      editable: true,
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
      editable: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      editable: true,
      render: (text) => (
        <p className="mb-0" style={{ color: text === "Completed" ? "green" : "brown", fontWeight: "bold" }}>
          {text}
        </p>
      ),
    },
    {
      title: "Activity",
      dataIndex: "",
      key: "activity",
      render: (_, record) => (
        <div>
          <Popconfirm title="Sure to delete?" onConfirm={() => {}}>
            <FontAwesomeIcon icon={faTrashCan} style={{ cursor: "pointer" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h4 style={{ fontWeight: 700, fontFamily: "Playfair Display, serif", marginBottom: 20 }}>
        Course List
      </h4>
      <div className="course-list table__container-list-table">
        <Table
          columns={columns}
          rowKey={(record, index) => index}
          dataSource={courseData}
          pagination={{ showSizeChanger: true, position: ["bottomCenter"] }}
          className="mt-2"
        />
      </div>
    </div>
  );
}
