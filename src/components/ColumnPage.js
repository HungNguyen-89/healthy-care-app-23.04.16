import { useEffect, useState } from "react";
import {
  fetchComponentColumn,
  fetchRecommended,
} from "../services/UserService";

const ColumnPage = () => {
  const [recommended, setRecommended] = useState("");
  const [componentColumn, setComponentColumn] = useState("");

  const getRecommended = async (title, classify) => {
    let res = await fetchRecommended(title, classify);
    return setRecommended(res);
  };

  const getComponentColumn = async (id, date, time, title, classify, image) => {
    let res = await fetchComponentColumn(
      id,
      date,
      time,
      title,
      classify,
      image
    );
    return setComponentColumn(res);
  };

  useEffect(() => {
    //call API
    getRecommended();
    getComponentColumn();
  }, []);

  return (
    <div className="column-page-container">
      <div className="container recommended-group">
        {recommended &&
          recommended.length > 0 &&
          recommended.map((item, index) => {
            return (
              <div
                key={`${index}-recommended-item`}
                className="recommended-item"
              >
                <div className="recommended-title">{item.title}</div>
                <hr />
                <div className="recommended-classify"> {item.classify} </div>
              </div>
            );
          })}
      </div>
      <div className="container component-column">
        {componentColumn &&
          componentColumn.length > 0 &&
          componentColumn.map((item, index) => {
            return (
              <div
                key={`${index}-component-column-item`}
                className="component-column-item"
              >
                <div className="component-column-image-container">
                  <div className="component-column-item-date-time">
                    <span>{item.date}</span>
                    <span>{item.time}</span>
                  </div>
                  <figure>
                    <img src={item.image} alt="" />
                  </figure>
                </div>

                <div className="component-column-item-title">{item.title}</div>
                <div className="component-column-item-classify">
                  {item.classify}
                </div>
              </div>
            );
          })}
      </div>
      <div className="column-page-component-btn">
        <button>コラムをもっと見る</button>
      </div>
    </div>
  );
};

export default ColumnPage;
