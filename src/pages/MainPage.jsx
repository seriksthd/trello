import React, { useState } from "react";
import styled from "styled-components";
import { HiArrowSmRight } from "react-icons/hi";
import TrelloList from "../components/TrelloList";
import TrelloForm from "../components/TrelloForm";
import NavigationNav from "../components/NavigationNav";
export default function MainPage() {
  const [IsArticle, setIsArticle] = useState(false);
  const handleIsOpenArticle = () => {
    setIsArticle(true);
  };
  const handleIsCloseeArticle = () => {
    setIsArticle(false);
  };
  return (
    <div>
      <StyleBagraund style={{ display: "flex" }}>
        <div style={{ position: "relative" }}>
          <StyleModalContiner
            style={{
              position: IsArticle ? "absolute" : "",
              left: IsArticle ? "-250px" : "0px",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "17px",
                left: IsArticle ? "250px" : "-40px",
              }}
            >
              <HiArrowSmRight
                onClick={handleIsCloseeArticle}
                style={{
                  fontSize: "22px",
                  borderRadius: "50%",
                  backgroundColor: "hsl(206deg 13.7% 10% / 90%) ",
                }}
              />
            </span>
            <NavigationNav handleIsOpenArticle={handleIsOpenArticle} />
          </StyleModalContiner>
        </div>
        <StyledAppContainerContent>
          <TrelloList />
          <TrelloForm />
        </StyledAppContainerContent>
      </StyleBagraund>
    </div>
  );
}
const StyleModalContiner = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 260px;
  height: 93vh;
  z-index: 2;
  bottom: 0;
  left: 0px;
  top: 0px;
  transition: transform 100ms ease-in;
  background-color: #1d2125f0;
  backdrop-filter: blur(6px);
  transition: all 0.2s ease-in-out;
`;
const StyleBagraund = styled.div`
  background-image: url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1365x2048/402bc701b668a09d4ce4a11337d5458b/photo-1739911013843-0380d6504480.webp");
  background-size: cover;
  background-position: center center;
  scrollbar-color: #fff6 #00000026;
`;
const StyledAppContainerContent = styled.div`
  background-color: #0000004d;
  width: 100%;
  height: 93vh;
  box-sizing: border-box;
  overflow-y: hidden;
  padding: 20px;
  display: flex;
  scrollbar-width: auto;
  background-blend-mode: darken;
  position: relative;
`;
