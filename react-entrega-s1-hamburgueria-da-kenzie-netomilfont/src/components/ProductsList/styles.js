import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  overflow-x: auto;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    overflow-x: unset;
    flex-wrap: wrap;
    width: 70%;
  }
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 140px;
  min-height: 150px;
  margin: auto;

  border: 1px solid #f10;
  border-radius: 20px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
