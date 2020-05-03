import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const TopHeader = styled(Container)`
  background-color: #3d3d3d;
  padding: 8px 78px;

  .clock {
    h4 {
      margin: 0px;
      font-size: 16px;
      color: #cacbcc;
    }
  }

  .account {
    display: flex;
    justify-content: center;

    > div {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        color: #cacbcc;
      }

      svg {
        color: #cacbcc;
      }
    }
  }

  .setting {
    display: flex;
    justify-content: flex-end;

    svg {
      color: #cacbcc;
      cursor: pointer;
    }
  }
`;

export const HeaderUi = styled(Container)`
  background-color: #fff;
  border-bottom: 2px solid #d1d2d2;
  padding: 0px 78px;

  img {
    width: 100%;
  }

  .opcoes {
    display: block;

    ul {
      display: flex;
      list-style: none;
      justify-content: space-evenly;

      li {
        display: block;

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 24px 24px;
          text-decoration: none;
          transition: background-color 0.3s;
          position: relative;

          span {
            color: #545454;
            font-size: 15px;
            font-weight: 400;
            margin-top: 12px;
          }

          svg {
            color: #acacac;
          }

          small {
            position: absolute;
            right: 4px;
            top: 20px;
            font-size: 10px;
            background-color: #ffb135;
            border-radius: 15px;
            padding: 4px 8px;
            color: #fff;
          }

          &:hover {
            background-color: #eef0f0;
          }
        }
      }

      li.active {
        a {
          background-color: #eef0f0;

          span {
            color: #e92b4d;
            font-weight: 700;
          }

          svg {
            color: #767676;
          }
        }
      }
    }
  }
`;
