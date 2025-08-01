// import "../assets/css/meter-chart.css";

// const MeterChart = () => {
//     return (
//         <div>
//             <div className="meter-chart">
//                 <h4>meter-graph</h4>
//             </div>
//         </div>
//     );
// };

// export default MeterChart;


import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const MeterChart = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new("meterChartDiv");

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        innerRadius: am5.percent(80),
        startAngle: -90,
        endAngle: 180
      })
    );

    const axisRenderer = am5radar.AxisRendererCircular.new(root, {
      innerRadius: -40
    });

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: 0,
        max: 100,
        strictMinMax: true,
        renderer: axisRenderer
      })
    );

    const clockHand = am5radar.ClockHand.new(root, {
      pinRadius: am5.percent(10),
      radius: am5.percent(100),
      bottomWidth: 10
    });

    chart.bulletsContainer.children.push(clockHand);

    // Animate clock hand to value
    const value = 65;
    const renderer = xAxis.get("renderer");
    if (typeof (renderer as any).valueToAngle === "function") {
      const angle = (renderer as any).valueToAngle(value);
      clockHand.animate({
        key: "rotation",
        to: angle,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic)
      });
    }

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div className="meter-chart">
      <h4>Meter Graph</h4>
      <div id="meterChartDiv" style={{ width: "100%", height: "300px" }}></div>
    </div>
  );
};

export default MeterChart;

