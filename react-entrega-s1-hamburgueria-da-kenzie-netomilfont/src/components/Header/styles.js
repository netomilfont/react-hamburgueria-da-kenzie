import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--color-grey-0);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .container__search {
    margin-top: 14px;
    flex-direction: row;
    background-color: #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    border: 2px solid var(--color-grey-20);
    padding: 10px;
    height: 60px;
  }

  .container__search:focus-within {
    border: 2px solid var(--color-grey-100);
  }

  .container__search input {
    border: none;
    outline: none;
  }

  .container__search button {
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
    background-color: var(--color-primary);
    padding: 11.5px 20px;
    color: #ffffff;
  }

  @media (min-width: 1024px) {
    div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
