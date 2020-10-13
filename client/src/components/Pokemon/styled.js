import styled from "styled-components";
import Back from "./images/back.png";
import theme from "../../theme/theme";
import { TYPES_IMAGES } from "../../utils/constants";

export const PokemonContent = styled.article`
  margin-bottom: 20px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  cursor: pointer;
  :hover {
    transform: translateY(-10px);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);
    .thumbnail {
      width: 100%;
      background-image: url(${Back});
      background-color: ${({ color }) => `${theme.global.types[color]}`};
      figure::before {
        background: rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

export const PokemonThumbnail = styled.div`
  background-size: cover;
  background-position: center center;
  /* width: 240px; */
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const PokemonFigure = styled.figure`
  font-size: 0;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    position: absolute;
    content: "";
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 45px;
    border-radius: 50%;
    bottom: 0;
    z-index: 0;
  }
`;

export const PokemonImage = styled.img`
  max-width: 150px;
  z-index: 2;
`;

export const PokemonInfo = styled.div`
  height: 85px;
  display: grid;
  grid-template: 1fr / 1fr 70px;
  padding: 0 20px;
  align-items: center;
`;

export const PokemonMeta = styled.div``;

export const PokemonName = styled.h2`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  margin: 0 0 6px;
  text-transform: capitalize;
`;

export const PokemonNumber = styled.p`
  font-size: 14px;
  line-height: 14px;
  margin: 0;
  color: #c7c7c7;
`;

export const PokemonPosition = styled.strong`
  margin-left: 5px;
  color: ${({ color }) => theme.global.types[color]};
`;

export const PokemonTypes = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template: 30px / repeat(2, 30px);
  grid-column-gap: 10px;
`;

export const PokemonType = styled.li`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  background-image: url(${({ type }) => TYPES_IMAGES[type]});
`;
