import styled from "styled-components";
import ImgBg from "../../images/pizza-2.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.2)),
    url(${ImgBg});
    height: 100vh;
    background-size: cover;
    background-position: left; 
`
