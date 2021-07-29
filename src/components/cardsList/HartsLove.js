import React from "react";
import "./hearts.css";

const HartsLove = ({ like }) => {
    

  return (
    <div>
      <div className={like ? "dancing-icon heartsToggle" : "dancing-icon" }>
        <div className="hearts-animations">
          <div className="hearts">
            <i class="fas fa-heart"></i>
                  </div>
                  <div className="hearts">
            <i class="fas fa-heart"></i>
                  </div>
                  <div className="hearts">
            <i class="fas fa-heart"></i>
                  </div>
                  <div className="hearts">
            <i class="fas fa-heart"></i>
          </div>
              </div>
              <span className="bot-icon"></span>
              <span className="bot-icon-shadow"></span>
      </div>
    </div>
  );
};

export default HartsLove;
