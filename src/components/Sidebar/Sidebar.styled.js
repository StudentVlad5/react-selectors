import styled from "styled-components";

export const SidebarContainer = styled.aside`
  padding-top: 40px;
  padding-left: 20px;
  height: 100vh;
`;

export const SidebarBox = styled.div`
  display: block;
  width: 250px;
`;

export const SidebarList = styled.ul`
  display: flex;
  justify-content: start;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  gap: 8px;
  border: 2px solid gray;
  border-radius: 10px;
`;
export const SidebarListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 4px;
  gap: 10px;
  cursor: pointer;
  &.active {
    background-color: beige;
    padding: 8px 4px;
    border-radius: 5px;
  }
  &:hover {
    transform: scaleY(1.01);
    background: beige;
    /* padding: 8px 4px; */
  }
  &.active .modelContainer {
    display: flex;
  }
  &.active > .yearContainer {
    display: flex;
  }
`;
export const ModelListItem = styled(SidebarList)`
  position: absolute;
  width: 200px;
  left: 240px;
  top: 5px;
  display: none;
`;
