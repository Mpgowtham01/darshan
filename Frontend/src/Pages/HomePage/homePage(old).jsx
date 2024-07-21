<div>
  <div>
    <img src={homeImage} className="home-img"></img>
  </div>

  <div className="event-background">
    <Container>
      <Row className="pb-3 pt-4">
        <Col xs={12} sm={12} md={5} lg={5} className="calender-text">
          <div className="d-flex pt-1">
            <FontAwesomeIcon icon={faCalendarCheck} style={{ fontSize: 40 }} />
            <div className="ms-3 event-1">
              <h6>Upcoming Events</h6>
              <p className="mb-0" style={{ fontSize: 14 }}>
                June Month
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={7}>
          <Row>
            {date.map((list, i) => (
              <Col xs={4} sm={4} md={2} lg={2} className="mt-2">
                <div>
                  <div className="d-flex justify-content-center mb-1">
                    <p
                      className="mb-0 d-grid justify-content-center"
                      style={{
                        backgroundColor: "white",
                        padding: 10,
                        borderRadius: 8,
                        width: 40,
                      }}>
                      {list.date}
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="mb-0 text-center" style={{ fontSize: 12 }}>
                      {list.festname}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  </div>

  <div className="home-1 py-5">
    <Container>
      <Row className="text-center">
        <h1 className="text-white mt-4">Temples</h1>
        <TempleList />
      </Row>
      <div className="mt-3 text-end">
        <Button
          color="#ec953ac4"
          size="sm"
          onClick={() => {
            navigate("/alltemples");
          }}>
          View All
        </Button>
      </div>
    </Container>

    <Container>
      <Row className="text-center">
        <h1 className="text-white mt-5">Famous Temples</h1>
        {FamousTemples.map((FamousTemples, i) => (
          <Col xs={12} sm={12} md={4} className="mt-3">
            <img
              src={FamousTemples.imageUrl}
              height={250}
              width={"100%"}
              style={{ borderRadius: 18 }}
              onClick={() => navigate("/templedetails")}
            />
            <p className="text-white mb-0 mt-2">{FamousTemples.name}</p>
            <p className="text-white">{FamousTemples.content}</p>
          </Col>
        ))}
      </Row>
      <div className="mt-3 text-end">
        <Button
          size="sm"
          style={{ backgroundColor: "#ec953ac4" }}
          onClick={() => navigate("/famous-temple")}>
          More Temples
        </Button>
      </div>
    </Container>
  </div>
</div>;
