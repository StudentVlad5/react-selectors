import styled from "styled-components";

export const SidebarContainer = styled.aside`
  @media screen and (min-width: 1280px) {
    padding-top: 10px;
    padding-left: 20px;
  }
`;

export const SidebarBox = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;
    width: 320px;
  }
`;
