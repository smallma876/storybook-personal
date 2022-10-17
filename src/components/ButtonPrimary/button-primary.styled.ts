import styled from "styled-components";
import { Colors, FontSize } from "../../assets/assets";

const Button = styled.button`
  background: ${Colors.ColorRed};
  border: 1px solid ${Colors.ColorRed};
  color: ${Colors.ColorWhite};
  min-width: 8em;
  max-width: 19em;
  font-size: ${FontSize.FontSize0};
  cursor: pointer;
  padding: 10px 10px;
  border-radius: 5px;

  :hover {
    background: ${Colors.ColorWhite};
    color: ${Colors.ColorRed};
    border: 1px solid ${Colors.ColorRed};
  }
`;

export const ButtonPrimaryStyles = {
  Button,
};
