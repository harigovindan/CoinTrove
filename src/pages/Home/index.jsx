import React, { useEffect } from "react";
import { Row, Col } from "antd";
import landingBackground from "../../assets/images/landing.png";
import "./home.scss";
import stepItem from "../../assets/images/stepItem.png";
import stepItem2 from "../../assets/images/stepItem2.png";

function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF";
    document.getElementById("app-header").style.boxShadow = "none";
    return () => {
      document.body.style.backgroundColor = "#F8F9FA";
      document.getElementById("app-header").removeAttribute("box-shadow");
    };
  }, []);

  return (
    <div className="home">
      <div className="home__landing">
        <Row align="middle">
          <Col span={10}>
            <h1>Go carbon neutral today</h1>
            <p>Carbon management made simple for small and medium business</p>
          </Col>
          <Col span={14}>
            <img
              src={landingBackground}
              alt="Landing background"
              className="home__landing-background"
            />
          </Col>
        </Row>
      </div>
      <div className="home__significance">
        <h3>One place for all of your climate needs</h3>
        <Row className="home__significance-row" gutter={[30, 20]}>
          <Col span={8}>
            <div className="home__significance-item">
              <div></div>
              <h4 className="home__significance-item-title">
                Measure your impact
              </h4>
              <div className="home__significance-item-description">
                Ditch the spreadsheets. Our simple carbon accounting platform
                helps you create an initial footprint in minutes not hours.
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="home__significance-item">
              <div></div>
              <h4 className="home__significance-item-title">
                Measure your impact
              </h4>
              <div className="home__significance-item-description">
                Ditch the spreadsheets. Our simple carbon accounting platform
                helps you create an initial footprint in minutes not hours.
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="home__significance-item">
              <div></div>
              <h4 className="home__significance-item-title">
                Measure your impact
              </h4>
              <div className="home__significance-item-description">
                Ditch the spreadsheets. Our simple carbon accounting platform
                helps you create an initial footprint in minutes not hours.
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="home__steps">
        <h3>How it works</h3>
        <Row className="home__steps-row" gutter={[30, 20]} align="middle">
          <Col span={10}>
            <div className="home__step-item">
              <h4 className="home__step-item-title">
                Create your first footprint
              </h4>
              <div className="home__step-item-title-description">
                Carbonhound leads you through the steps to create your business’
                first footprint. No jargon or experience required, we follow
                international standards.
                <br />
                <br />
                Upload your expenses from a spreadsheet or sync your systems to
                automate data entry and get real-time tracking.
              </div>
            </div>
          </Col>
          <Col span={14}>
            <img src={stepItem} alt="Home Step" className="home__step-img" />
          </Col>
        </Row>
        <Row className="home__steps-row" gutter={[30, 20]} align="middle">
          <Col span={14}>
            <img src={stepItem2} alt="Home Step" className="home__step-img" />
          </Col>
          <Col span={10}>
            <div className="home__step-item">
              <h4 className="home__step-item-title">Set your goals</h4>
              <div className="home__step-item-title-description">
                Set the goals and objectives for your organization to achieve.
              </div>
            </div>
          </Col>
        </Row>
        <Row className="home__steps-row" gutter={[30, 20]} align="middle">
          <Col span={10}>
            <div className="home__step-item">
              <h4 className="home__step-item-title">
                Create your first footprint
              </h4>
              <div className="home__step-item-title-description">
                Carbonhound leads you through the steps to create your business’
                first footprint. No jargon or experience required, we follow
                international standards.
                <br />
                <br />
                Upload your expenses from a spreadsheet or sync your systems to
                automate data entry and get real-time tracking.
              </div>
            </div>
          </Col>
          <Col span={14}>
            <img src={stepItem} alt="Home Step" className="home__step-img" />
          </Col>
        </Row>
        <Row className="home__steps-row" gutter={[30, 20]} align="middle">
          <Col span={14}>
            <img src={stepItem2} alt="Home Step" className="home__step-img" />
          </Col>
          <Col span={10}>
            <div className="home__step-item">
              <h4 className="home__step-item-title">Set your goals</h4>
              <div className="home__step-item-title-description">
                Set the goals and objectives for your organization to achieve.
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
