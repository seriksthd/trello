import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTrelloItemAsync, postCart, updateTodo } from "../store/todoSlice";
import { BsArrowsCollapseVertical, BsThreeDots } from "react-icons/bs";
import { PiPresentationDuotone } from "react-icons/pi";
import { HiOutlinePlus } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import ModalList from "../pages/ModalList";
import {
  BsArrowsCollapseVerticalContiner,
  StyleAddOlPosh,
  StyleAddOlPoshBtn,
  StyledButton,
  StyledContinerLiDiv,
  StyledH2,
  StyledInput,
  StyledListItem,
  StyleLenth,
  StyleTitle,
  StyleTitleContiner,
  StyleTrelloItem,
  Textarea,
} from "./style/TrelloItem";
import { StyledBtnAdd } from "./TrelloForm";

export default function TrelloItem({ title, id, trello, item }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTrello, setnewTrello] = useState("");
  const [newValue, setNewValue] = useState(title);
  const [activeColorId, setActiveColorId] = useState(null);
  const [backgroundColorState, setBackgroundColorState] = useState("#101204");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [newTrello]);

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
    setModalOpen(true);
    dispatch(postCart(product));
  };
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleBackgroundColor = (props) => {
    setBackgroundColorState(props);
    setActiveColorId(props)
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
                <ModalList
                  id={id}
                  handleBackgroundColorOff={handleBackgroundColorOff}
                  handleBackgroundColor={handleBackgroundColor}
                  handleAddCart={handleAddCart}
                  handleModalOpen={handleModalOpen}
                  handleAddOpen={handleAddOpen}
                  item={item}
                  activeColorId={activeColorId}
                />
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
              overflowY: "auto",
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
                    style={{ resize: "none" }}
                    data-testid="list-card-composer-textarea"
                    maxLength="512"
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
