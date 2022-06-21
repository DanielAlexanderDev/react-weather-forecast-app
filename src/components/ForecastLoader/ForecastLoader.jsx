import ContentLoader from "react-content-loader";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ForecastLoader = (props) => {
  const [width, setWidth] = useState(880);
  const [height, setHeight] = useState(600);
  window.onresize = (e) =>
    e.currentTarget.screen.width < 980
      ? (setWidth(500), setHeight(800))
      : (setWidth(880), setHeight(600));
  return (
    <ContentLoader
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#6a6a6a"
      foregroundColor="#6BF3E7"
      {...props}
    >
      {/* OUTLINES */}
      <rect x="4" y="8" rx="3" ry="3" width="7" height={height - 100} />
      <rect
        x={width - 10}
        y="8"
        rx="3"
        ry="3"
        width="6"
        height={height - 100}
      />
      <rect x="5" y="8" rx="3" ry="3" width={width - 11} height="7" />
      <rect
        x="6"
        y={height === 600 ? 240 : 480}
        rx="3"
        ry="3"
        width={width - 11}
        height="8"
      />
      <rect
        x="7"
        y={height === 600 ? 500 : 700}
        rx="3"
        ry="3"
        width={width - 11}
        height="8"
      />
      {/* INFO  */}
      <rect
        x="160"
        y={height === 600 ? 330 : 555}
        rx="3"
        ry="3"
        width="72"
        height="4"
      />
      <rect
        x="160"
        y={height === 600 ? 390 : 605}
        rx="3"
        ry="3"
        width="72"
        height="4"
      />
      <rect
        x="160"
        y={height === 600 ? 450 : 655}
        rx="3"
        ry="3"
        width="72"
        height="4"
      />
      <rect
        x="260"
        y={height === 600 ? 330 : 555}
        rx="3"
        ry="3"
        width="72"
        height="4"
      />
      <rect
        x="260"
        y={height === 600 ? 390 : 605}
        rx="3"
        ry="3"
        width="72"
        height="4"
      />
      <rect
        x="260"
        y={height === 600 ? 450 : 655}
        rx="3"
        ry="3"
        width="72"
        height="4"
      />
      <rect
        x="360"
        y={height === 600 ? 330 : 555}
        rx="3"
        ry="3"
        width="72"
        height="4"
      />
      <rect
        x="360"
        y={height === 600 ? 390 : 605}
        rx="3"
        ry="3"
        width="72"
        height="4"
      />
      <rect
        x="360"
        y={height === 600 ? 450 : 655}
        rx="3"
        ry="3"
        width="72"
        height="4"
      />
      <rect
        x="460"
        y="330"
        rx="3"
        ry="3"
        width={height === 600 ? 72 : 0}
        height="4"
      />
      <rect
        x="460"
        y="390"
        rx="3"
        ry="3"
        width={height == 600 ? 72 : 0}
        height="4"
      />
      <rect
        x="460"
        y="450"
        rx="3"
        ry="3"
        width={height === 600 ? 72 : 0}
        height="4"
      />
      <rect
        x="560"
        y="330"
        rx="3"
        ry="3"
        width={width === 600 ? 0 : 72}
        height="4"
      />
      <rect
        x="560"
        y="390"
        rx="3"
        ry="3"
        width={width === 600 ? 0 : 72}
        height="4"
      />
      <rect x="560" y="450" rx="3" ry="3" width="72" height="4" />
      <rect x="660" y="330" rx="3" ry="3" width="72" height="4" />
      <rect x="660" y="390" rx="3" ry="3" width="72" height="4" />
      <rect x="660" y="450" rx="3" ry="3" width="72" height="4" />
      <rect x="760" y="330" rx="3" ry="3" width="72" height="4" />
      <rect x="760" y="390" rx="3" ry="3" width="72" height="4" />
      <rect x="760" y="450" rx="3" ry="3" width="72" height="4" />
      {/* WEATHER LOCATION INFO */}
      <rect
        x={height === 600 ? 85 : 130}
        y="71"
        rx="3"
        ry="3"
        width="250"
        height="6"
      />
      <rect
        x={height === 600 ? 106 : 151}
        y="101"
        rx="3"
        ry="3"
        width="202"
        height="6"
      />
      <rect
        x={height === 600 ? 95 : 140}
        y="131"
        rx="3"
        ry="3"
        width="250"
        height="6"
      />
      <rect
        x={height === 600 ? 106 : 151}
        y="161"
        rx="3"
        ry="3"
        width="202"
        height="6"
      />
      <rect
        x={height === 600 ? 85 : 130}
        y="191"
        rx="3"
        ry="3"
        width="250"
        height="6"
      />

      <rect
        x={height === 600 ? 485 : 130}
        y={height === 600 ? 71 : 271}
        rx="3"
        ry="3"
        width="250"
        height="6"
      />
      <rect
        x={height === 600 ? 506 : 151}
        y={height === 600 ? 101 : 301}
        rx="3"
        ry="3"
        width="202"
        height="6"
      />
      <rect
        x={height === 600 ? 495 : 140}
        y={height === 600 ? 131 : 331}
        rx="3"
        ry="3"
        width="250"
        height="6"
      />
      <rect
        x={height === 600 ? 506 : 151}
        y={height === 600 ? 161 : 361}
        rx="3"
        ry="3"
        width="202"
        height="6"
      />
      <rect
        x={height === 600 ? 485 : 130}
        y={height === 600 ? 191 : 391}
        rx="3"
        ry="3"
        width="250"
        height="6"
      />
      {/* DAYS TITLES */}
      <rect
        x="160"
        y={height === 600 ? 280 : 510}
        rx="10"
        ry="10"
        width="72"
        height="15"
      />
      <rect
        x="260"
        y={height === 600 ? 280 : 510}
        rx="10"
        ry="10"
        width="72"
        height="15"
      />
      <rect
        x="360"
        y={height === 600 ? 280 : 510}
        rx="10"
        ry="10"
        width="72"
        height="15"
      />
      <rect
        x="460"
        y="280"
        rx="10"
        ry="10"
        width={height === 600 ? 72 : 0}
        height="15"
      />
      <rect x="560" y="280" rx="10" ry="10" width="72" height="15" />
      <rect x="660" y="280" rx="10" ry="10" width="72" height="15" />
      <rect x="760" y="280" rx="10" ry="10" width="72" height="15" />
      <rect
        x="45"
        y={height === 600 ? 325 : 550}
        rx="10"
        ry="10"
        width="72"
        height="15"
      />
      <rect
        x="45"
        y={height === 600 ? 385 : 600}
        rx="10"
        ry="10"
        width="72"
        height="15"
      />
      <rect
        x="45"
        y={height === 600 ? 445 : 650}
        rx="10"
        ry="10"
        width="72"
        height="15"
      />
    </ContentLoader>
  );
};

export default ForecastLoader;
