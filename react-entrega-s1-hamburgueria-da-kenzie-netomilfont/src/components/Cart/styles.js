import styled from "styled-components";

export const Cart = styled.div`
  background-color: var(--color-grey-0);
  height: 35vh;
  border-radius: 0 0 8px 8px;

  @media (min-width: 1024px) {
    width: 292px;
    height: 311px;
  }

  h3 {
    font-size: 0.85rem;
    font-weight: 600;
  }

  .title__cart {
    color: #ffffff;
    background-color: var(--color-primary);
    padding: 15px;
    border-radius: 8px 8px 0 0;
  }

  .cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 5px;
    height: 80%;
    border-radius: 0 0 8px 8px;
  }

  h4 {
    color: var(--color-grey-100);
    font-weight: 700;
  }

  span {
    color: var(--color-grey-50);
    font-size: 0.725rem;
  }
`;

export const ListCart = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media (min-width: 1024px) {
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-grey-20);
      border-radius: 8px;
    }
  }
`;

export const ProductCart = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 23px;
  gap: 8px;

  .container__infoProductCart {
    display: flex;
    justify-content: space-between;
    width: 76%;
  }

  .info__product {
    padding: 8px 0px;
  }

  button {
    padding-top: 7px;
    background-color: var(--color-grey-0);
    border: none;
    color: #bdbdbd;
    font-size: 0.725rem;
    cursor: pointer;
  }

  .container__img {
    width: 70px;
    height: 70px;
    max-width: 70px;
    min-width: 70px;
    background-color: var(--color-grey-20);
    border-radius: 5px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TotalList = styled.div`
  background-color: var(--color-grey-0);
  padding: 0px 10px;
  width: 100%;
  border-radius: 0 0 8px 8px;

  h4 {
    font-weight: 600;
    font-size: 0.875rem;
  }

  span {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--color-grey-50);
  }

  .total__products {
    border-top: 2px solid var(--color-grey-20);
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  button {
    background-color: var(--color-grey-20);
    width: 100%;
    border: 2px solid var(--color-grey-20);
    border-radius: 8px;
    color: var(--color-grey-50);
    height: 40px;
    font-family: "Inter", sans-serif;
    margin-bottom: 8px;
    cursor: pointer;
    transition: 0.3s;
  }

  @media (min-width: 1024px) {
    button:hover {
      border: 2px solid var(--color-grey-50);
      background-color: var(--color-grey-50);
      color: var(--color-grey-20);
      transition: 0.3s;
    }
  }
`;
