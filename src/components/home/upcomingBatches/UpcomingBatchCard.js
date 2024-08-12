import React from "react";
import "./UpcomingBatchesLanding.css";

function UpcomingBatchCard() {
  return (
    <div className="cardOutline">
      <div className="cardImgOutline">
        <img
          style={{ width: "100%" }}
          alt="No Image"
          src="https://s3-alpha-sig.figma.com/img/21ba/48b9/2ece4ee7fa76f5db06eeeea635bbdad2?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c7mxX5GwqFhjYanDKFrm~kk44SZYxLXyZRLAkq8OJ1RA14efmF4VkNLSga0HZY6sdBIcFRHZOq8Cmd6iAhP0Hlh28xpDXh3E20bdZGKWnVvK5armaQZXO7Xo0xYBuAxZN0FqsIofTtBzOqQjE2Aw~O~QVv7mGYfbQ~RmylrFq-qOAkFi0TmIDWRNB8ZeP6o7HXQlftza0PhdIfva-IRFLnXRslSlRdXk5TYXDK9DOETdjjAEZYkjLqpa9Bo9LTiHCvDp-rlle~XYNn3K9cilukrq30XfXcVSrEtAsU6IxzY2611rNWFR8-eSjmYQYtwG4EL6rmseYXQkLfFgbcWdVA__"
        />
      </div>
      <div>
        <div className="font_16_regular">Course Name Here</div>
        <div className="font_14_regular" style={{ color: "#004AAC" }}>
          on 07 Aug 2024
        </div>
      </div>
      <div className="font_14_regular">7:30 AM to 9:30 AM IST</div>
      <div className="d-flex justify-content-between">
        <div className="light_blue_background">
          <div className="font_12_regular" style={{ color: "#004AAC" }}>
            30 Days (60 Hrs)
          </div>
        </div>
        <div className="light_red_background">
          <div className="font_12_regular" style={{ color: "#C00000" }}>
            <span> <img alt="No Image" style={{maxWidth:"7px",maxHeight:"7px",objectFit:"contain", marginRight:"4px"}} src="Ellipse437.png"/></span>Live
          </div>
        </div>
      </div>
      <button className="primary-btn">Enroll Now</button>
    </div>
  );
}

export default UpcomingBatchCard;
