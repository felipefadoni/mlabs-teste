import styled from 'styled-components';
import { Container, Modal } from 'react-bootstrap';
import { colors } from '../../styles/global';

export const ContentUi = styled(Container)`
  padding: 46px 78px;

  @media (min-width: 0px) and (max-width: 1100px) {
    padding: 32px 16px;
  }

  .redes-sociais {
    display: block;

    ul {
      display: block;
      list-style: none;
    }
  }
`;

export const ModalUi = styled(Modal)`
  .header-modal {
    display: flex;
    align-items: center;

    .icon-title {
      height: 50px;
      width: 50px;
      border: 3px solid ${colors.gray};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
    }

    .icon-title-img {
      height: 50px;
      width: 50px;
      border: 3px solid ${colors.gray};
      background-color: ${colors.gray};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 16px 32px;
    border: 0px;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;
    }

    .back {
      color: #727272;
      font-size: 18px;
    }

    .next {
      background-color: #438fdd;
      color: #fff;
      font-size: 20px;
      height: 60px;
      padding: 0px 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;

      svg {
        margin-left: 12px;
      }
    }
  }

  .body-modal {
    .time-line {
      width: 100%;
      position: relative;
      height: 100px;

      .progressbar {
        margin: 0;
        padding: 0;
        counter-reset: step;
        position: absolute;
        z-index: 11;
        display: block;
        width: 100%;
      }
      .progressbar li {
        list-style-type: none;
        width: 25%;
        float: left;
        font-size: 12px;
        position: relative;
        text-align: center;
        text-transform: uppercase;
      }
      .progressbar li:before {
        width: 20px;
        height: 20px;
        content: '';
        counter-increment: '';
        line-height: 27px;
        border: 4px solid #fff;
        background-color: #d7d7d7;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        border-radius: 50%;
      }
      .progressbar li:after {
        width: 100%;
        height: 2px;
        content: '';
        position: absolute;
        background-color: #d7d7d7;
        top: 10px;
        left: -50%;
        z-index: -1;
      }
      .progressbar li:first-child:after {
        content: none;
        background-color: #d7d7d7;
      }
      .progressbar li.active {
        color: black;
      }
      .progressbar li.active:before {
        border: 4px solid #fff;
        background-color: #f49d42;
      }
      .progressbar li.active + li:after {
        background-color: #f49d42;
      }
    }

    h4 {
      font-size: 16px;
      font-weight: 700;
      text-align: center;
    }

    h6 {
      font-size: 16px;
      color: #7f8183;
      text-align: center;
      margin-top: 32px;
      margin-bottom: 16px;
    }

    .link-permissoes {
      text-align: center;
      margin-bottom: 46px;
      a {
        font-size: 18px;
      }
    }

    .list-pages {
      margin: 16px 32px;
      display: block;
      max-height: 250px;
      overflow-y: auto;

      ul {
        display: block;
        list-style: none;

        li {
          background-color: #efefef;
          padding: 16px;
          display: flex;
          align-items: center;
          margin-bottom: 1px;

          .imagem {
            height: 70px;
            width: 70px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            margin-right: 16px;
            border: 2px solid #969696;
          }

          .info-page {
            flex: 1;

            h3 {
              font-size: 20px;
              color: #000;
            }

            p {
              font-size: 14px;
              margin: 0px;
              color: #969696;
            }
          }

          .radio-button {
            .container {
              display: block;
              position: relative;
              padding-left: 35px;
              margin-bottom: 12px;
              cursor: pointer;
              font-size: 22px;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }

            .container input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;
            }

            .checkmark {
              position: absolute;
              top: 0;
              left: 0;
              height: 25px;
              width: 25px;
              background-color: #fff;
              border-radius: 50%;
              border: 3px solid #6d6d6d;
            }

            .container:hover input ~ .checkmark {
              background-color: #fff;
            }

            .container input:checked ~ .checkmark {
              background-color: #fff;
            }

            .checkmark:after {
              content: '';
              position: absolute;
              display: none;
            }

            .container input:checked ~ .checkmark:after {
              display: block;
            }

            .container .checkmark:after {
              top: 3px;
              left: 3px;
              width: 13px;
              height: 13px;
              border-radius: 50%;
              background: #f49d42;
            }
          }
        }
      }
    }
  }
`;
