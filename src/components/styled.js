import styled, { css } from "styled-components";

export const Container = styled.div`
  background: white;
  max-width: 870px;
  height: 560px;
  position: relative;
  display: flex;
  margin: 10% auto;
`;

export const ImageContainer = styled.img`
  width: 100%;
  max-height: 490px;
  border-radius: 8px;
  object-fit: cover;
`;

export const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: rgba(144, 202, 249, 0.5);
  cursor: pointer;
  padding: 0;
  position: absolute;
  bottom: -3%;
  margin: auto;
  border-radius: 50%;
  box-shadow: 0px 4px 60px 20px rgba(3, 3, 3, 0.9),
    inset 0 --3em 3em rgba(3, 3, 3, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0, -50%);
  ${(props) =>
    props.right === true
      ? css`
          right: 15%;
        `
      : css`
          left: 15%;
        `};
        @media only screen and (max-width: 768px) {
          width: 30px;
          height: 30px;
          bottom: 4%;
          transform: translate(0, 0);
          ${(props) =>
    props.right === true
      ? css`
          right: 20%;
        `
      : css`
          left: 20%;
        `};

  }
        @media only screen and (max-width: 600px) {
          width: 19px;
          height: 19px;
          bottom: 5.3%;
          transform: translate(0, 0);
          ${(props) =>
    props.right === true
      ? css`
          right: 22%;
        `
      : css`
          left: 22%;
        `};

  }
  @media only screen and (max-width: 480px) {
          width: 20px;
          height: 20px;
          bottom: 6.2%;
          transform: translate(0, 0);
          ${(props) =>
    props.right === true
      ? css`
          right: 22%;
        `
      : css`
          left: 22%;
        `};

  }
        @media only screen and (max-width: 400px) {
          width: 13px;
          height: 13px;
          bottom: 6.5%;
          transform: translate(0, 0);
          ${(props) =>
    props.right === true
      ? css`
          right: 24%;
        `
      : css`
          left: 24%;
        `};

  }

  @media screen and (max-width: 320px) {
    bottom: 7.3%;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, 0);

  @media only screen and (max-width: 768px) {
    gap: 6px;
    bottom: 5%;
  }
  @media only screen and (max-width: 600px) {
    gap: 6px;
    bottom: 6%;
  }
  @media only screen and (max-width: 480px) {
    gap: 3px;
    bottom: 7%;
  }
  @media only screen and (max-width: 320px) {
    gap: 1.5px;
    bottom: 8%;
  }
`;
export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(144, 202, 249, 0.5);
  cursor: pointer;
  ${(props) =>
    props.active === true
      ? css`
          background-color: #2196f3;
        `
      : css`
          background-color: rgba(144, 202, 249, 0.5);
        `};
        @media only screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
        @media only screen and (max-width: 600px) {
    width: 10px;
    height: 10px;
  }
        @media only screen and (max-width: 400px) {
    width: 7px;
    height: 7px;
  }
        @media only screen and (max-width: 320px) {
    width: 5px;
    height: 5px;
  }
`;

export const Img = styled.img`
  @media only screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
  @media only screen and (max-width: 600px) {
    width: 10px;
    height: 10px;
  }
  @media only screen and (max-width: 400px) {
    width: 7px;
    height: 7px;
  }
  @media only screen and (max-width: 320px) {
    width: 7px;
    height: 7px;
  }
`