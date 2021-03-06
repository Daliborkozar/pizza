import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.div`
  background: linear-gradient(180deg, rgba(0,0,0,0.4009978991596639) 0%, rgba(255,255,255,0) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 120%);
    font-weight: 900;
    font-size: 1.2rem;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, 10%);
`;

export const Badge = styled.span`
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  background-color: #AE1B0F;
  color: #fff;
  border-radius: 50%;
  right: 25px;
  top: 25px;
`;
