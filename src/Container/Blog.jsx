import React from "react";
import { Row, Col } from "antd";
import OwnTable from "../Component/OwnTable";

function Blog() {
  return (
    <div className="h-screen">
      <div className="pt-8">
        <h2 className="text-xl sm:text-3xl flex justify-center font-bold">
          Posts
        </h2>
        <div className="pt-8">
          <Row>
            <Col xs={24} md={{ span: 16, offset: 4 }}>
              <OwnTable />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Blog;
