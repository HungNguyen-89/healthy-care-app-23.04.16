import React from "react";
import iconMenu from "../assets/CurtainMenu/icon_menu.svg";
import iconClose from "../assets/CurtainMenu/icon_close.svg";
import { Link } from "react-router-dom";

const CurtainMenu = () => {
  const openNav = () => {
    document.getElementById("mySidepanel").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidepanel").style.width = "0";
  };

  return (
    <div className="curtain-menu">
      <img
        src={iconMenu}
        className="openbtn"
        onClick={openNav}
        alt="icon-menu"
      />

      <div id="mySidepanel" className="sidepanel">
        <img
          src={iconClose}
          className="closebtn"
          onClick={closeNav}
          alt="icon-close"
        />
        <Link className="curtain-link" to="/">
          自分の記録
        </Link>
        <Link className="curtain-link" to="/">
          体重のグラフ
        </Link>
        <Link className="curtain-link" to="/">
          目標
        </Link>
        <Link className="curtain-link" to="/">
          選択中のコース
        </Link>
        <Link className="curtain-link" to="/column-page">
          コラム一覧
        </Link>
        <Link className="curtain-link" to="/">
          設定
        </Link>
      </div>
    </div>
  );
};

export default CurtainMenu;
