import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "./calendarpage.css";
import { Container, Col } from "react-bootstrap";
import moment from "moment";
import Layout from "../../components/Layout";

export default function CalendarPage() {
  const [monthly, setMonthly] = useState(true);
  const [date, setdate] = useState(false);
  const pre = moment()
    .subtract(1, "days")
    .format();
  const current = moment().format();
  const future = moment()
    .add(1, "days")
    .format();

  return (
    <Layout>
      <br />
      <br />
      <div className="mb-3 pt-4">
        <Container style={{ marginTop: "5vh" }}>
          <div className="d-flex justify-content-start">
            <p
              key={monthly}
              className={`${
                monthly === true ? "Date-list enable-option" : "Date-list"
              }`}
              onClick={(e) => {
                setdate(false);
                setMonthly(true);
              }}
            >
              Month
            </p>
            <p
              key={date}
              className={`${
                date === true ? "Date-list enable-option" : "Date-list"
              }`}
              onClick={(e) => {
                setMonthly(false);
                setdate(true);
              }}
            >
              Date
            </p>
          </div>
        </Container>
        {monthly === true ? (
          <Container>
            <div className="calendar-style d-flex justify-content-center align-items-center mb-2">
              <Calendar
                numberOfMonths={3}
                inline
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
            </div>
            <br />
          </Container>
        ) : (
          date === true && (
            <Container className="d-flex justify-content-center my-5">
              <div className="row date-style">
                <Col
                  className="date-column-style"
                  style={{ borderRight: "1px solid #bfbfbf" }}
                >
                  <p className="mb-0">{moment(pre).format("DD-MM-YYYY")}</p>
                  <p className="mb-0">{moment(pre).format("dddd")}</p>
                </Col>
                <Col
                  className="date-column-style"
                  style={{
                    borderRight: "1px solid #bfbfbf",
                    background: "white",
                  }}
                >
                  <p className="mb-0">{moment(current).format("DD-MM-YYYY")}</p>
                  <p className="mb-0">{moment(current).format("dddd")}</p>
                </Col>
                <Col className="date-column-style">
                  <p className="mb-0">{moment(future).format("DD-MM-YYYY")}</p>
                  <p className="mb-0">{moment(future).format("dddd")}</p>
                </Col>
              </div>
            </Container>
          )
        )}

        {/* <Calendar numberOfMonths={3} disableMonthPicker disableYearPicker /> */}
      </div>
    </Layout>
  );
}
