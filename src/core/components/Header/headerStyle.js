import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
`;

export const Mower = styled.div`
  img {
    width: 285px;
  }
`;

export const Button = styled.button`
  width: 250px;
  background-color: #ffffff;
  text-align: center;
  color: #357564;
  cursor: pointer;
  transition: 0.5s;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-30%) translateX(-50%);
  border-radius: 10px;
  border: 2px solid #357564;
  text-decoration: none;
  padding: 10px;

  :after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 7px;
    right: 30px;
    transition: 0.5s;
  }

  :hover {
    padding-right: 24px;
    padding-left: 8px;
  }

  :hover:after {
    opacity: 1;
    right: 15px;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
