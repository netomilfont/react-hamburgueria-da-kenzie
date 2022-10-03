import styled from "styled-components";

export const Cart = styled.div`
  background-color: var(--color-grey-0);

  @media (min-width: 1024px) {
    width: 292px;
    height: 300px;
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
    padding: 30px 20px 20px 20px;
    gap: 5px;
    height: 150px;
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
  border-bottom: 2px solid var(--color-grey-20);
`;

export const ProductCart = styled.li``;
