import styled from "styled-components";

const StyledVideoItem = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const StyledCaption = styled.caption`
  margin: 3rem;
  margin-bottom: 1rem;
  font-size: 30px;
  color: #f8333c;
  text-transform: uppercase;
  max-width: 900px;
  display: inline-block;
  text-decoration: underline;
  text-align: center;'
`;

const StyledWrapper = styled.div`
  display: grid;
  justify-content: centre;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const StyledParagraph = styled.p`
    margin: auto;
    margin-top: 0;
    margin-bottom: ${(props) =>
      props.marginBottom ? props.marginBottom : "0rem"};
    font-size 20px;
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "450px")};
    color: ${(props) => (props.color ? props.color : "white")};
`;

const StyledH1 = styled.h1`
  color: #cc2936;
  text-transform: uppercase;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "4rem")};
`;

const StyledH2 = styled.h2`
  max-width: 900px;
  font-size 20px;
  font-weight: normal;
`;

const StyledImage = styled.img`
  width: 606px;
  height: 409px;
`;

const TextOverImage = styled.div`
  position: absolute;
  top: 55%;
  left: 45%;
  font-size: 80px;
  color: #ffffff;
`;

export {
  StyledVideoItem,
  StyledCaption,
  StyledParagraph,
  StyledWrapper,
  StyledH1,
  StyledH2,
  StyledImage,
  TextOverImage,
};
