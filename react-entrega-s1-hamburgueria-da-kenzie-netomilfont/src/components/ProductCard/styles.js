import styled from "styled-components";

export const Card = styled.li`
  background: #fff;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  min-width: 250px;
  border: 2px solid var(--color-grey-20);
  border-radius: 5px;

  .img__product {
    background-color: var(--color-grey-0);
    display: flex;
    justify-content: center;
    height: 150px;
    object-fit: contain;
  }

  img {
    height: 100%;
  }

  .info__product {
    padding: 21px 21px 14px 21px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  h3 {
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--color-grey-100);
  }

  span {
    color: var(--color-grey-50);
    font-size: 0.75rem;
  }

  p {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 0.875rem;
  }
`;

export const ButtonAdd = styled.button`
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  background-color: var(--color-primary);
  padding: 11.5px 20px;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  width: 100px;
  transition: 0.3s;

  @media (min-width: 1024px) {
    &:hover {
      background-color: var(--color-primary-50);
      color: #ffffff;
      transition: 0.3s;
      cursor: pointer;
    }
  }
`;
