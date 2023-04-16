import mainPhoto from "../assets/Home/d01.jpg";
import btnMorning from "../assets/Home/component_hex_morning.svg";
import btnLunch from "../assets/Home/component_hex_lunch.svg";
import btnDinner from "../assets/Home/component_hex_dinner.svg";
import btnSnack from "../assets/Home/component_hex_snack.svg";
import { useState, useEffect } from "react";
import { fetchFoodHistory } from "../services/UserService";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchBodyRecord } from "../services/UserService";
import { Circle } from "rc-progress";

const HomePage = () => {
  const [foodHistory, setFoodHistory] = useState("");
  const [bodyRecord, setBodyRecord] = useState("");

  const getFoodHistory = async (id, date, title, image) => {
    let res = await fetchFoodHistory(id, date, title, image);
    console.log(res);
    return setFoodHistory(res);
  };

  const getBodyRecord = async (name, body_record_1, body_record_2) => {
    let res = await fetchBodyRecord(name, body_record_1, body_record_2);
    return setBodyRecord(res);
  };

  useEffect(() => {
    //call API
    getFoodHistory();
    getBodyRecord();
  }, []);

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="main-photo">
          <img src={mainPhoto} alt="" />
          <div className="circular-progress">
            <Circle
              percent={70}
              strokeWidth={2}
              strokeColor="#FFFFFF"
              trailColor="transparent"
              trailWidth={2}
              strokeLinecap="sqaure"
            />
          </div>
          <div className="progress-value">
            <span className="progress-date">05/21</span>
            <span className="progress-percent">75%</span>
          </div>
        </div>
        <div className="main-graph">
          <ResponsiveContainer width="80%" height={300}>
            <LineChart
              width={300}
              height={200}
              data={bodyRecord}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid stroke="#777777" horizontal="" vertical="true" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ stroke: "white", strokeWidth: 0.5 }}
              />
              <YAxis axisLine={false} tickLine={false} tick={false} />
              <Tooltip />

              <Line
                type="linear"
                dataKey="body_record_1"
                stroke="#8FE9D0"
                strokeWidth={3}
              />
              <Line
                type="linear"
                dataKey="body_record_2"
                stroke="#FFCC21"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="component-hex-btn-group">
        <img style={{ cursor: "pointer" }} src={btnMorning} alt="" />
        <img style={{ cursor: "pointer" }} src={btnLunch} alt="" />
        <img style={{ cursor: "pointer" }} src={btnDinner} alt="" />
        <img style={{ cursor: "pointer" }} src={btnSnack} alt="" />
      </div>
      <div className="homepage-food-history">
        {foodHistory &&
          foodHistory.length > 0 &&
          foodHistory.map((item, index) => {
            return (
              <div key={`${index}-food-history`} className="component-photo">
                <span className="food-title-date">
                  {item.date}.{item.title}
                </span>
                <figure>
                  <img src={item.image} alt="food" />
                </figure>
              </div>
            );
          })}
      </div>
      <div className="homepage-component-btn">
        <button>記録をもっと見る</button>
      </div>
    </div>
  );
};

export default HomePage;
