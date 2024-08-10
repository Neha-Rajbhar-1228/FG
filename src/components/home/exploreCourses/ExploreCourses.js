import React, { useState } from "react";
import UpcomingBatchCard from "../upcomingBatches/UpcomingBatchCard";

function ExploreCourses() {
  const [courseToggle, setCourseToggle] = useState("videoTutorial");
  return (
    <div className="container">
      <div className="col-12 py-4">
        <div className="d-flex justify-content-center">
          <h4>Explore Courses</h4>
        </div>
        <div
          className="d-flex justify-content-start p-4"
          style={{ gap: "12px" }}
        >
          <div
            onClick={() => {
              setCourseToggle("videoTutorial");
            }}
            style={{
                cursor: 'pointer',
              padding: "10px 20x",
              border: courseToggle == "videoTutorial" ? "none" :"1px solid #D8D8D8",
              backgroundColor: (courseToggle == "videoTutorial"
                ? "#004AAC"
                : "#fff"),
              borderRadius: "34px",
            }}
            className="light_blue_background"
          >
            <div
              className="font_16_regular"
              style={{ color: courseToggle == "videoTutorial" ? "#FFF" :"#000", fontWeight: "600" }}
            >
              Video Tutorial
            </div>
          </div>
          <div
            onClick={() => {
              setCourseToggle("pdf");
            }}
            style={{
                cursor: 'pointer',
              padding: "10px 20x",
              backgroundColor: (courseToggle == "pdf" ? "#004AAC" : "#fff"),
              border: courseToggle == "pdf" ? "none" :"1px solid #D8D8D8",
              borderRadius: "34px",
            }}
            className="light_blue_background"
          >
            <div
              className="font_16_regular"
              style={{ color: courseToggle == "pdf" ? "#FFF" :"#000", fontWeight: "600" }}
            >
              PDF/Ebook
            </div>
          </div>
          <div
            onClick={() => {
              setCourseToggle("assignments");
            }}
            style={{
                cursor: 'pointer',
              padding: "10px 20x",
              backgroundColor: (courseToggle == "assignments"
                ? "#004AAC"
                : "#fff"),
              border: courseToggle == "assignments" ? "none" :"1px solid #D8D8D8",
              borderRadius: "34px",
            }}
            className="light_blue_background"
          >
            <div
              className="font_16_regular"
              style={{ color: courseToggle == "assignments" ? "#FFF" :"#000", fontWeight: "600" }}
            >
              Assignments
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between px-4">
          <UpcomingBatchCard />
          <UpcomingBatchCard />
          <UpcomingBatchCard />
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: "40px" }}
        >
          <div
            style={{ padding: "10px 24px" }}
            className="light_blue_background"
          >
            <div
              className="font_16_regular"
              style={{ color: "#004AAC", fontWeight: "600" }}
            >
              See All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCourses;
