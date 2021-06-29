import React from "react";
import styled from "styled-components/macro";

const Button = styled.button`
  position: relative;
  font-family: inherit;
  display: inline-block;
  z-index: 1;
  padding: 18px 24px;
  background: #00a862;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.24), 0 8px 12px rgba(0, 0, 0, 0.14);
  border: 0;
  border-radius: 500px;
  color: #fff;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.2;
  overflow: hidden;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.2s;
  transition-property: transform, box-shadow, width, height;
  transition-timing-function: ease;
  margin-left: auto;
  cursor: pointer;
`;

export const FormSubmit = ({ name, type, onClick }) => {
  return <Button type={type}>{name}</Button>;
};
