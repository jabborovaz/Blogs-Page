import React from "react";

import { Row, Col } from "antd";
import OwnTable from "../Component/OwnTable";

function Blog() {
  return (
    <div className=" bg-green-500">
      <div className="pt-8">
        <h2 className="text-xl text-white sm:text-3xl flex justify-center font-bold">
          Comments
        </h2>
        <div className="pt-8">
          <Row>
            <Col xs={24} sm={{ span: 14, offset: 5 }}>
              <OwnTable />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Blog;
