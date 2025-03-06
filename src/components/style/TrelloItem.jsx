import styled from "styled-components";

export const Textarea = styled.textarea`
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
export const StyleAddOlPoshBtn = styled.button`
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
export const StyleTrelloItem = styled.li`
  width: 100%;
  list-style: none;
  padding: 10px;
  background-color: #22272b;
  border-radius: 10px;
`;
export const StyleAddOlPosh = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 4px;
  cursor: pointer;
`;
export const StyleLenth = styled.p`
  flex-basis: 100%;
  margin: 2px 0;
  line-height: 16px;
  font-size: 14px;
`;
export const BsArrowsCollapseVerticalContiner = styled.button`
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
export const StyleTitleContiner = styled.div`
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
export const StyleTitle = styled.form`
  position: relative;
  flex-basis: min-content;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 20px;
`;
export const StyledContinerLiDiv = styled.div`
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
export const StyledListItem = styled.li`
  display: block;
  flex-shrink: 0;
  align-self: flex-start;
  padding: 0 6px;
  height: 100%;
  white-space: nowrap;
`;
export const StyledH2 = styled.span`
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

export const StyledInput = styled.input`
  padding: 6.5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: black;
  font-weight: 600;
`;

export const StyledButton = styled.button`
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
