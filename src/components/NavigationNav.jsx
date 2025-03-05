import React from "react";
import styled from "styled-components";
import { FaTrello } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { FaCalendarDays, FaTableList } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";
export default function NavigationNav({ handleIsOpenArticle }) {
  return (
    <div
      style={{
        width: "260px",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          borderBottom: "1px solid #ffff",
        }}
      >
        <StyleContiner>
          <StyleP>p</StyleP>
        </StyleContiner>
        <div>
          <p style={{ fontWeight: "500", fontSize: "14px" }}>
            Рабочее пространство Trello
          </p>
          <p style={{ fontSize: "14px" }}>Premium</p>
        </div>
        <StyleBtnLeft onClick={handleIsOpenArticle}>
          <img
            src="https://trello.com/assets/58243262833f693f6101.svg"
            alt=""
          />
        </StyleBtnLeft>
      </div>
      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span>
            <FaTrello />
          </span>
          <p>Доски</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>
              <RxAvatar />
            </span>
            <p>Участники</p>
          </div>
          <span>
            <HiOutlinePlus style={{ fontSize: "20px" }} />
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span>
            <IoMdSettings />
          </span>
          <p>Настройки рабочего пространства</p>
          <span>
            <BiChevronDown style={{ fontSize: "26px" }} />
          </span>
        </div>
        <button
          style={{
            width: "58px",
            height: "16px",
            fontSize: "11px",
            fontWeight: "700",
            color: "#b8acf6",
            backgroundColor: "#2b273f",
            border: "none",
          }}
        >
          PREMIUM
        </button>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              fontSize: "14px",
              fontWeight: "600",
              width: "190px",
            }}
          >
            Режимы просмотра рабочего пространства
          </p>
          <span>
            <HiOutlinePlus style={{ fontSize: "20px" }} />
          </span>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span>
            <FaTableList />
          </span>
          <i>Таблица</i>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span>
            <FaCalendarDays />
          </span>
          <i>Календарь</i>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
          }}
        >
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "24px",
              fontSize: "14px",
              fontWeight: "600",
              width: "190px",
            }}
          >
            Мои доски
          </p>
          <span>
            <HiOutlinePlus style={{ fontSize: "20px" }} />
          </span>
        </div>
      </div>
    </div>
  );
}
const StyleBtnLeft = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 2px;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;
const StyleContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 4px;
  background-color: #091e420f;
`;
const StyleP = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(#0747a6, #008da6);
`;
