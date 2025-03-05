import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaTrello } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { WiStars } from "react-icons/wi";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledContyner>
        <BsFillGrid3X3GapFill style={{ fontSize: "20px" }} />
        <FaTrello style={{ fontSize: "20px" }} />
        <h2>Trello</h2>
        <StyledDown>
          <h3>Рабочие пространства</h3>
          <BiChevronDown style={{ fontSize: "20px" }} />
        </StyledDown>
        <StyledDown>
          <h3>Недавние</h3>
          <BiChevronDown style={{ fontSize: "20px" }} />
        </StyledDown>
        <StyledDown>
          <h3>В избранном</h3>
          <BiChevronDown style={{ fontSize: "20px" }} />
        </StyledDown>
        <StyledDown>
          <h3>Шаблоны </h3>
          <BiChevronDown style={{ fontSize: "20px" }} />
        </StyledDown>
        <StyledBtnCreate>Создайть</StyledBtnCreate>
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
        <StyledPRofile></StyledPRofile>
      </StyledContyner>
    </StyledHeader>
  );
}
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
