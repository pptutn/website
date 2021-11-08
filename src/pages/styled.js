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
    font-size 20px;
    max-width: 450px;
`;

const StyledH1 = styled.h1`
  color: #eca72c;
  text-transform: uppercase;
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

export {
  StyledVideoItem,
  StyledCaption,
  StyledParagraph,
  StyledWrapper,
  StyledH1,
  StyledH2,
  StyledImage,
};
