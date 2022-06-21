import React from "react";

const TrainingCycle = (props: any) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={trainingCycleStyle.container}>
        <div style={trainingCycleStyle.verticalLine}></div>
        <img
          src="/assets/round.png"
          alt="round"
          style={trainingCycleStyle.circle}
        />
      </div>
      <div style={trainingCycleStyle.card}>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "300",
            marginRight: "10px",
            color: props.color,
          }}
        >
          {props.year}
        </div>
        <div>
          <span
            style={{ fontSize: "24px", fontWeight: "300", color: props.color }}
          >
            {" "}
            : {props.diploma}
          </span>
          <br />
          <span style={trainingCycleStyle.cardSchool}>{props.school}</span>
        </div>
      </div>
    </div>
  );
};

const trainingCycleStyle = {
  container: {
    position: "relative" as "relative",
    paddingBottom: 40,
  },
  verticalLine: {
    position: "absolute" as "absolute",
    height: "100%",
    width: "2px",
    background: "#FF6B00",
    zIndex: 1,
    marginLeft: 8,
  },
  circle: {
    height: 18,
    width: 18,
    position: "relative" as "relative",
    zIndex: 2,
    marginTop: "40px",
  },
  card: {
    marginLeft: "20px",
    display: "flex",
    flexDirection: "row" as "row",
    marginTop: "30px",
  },
  cardYear: { fontSize: "24px", marginRight: "10px" },
  cardDiploma: { fontSize: "24px" },
  cardSchool: { color: "#C4C4C4" },
};

export default TrainingCycle;
