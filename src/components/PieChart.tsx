// import "../assets/css/pie-chart.css";

// const PieChart = () => {
//     return (
//         <div>
//             <div className="pie-chart">
//                 <h4>Pie Chart</h4>
//             </div>
//         </div>
//     );
// };

// export default PieChart;

// ----------------------------




// PieChart.tsx
import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const PieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = am5.Root.new(chartRef.current!);

    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
      })
    );

    // Create series
    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
      })
    );

    // Add hidden state for entry animation
    series.states.create("hidden", {
      endAngle: -90,
    });

    // Set data
    series.data.setAll([
      { category: "Lithuania", value: 501.9 },
      { category: "Czechia", value: 301.9 },
      { category: "Ireland", value: 201.1 },
      { category: "Germany", value: 165.8 },
      { category: "Australia", value: 139.9 },
      { category: "Austria", value: 128.3 },
      { category: "UK", value: 99 },
    ]);

    // Animate on load
    series.appear(1000, 100);

    return () => {
      root.dispose(); // Cleanup on unmount
    };
  }, []);

  return <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "290px" }} />;
};

export default PieChart;