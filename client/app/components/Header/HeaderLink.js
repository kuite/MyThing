import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  margin-left:5%;
  margin-top:0%;
  height:62px;
  display: inline-flex;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #41ADDD;

  &:active {
    color: red;
  }
`;
