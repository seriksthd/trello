import React, { useState } from "react";
import {
  Automation,
  backgroundColor,
  ModalText,
} from "../utils/constants/constants";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Modal from "../components/UI/Modal";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice";
export default function ModalList({
  id,
  handleBackgroundColorOff,
  handleBackgroundColor,
  handleAddCart,
  handleModalOpen,
  handleAddOpen,
  item,
  activeColorId,
}) {
  const dispatch = useDispatch();
  const [isOpenColor, setIsOpenColor] = useState(false);
  const [automation, setAutomation] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleOpenColor = () => {
    setIsOpenColor(!isOpenColor);
  };
  const handleOpenautomation = () => {
    setAutomation(!automation);
    setIsActive(!isActive);
  };
  return (
    <section
      style={{
        position: "absolute",
        zIndex: "3",
        top: "35px",
        left: "220px",
        backgroundColor: "#282e33",
        width: "304px",
        borderRadius: "7px",
      }}
    >
      <header
        style={{
          alignItems: "center",
          padding: "4px 8px",
          textAlign: "center",
          display: "flex",
        }}
      >
        <StyleModalH2>Действия со списком</StyleModalH2>
        <RxCross2 onClick={handleModalOpen} style={{ cursor: "pointer" }} />
      </header>
      <div
        style={{
          maxLength: "614px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontWeight: "500",
          }}
        >
          <li
            style={{
              listStyle: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={handleAddOpen}
          >
            Добавить карточку
          </li>

          <li
            style={{
              listStyle: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={() => handleAddCart(item)}
          >
            Копирование списка
          </li>
          {ModalText.map((item, index) => (
            <li
              style={{
                listStyle: "none",
                fontSize: "14px",
                cursor: "pointer",
              }}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <StyleLine />
        <div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: "500",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
            onClick={handleOpenColor}
          >
            <div>
              Изменить цвет колонки
              <StyleBorserPrmun>
                <StyleBorserPrmunText>PREMIUM</StyleBorserPrmunText>
              </StyleBorserPrmun>
            </div>
            <StyleIconRotate className={isOpenColor ? "active-automation" : ""}>
              <IconChevronDown />
            </StyleIconRotate>
          </div>
          <StyleColorOpen
            style={{
              height: isOpenColor ? "122px" : "0",
              width: "100%",
              transition: "height 0.3s ease-in-out",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: "7px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "7px",
                margin: "5px 0 5px 0",
              }}
            >
              {backgroundColor.map((item) => (
                <StyleBox
                  style={{
                    backgroundColor: item.activeBackgroundBtn,
                  }}
                  className={
                    item.activeBackground === activeColorId ? "active" : ""
                  }
                  onClick={() => handleBackgroundColor(item.activeBackground)}
                  key={item.id}
                ></StyleBox>
              ))}
            </div>

            <button
              style={{
                border: "none",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#bcd6f00a",
                padding: "8px",
                borderRadius: "3px",
              }}
              onClick={handleBackgroundColorOff}
            >
              <RxCross2 style={{ fontSize: "15px", margin: "2px 5px 0 0" }} />
              Без цвета
            </button>
          </StyleColorOpen>
        </div>
        <StyleLine />
        <StyleAutomationContainer>
          <StyleAutomationHeader onClick={handleOpenautomation}>
            <StyleAutomationText>Автоматизация</StyleAutomationText>
            <StyleIconRotate className={automation ? "active-automation" : ""}>
              <IconChevronDown />
            </StyleIconRotate>
          </StyleAutomationHeader>
          <StyleAutomationList
            style={{ maxHeight: automation ? "200px" : "0" }}
          >
            {Automation.map((item) => (
              <StyleAutomationListItem key={item.id}>
                <span>{item.text}</span> {item.icon && <item.icon />}
              </StyleAutomationListItem>
            ))}
          </StyleAutomationList>
        </StyleAutomationContainer>
        <StyleLine />
        <li style={{ cursor: "pointer" }} onClick={handleDelete}>
          Архивировать список
        </li>
      </div>
      <Modal onClose={handleModalOpen}></Modal>
    </section>
  );
}
const StyleAutomationContainer = styled.div``;

const StyleAutomationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const StyleAutomationText = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`;

const StyleIconRotate = styled.div`
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);

  &.active-automation {
    transform: rotate(-180deg);
  }
`;

const StyleAutomationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const StyleAutomationListItem = styled.li`
  font-size: 14px;
  padding: 5px;
  color: white;
`;
const StyleBox = styled.div`
  width: 50px;
  height: 35px;
  border-radius: 5px;
  cursor: pointer;
  &.active {
    border: 2px solid #579dff;
  }
`;
const StyleColorOpen = styled.div`
  transition: transform 0.3s ease-in-out;
`;
const IconChevronDown = styled(BiChevronDown)`
  font-size: 20px;
  transition: transform 0.3s ease-in-out;
`;

const IconChevronUp = styled(BiChevronUp)`
  font-size: 20px;
  transition: transform 0.3s ease-in-out;
`;
const StyleBorserPrmunText = styled.span`
  padding: 4px;
  background: linear-gradient(79.47deg, #9f8fef 25.62%, #5e4db2 99.57%);
  background-clip: text;
  color: transparent;
  font-size: 11px;
  font-weight: bold;
  line-height: 11px;
  text-transform: uppercase;
`;
const StyleBorserPrmun = styled.span`
  margin-left: 8px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    border: 1px solid transparent;
    border-radius: 3px;
    background: linear-gradient(112.4deg, #0055cc 0%, #5e4db2 100%);
    background-size: 110%;
    inset: 0;
    mask: linear-gradient(#282e33 0 0) padding-box, linear-gradient(#282e33 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    background-position-x: -1px;
  }
`;
const StyleLine = styled.li`
  list-style: none;
  &::before {
    height: 1px;
    content: " ";
    display: block;
    margin: 8px 1px;
    background-color: #a6c5e229;
  }
`;

const StyleModalH2 = styled.h2`
  display: block;
  height: 40px;
  margin: 0;
  padding: 0 62px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.003em;
  line-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
