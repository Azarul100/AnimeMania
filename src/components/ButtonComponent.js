import styled from "styled-components";

const ButtonComponent = styled.button`
  color: white;
  background-color: rgb(196, 191, 191);
  border: none;
  border-radius: 12px;
  font-size: 20px;
  width: 32%;
  padding: 15px 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
`;

export default ButtonComponent;
