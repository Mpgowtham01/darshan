import { React, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import TextField from "./TempleFormComponents/InputField";

const FileUploadGroup = ({
  mainImageHandler,
  handleSubImages,
  subImages,
  videoFileHandler,
  youtubeUrlHandler,
  rowsProps,
}) => {
  return (
    <>
      <Row className="mt-4">
        <Col lg={6} xl={4}>
          <Form.Group controlId="mainImage" className="mb-3">
            <Form.Label>Main Image</Form.Label>
            <Form.Control
              accept=".png, .jpg, .jpeg"
              type="file"
              onChange={(e) => mainImageHandler(e.target.files[0])}
            />
          </Form.Group>
        </Col>

        <Col lg={6} xl={4}>
          <Form.Group controlId="mainImage" className="mb-3">
            <Form.Label>Sub Images</Form.Label>
            <Form.Control
              accept=".png, .jpg, .jpeg"
              type="file"
              multiple
              onChange={handleSubImages}
            />
          </Form.Group>
          <Form.Text className="text-danger">{subImages?.errorMsg}</Form.Text>
        </Col>

        {/* <Col lg={6} xl={4}>
         
        <Form.Group controlId="videoFile">
          <Form.Label>Upload Video File</Form.Label>
          <Form.Control
            type="file"
            accept="video/*"
            onChange={(e) => videoFileHandler(e.target.files[0])}
          />
        </Form.Group>
        </Col> */}
      </Row>
      <Row>
        <Col lg={4}>
          <Form.Group controlId="youtubeUrl">
            <Form.Label>YouTube URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="Enter YouTube URL"
              onChange={(e) => youtubeUrlHandler(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default FileUploadGroup;
