import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaTrello } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import styled from "styled-components";
import { headerNav, profileList } from "../utils/constants/constants";
import Modal from "./UI/Modal";
import { StyleLine } from "../pages/ModalList";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/authSlice";

export default function Header() {
  const [isProfile, setIsProfile] = useState(false);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const handleOpenProfile = () => {
    setIsProfile(true);
  };
  const handleCloseProfile = () => {
    setIsProfile(false);
  };

  const handleLogaut = () => {
    dispatch(logout(navigate));
  };

  return (
    <StyledHeader>
      <StyledContyner>
        <BsFillGrid3X3GapFill style={{ fontSize: "20px" }} />
        <FaTrello style={{ fontSize: "20px" }} />
        <h2>Trello</h2>
        {headerNav.map((item) => (
          <StyledDown key={item}>
            <h3>{item}</h3>
            <BiChevronDown style={{ fontSize: "20px" }} />
          </StyledDown>
        ))}
        <StyledBtnCreate>Создать</StyledBtnCreate>
      </StyledContyner>
      <StyledContyner>
        <StryledBtnPremium>
          <WiStars style={{ fontSize: "20px", color: "black" }} />
          <span style={{ color: "black" }}>Осталось дней: 11</span>
        </StryledBtnPremium>
        <StyledInputFilter>
          <StyleCOntinetInput>
            <CiSearch
              style={{ fontSize: "20px", position: "absolute", left: "10px" }}
            />
            <StyleInput type="text" />
          </StyleCOntinetInput>
        </StyledInputFilter>
        <IoIosNotifications style={{ fontSize: "20px" }} />
        <FiHelpCircle style={{ fontSize: "20px" }} />
        <StyledPRofile onClick={handleOpenProfile}></StyledPRofile>
        {isProfile && (
          <Modal onClose={handleCloseProfile}>
            <StyleProfileCOntiner>
              <h2
                style={{
                  fontSize: "11px",
                  marginTop: "20px",
                  textTransform: "uppercase",
                }}
              >
                Учетная запись
              </h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  margin: "15px 0 15px 0",
                }}
              >
                <StyleAvaProfile></StyleAvaProfile>
                <div style={{ fontSize: "14px" }}>
                  {auth && auth.data && <p>{auth.data.firstName}</p>}
                  {auth && auth.data && <p>{auth.data.email}</p>}
                </div>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  gap: "18px",
                  flexDirection: "column",
                  marginBottom: "15px",
                }}
              >
                <li>Переключение аккаунтов</li>
                <li>Управление аккаунтом</li>
              </ul>
              <StyleLine />
              <h2
                style={{
                  fontSize: "11px",
                  marginTop: "18px",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                }}
              >
                Trello
              </h2>
              <nav>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    gap: "18px",
                    flexDirection: "column",
                    marginBottom: "15px",
                  }}
                >
                  {profileList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </nav>
              <StyleLine />
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  gap: "18px",
                  flexDirection: "column",
                  marginBottom: "15px",
                }}
              >
                <li>Создать рабочее пространство</li>
              </ul>
              <StyleLine />
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  gap: "18px",
                  flexDirection: "column",
                  marginBottom: "15px",
                }}
              >
                <li>Помощь</li>
                <li>Горячие клавиши</li>
              </ul>
              <StyleLine />
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  gap: "18px",
                  flexDirection: "column",
                  marginBottom: "15px",
                }}
                onClick={handleLogaut}
              >
                <li style={{ marginTop: "5px", cursor: "pointer" }}>Выйти </li>
              </ul>
            </StyleProfileCOntiner>
          </Modal>
        )}
      </StyledContyner>
    </StyledHeader>
  );
}
const StyleProfileCOntiner = styled.div`
  position: fixed;
  right: 10px;
  top: 50px;
  background-color: #282e33;
  width: 304px;
  height: 616px;
  border-radius: 7px;
  padding: 15px;
  z-index: 3;
  font-size: 15px;
`;
const StyleAvaProfile = styled.div`
  background-image: url("https://trello-members.s3.amazonaws.com/67c0a74cd81bc6949159778f/080ab9ede7effb8985cbacd6f9264151/170.png");
  background-size: 40px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  z-index: 4;
`;
const StyleCOntinetInput = styled.div`
  max-width: none;
  height: 32px;
  padding-left: 7px;
  border-width: 1px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
const StyleInput = styled.input`
  background-color: #22272b;
  border: 1px solid #738496;
  height: 100%;
  margin-bottom: revert;
  padding: 0px 12px 0 7px;
  border-radius: 4px;
  transition: revert;
  box-shadow: none;
`;
const StyledInputFilter = styled.div`
  position: relative;
  width: 200px;
  margin-right: 4px;
  margin-left: 4px;
`;
const StryledBtnPremium = styled.button`
  background: linear-gradient(79.47deg, #6e5dc6 25.62%, #0c66e4 99.57%);
  border: none;
  border-radius: 3px;
  height: 32px;
  padding: 0 5px 0 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
const StyledContyner = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 25px;
  justify-content: space-between;
  background-color: #1d2125;
  font-size: 14px;
  position: fixed;
  top: 0;
`;
const StyledDown = styled.div`
  display: flex;
  align-items: center;
`;
const StyledBtnCreate = styled.button`
  background-color: #579dff;
  color: #1d2125;
  width: 76px;
  height: 32px;
  border: none;
  border-radius: 7px;
  font-weight: 600;
`;
const StyledPRofile = styled.div`
  border-radius: 500%;
  width: 27px;
  height: 27px;
  background-color: wheat;
`;
