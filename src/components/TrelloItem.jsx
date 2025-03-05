import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTrelloItemAsync,
  deleteTodo,
  postCart,
  updateTodo,
} from "../store/todoSlice";
import styled from "styled-components";
import { BsArrowsCollapseVertical, BsThreeDots } from "react-icons/bs";
import { PiPresentationDuotone } from "react-icons/pi";
import { HiOutlinePlus } from "react-icons/hi";
import { StyledBtnAdd } from "./TrelloForm";
import { RxCross2 } from "react-icons/rx";
import Modal from "./UI/Modal";
import { backgroundColor, ModalText } from "../utils/constants/modal";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";

export default function TrelloItem({ title, id, trello }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTrello, setnewTrello] = useState("");
  const [newValue, setNewValue] = useState(title);
  const [textareaHeight, setTextareaHeight] = useState();
  const [isOpenColor, setIsOpenColor] = useState(false);
  const [backgroundColorState, setBackgroundColorState] = useState("#101204");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [newTrello]);
  const handleDelete = async () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    setEdit(true);
    setTimeout(() => {
      const textarea = document.querySelector(
        '[data-testid="list-name-textarea"]'
      );

      if (textarea) {
        textarea.focus();
      }
    }, 100);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (newValue.trim()) {
      dispatch(updateTodo({ id: id, title: newValue.trim() }));
      setEdit(false);
      toast.success("Тур успешно создан !");
    } else {
      return toast.error("заполните!!!");
    }
  };

  const handleValueChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleAddOpen = () => {
    setAddOpen(true);
    handleModalonRequestClose(true);
    setTimeout(() => {
      const textarea = document.querySelector(
        '[data-testid="list-card-composer-textarea"]'
      );

      if (textarea) {
        textarea.focus();
      }
    }, 100);
  };

  const handleAddClose = () => {
    setAddOpen(false);
    setnewTrello("");
  };

  const addTrelloHandler = (e) => {
    e.preventDefault();
    if (newTrello === "") {
      return toast.error("заполните!!!");
    } else {
      dispatch(addTrelloItemAsync({ id, trelloItem: newTrello }));
      toast.success("успешно создан !");
    }
    setnewTrello("");
  };

  const handleAddCart = (product) => {
    handleModalonRequestClose(true);
    dispatch(postCart(product));
    alert("Item copied ");
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalonRequestClose = () => {
    setModalOpen(false);
  };
  const handleOpenColor = () => {
    setIsOpenColor(!isOpenColor);
  };
  const handleBackgroundColor = (props) => {
    setBackgroundColorState(props);
  };
  const handleBackgroundColorOff = () => {
    setBackgroundColorState("#101204");
  };
  return (
    <StyledListItem>
      <StyledContinerLiDiv style={{ backgroundColor: backgroundColorState }}>
        <div
          style={{
            padding: "7px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxHeight: "86vh",
          }}
        >
          <StyleTitleContiner>
            <StyleTitle onClick={handleEdit} onSubmit={handleUpdate}>
              {edit ? (
                <StyledInput
                  data-testid="list-name-textarea"
                  type="text"
                  value={newValue}
                  onChange={handleValueChange}
                />
              ) : (
                <StyledH2>{title}</StyledH2>
              )}
            </StyleTitle>
            <BsArrowsCollapseVerticalContiner>
              <BsArrowsCollapseVertical style={{ fontSize: "20px" }} />
            </BsArrowsCollapseVerticalContiner>
            <BsArrowsCollapseVerticalContiner onClick={handleModalOpen}>
              <BsThreeDots style={{ fontSize: "20px" }} />
            </BsArrowsCollapseVerticalContiner>
            {modalOpen && (
              <div style={{ zIndex: "3" }}>
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
                    <RxCross2
                      onClick={handleModalonRequestClose}
                      style={{ cursor: "pointer" }}
                    />
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
                    <StyleLine></StyleLine>
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
                        {isOpenColor ? <IconChevronUp /> : <IconChevronDown />}
                      </div>
                      <StyleColorOpen
                        style={{
                          height: isOpenColor ? "122px" : "0",
                          width: "100%",
                          display: isOpenColor ? "block" : "none",
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
                            <div
                              style={{
                                backgroundColor: item,
                                width: "50px",
                                height: "35px",
                                borderRadius: "5px",
                              }}
                              onClick={() => handleBackgroundColor(item)}
                              key={item}
                            ></div>
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
                          <RxCross2
                            style={{ fontSize: "15px", margin: "2px 5px 0 0" }}
                          />
                          Без цвета
                        </button>
                      </StyleColorOpen>
                    </div>
                    <StyleLine></StyleLine>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        cursor: "pointer",
                      }}
                    >
                      <p style={{ fontSize: "12px", fontWeight: "500" }}>
                        Автоматизация
                      </p>
                      <BiChevronDown style={{ fontSize: "20px" }} />
                    </div>
                    <StyleLine></StyleLine>
                    <li style={{ cursor: "pointer" }} onClick={handleDelete}>
                      Архивировать список
                    </li>
                  </div>
                  <Modal onClose={handleModalonRequestClose}></Modal>
                </section>
              </div>
            )}
            <StyleLenth>
              Карточек соответствует фильтрам: {trello.length}
            </StyleLenth>
          </StyleTitleContiner>
          <ol
            style={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              overflowY: "scroll",
              height: addOpen ? "75.5%" : "70%",
              scrollbarWidth: "thin",
              scrollbarColor: " #a6c5e229  #091e420f",
            }}
          >
            {trello.map((trelloItem) => (
              <StyleTrelloItem key={trelloItem.id}>
                {trelloItem.title}
              </StyleTrelloItem>
            ))}
            {addOpen && (
              <li>
                <form onSubmit={addTrelloHandler}>
                  <Textarea
                    onChange={(e) => setnewTrello(e.target.value)}
                    value={newTrello}
                    ref={inputRef}
                    style={{ height: textareaHeight, resize: "none" }}
                    spellCheck="false"
                    dir="auto"
                    data-testid="list-card-composer-textarea"
                    maxLength="512"
                    autoComplete="off"
                    placeholder="Введите имя колонки…"
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "25px",
                    }}
                  >
                    <StyledBtnAdd>
                      <StyledButton
                        type="submit"
                        style={{ backgroundColor: "#0056b3" }}
                        onClick={addTrelloHandler}
                      >
                        Добавить список
                      </StyledButton>
                    </StyledBtnAdd>
                    <RxCross2 onClick={handleAddClose} />
                  </div>
                </form>
              </li>
            )}
          </ol>
          {addOpen ? (
            <></>
          ) : (
            <StyleAddOlPosh>
              <StyleAddOlPoshBtn onClick={handleAddOpen} type="button">
                <span style={{ flexShrink: "0", marginRight: "8px" }}>
                  <HiOutlinePlus style={{ fontSize: "15px" }} />
                </span>
                <span>Добавить карточку</span>
              </StyleAddOlPoshBtn>
              <BsArrowsCollapseVerticalContiner style={{ padding: "8px" }}>
                <PiPresentationDuotone style={{ fontSize: "15px" }} />
              </BsArrowsCollapseVerticalContiner>
            </StyleAddOlPosh>
          )}
        </div>
      </StyledContinerLiDiv>
      <ToastContainer />
    </StyledListItem>
  );
}
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
const StyleTrelloItem = styled.li`
  width: 100%;
  list-style: none;
  padding: 10px;
  background-color: #22272b;
  border-radius: 10px;
`;
const Textarea = styled.textarea`
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-display: swap;
  border-radius: 3px;
  transition-duration: 85ms;
  transition-timing-function: ease;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  height: 36px;
  height: auto;
  min-height: 36px;
  max-height: 160px;
  margin: 0;
  padding: 8px 12px;
  overflow: hidden;
  overflow-y: auto;
  border: none;
  border-radius: 8px;
  background-color: #22272b;
  resize: none;
  overflow-wrap: break-word;
`;
const StyleAddOlPoshBtn = styled.button`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 6px 12px 6px 8px;
  border-radius: 8px;
  background-color: transparent;
  text-decoration: none;
  -webkit-user-select: none;
  user-select: none;
  border: none;
  cursor: pointer;
`;
const StyleAddOlPosh = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 4px;
  cursor: pointer;
