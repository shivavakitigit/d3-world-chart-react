// doesn't require redux

import React, { useEffect } from "react";

import DrawMap from "../d3/DrawMap";
import MapInput from "../components/MapInput";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Home = () => {
  useEffect(() => {
    DrawMap();
  }, []);

  return (
    <Row>
      <div className="col-md-12">
        <Col sm="12" md="3" lg="3" xl="3">
          <Card>
            <MapInput />
          </Card>
        </Col>
      </div>

      <div className="col-md-12">
        <Col>
          <div className="mapviz"></div>
        </Col>
      </div>
    </Row>
  );
};

export default Home;
