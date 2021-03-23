import styled from "@emotion/styled";

export const Li = styled.li`
  list-style: none;
  border-radius: 0.5rem;
  padding: 1.3rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const InputCheckbox = styled.input`
  visibility: hidden;
  margin: 0;
  width: 20px;
  height: 20px;
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    border-radius: 3px;
    visibility: initial;
    font-weight: 900;
    font-family: "Font Awesome 5 Free";
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:checked {
    &:after {
      background: #df8c32;
      border-color: #df8c32;
      font-family: "Font Awesome 5 Free";
      content: "\\f00c";
      font-weight: 900;
    }
  }
`;

export const InputText = styled.input`
  width: 30%;
  height: 2.5rem;
  border: 0;
  outline: 0;
  border-radius: 0.3rem;
  padding: 0 1rem;
  font-size: 1rem;
  &:focus {
    background-color: #e7e7e7;
  }
  @media (max-width: 767.98px) {
    width: calc(100% - 2rem);
  }
`;

export const InputSubmit = styled.input`
  height: 2.5rem;
  border: 0;
  outline: 0;
  border-radius: 0.3rem;
  margin-left: 1.5rem;
  background: #df8c32;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  padding: 0 1rem;
  @media (max-width: 767.98px) {
    margin: 1rem auto 1rem auto;
    display: block;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  background: none;
  border: 0;
  color: #fff;
  font-size: 14px;
  outline: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Ul = styled.ul`
  border-top: 1px solid #a8cceb;
  margin-top: 3rem;
  padding: 3rem 0 0 0;
`;

export const Main = styled.main`
  background: #60a1da;
  width: 100vw;
  max-width: 65rem;
  min-height: 70vh;
  border-radius: 1rem;
  padding: 2rem;
  color: #fff;
`;