`;
const StyleLenth = styled.p`
  flex-basis: 100%;
  margin: 2px 0;
  line-height: 16px;
  font-size: 14px;
`;
const BsArrowsCollapseVerticalContiner = styled.button`
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 3px;
  text-decoration: none;
  white-space: normal;
  cursor: pointer;
  background-color: #091e420f;
  color: #172b4d;
  font-weight: 500;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  border: none;
  background-color: transparent;
  box-shadow: none;
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: 0px;
  padding: 8px;
  border-radius: 8px;
  color: #626f86;
  padding: 4px;
`;
const StyleTitleContiner = styled.div`
  display: flex;
  position: relative;
  flex-grow: 0;
  flex-wrap: wrap;
  align-items: center;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 8px 0;
  row-gap: 0;
`;
const StyleTitle = styled.form`
  position: relative;
  flex-basis: min-content;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 20px;
`;
const StyledContinerLiDiv = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-basis: 272px;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  align-self: start;
  justify-content: space-between;
  width: 272px;
  max-height: 90vh;
  padding-bottom: 8px;
  border-radius: 12px;
  background-color: #101204;
  color: #9fadbc #44546f;
  vertical-align: top;
  white-space: normal;
  scroll-margin: 8px;
`;
const StyledListItem = styled.li`
  display: block;
  flex-shrink: 0;
  align-self: flex-start;
  padding: 0 6px;
  height: 100%;
  white-space: nowrap;
`;
const StyledH2 = styled.span`
  display: block;
  z-index: 0;
  margin: 0;
  padding: 6px 8px 6px 12px;
  overflow: hidden;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: normal;
  cursor: pointer;
  overflow-wrap: anywhere;
`;

const StyledInput = styled.input`
  padding: 6.5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: black;
  font-weight: 600;
`;

const StyledButton = styled.button`
  padding: 8px 12px;
  margin-left: 8px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;
