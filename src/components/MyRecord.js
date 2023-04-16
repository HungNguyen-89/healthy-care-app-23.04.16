import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  fetchBodyRecord,
  fetchComponentRecord,
  fetchMyDiary,
  fetchMyExercise,
} from "../services/UserService";

const MyRecord = () => {
  const [componentRecord, setComponentRecord] = useState("");
  const [myDiary, setMyDiary] = useState("");
  const [myExercise, setMyExercise] = useState("");
  const [bodyRecord, setBodyRecord] = useState("");

  const getComponentRecord = async (id, title, button, image) => {
    let res = await fetchComponentRecord(id, title, button, image);
    return setComponentRecord(res);
  };

  const getMyDiary = async (id, date, time, title, description) => {
    let res = await fetchMyDiary(id, date, time, title, description);
    return setMyDiary(res);
  };

  const getMyExercise = async (id, title, kcal, time) => {
    let res = await fetchMyExercise(id, title, kcal, time);
    return setMyExercise(res);
  };

  const getBodyRecord = async (name, body_record_1, body_record_2) => {
    let res = await fetchBodyRecord(name, body_record_1, body_record_2);
    return setBodyRecord(res);
  };

  useEffect(() => {
    //call API
    getComponentRecord();
    getMyDiary();
    getMyExercise();
    getBodyRecord();
  }, []);

  return (
    <>
      <div className="container component-record">
        {componentRecord &&
          componentRecord.length > 0 &&
          componentRecord.map((item, index) => {
            return (
              <div
                key={`${index}-component-record`}
                className="component-record-photo"
              >
                <span className="record-title">{item.title}</span>
                <img src={item.image} alt="" />
                <button>{item.button}</button>
              </div>
            );
          })}
      </div>
      <div className="container body-record">
        <div className="body-record-title-date">
          <div className="body-record-title">
            <span>BODY</span>
            <span>RECORD</span>
          </div>
          <div className="body-record-date">2021.05.21</div>
        </div>

        <ResponsiveContainer width="97%" height={280}>
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
        <div className="body-record-btn">
          <button className="body-record-btn-day">日</button>
          <button className="body-record-btn-week">週</button>
          <button className="body-record-btn-month">月</button>
          <button className="body-record-btn-year">年</button>
        </div>
      </div>

      <div className="container my-exercise">
        <div className="my-exercise-title-date">
          <div className="my-exercise-title">
            <span>MY</span>
            <span>EXERCISE</span>
          </div>
          <div className="my-exercise-date">2021.05.21</div>
        </div>
        <div className="card-exercise-group">
          {myExercise &&
            myExercise.length > 0 &&
            myExercise.map((item, index) => {
              return (
                <div key={`${index}-my-exercise`} className="card-exercise">
                  <div className="card-exercise-title">
                    <span>・</span> {item.title}
                  </div>
                  <div className="card-exercise-kcal">{item.kcal}</div>
                  <div className="card-exercise-time">{item.time}</div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="container my-diary">
        <span className="my-diary-title">MY DIARY</span>
        <div className="my-diary-group">
          {myDiary &&
            myDiary.length > 0 &&
            myDiary.map((item, index) => {
              return (
                <div key={`${index}-my-diary`} className="card">
                  <div className="my-diary-card-date">{item.date}</div>
                  <div className="my-diary-card-time">{item.time}</div>
                  <div className="my-diary-card-title">{item.title}</div>
                  <div className="my-diary-card-description">
                    {item.description}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="my-record-btn">
        <button>自分の日記をもっと見る</button>
      </div>
    </>
  );
};

export default MyRecord;
