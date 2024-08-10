import React from "react";
import UpcomingBatchCard from "./UpcomingBatchCard";

function UpcomingBatchesLanding() {
  return (
    <div className="container">
      <div className="col-12 py-4">
        <div className="d-flex justify-content-center">
          <h4>Upcoming Batches</h4>
        </div>
        <div className="d-flex justify-content-between p-4">
          <UpcomingBatchCard />
          <UpcomingBatchCard />
          <UpcomingBatchCard />
        </div>
        <div className="d-flex justify-content-center" style={{paddingTop:"40px"}}>
          <div style={{padding:"10px 24px"}} className="light_blue_background">
            <div className="font_16_regular" style={{ color: "#004AAC", fontWeight:"600" }}>
              See All
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingBatchesLanding;
