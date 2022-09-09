import "./ChartBar.css";
let barFillHeight='0%';
const ChartBar = (props) => {
  if (props.maxValue > 0) {
     barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="Chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height:barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
