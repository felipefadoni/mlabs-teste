import styled from 'styled-components';

export const SocialStepUi = styled.li`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 250px;
  background-color: #f0f0f0;
  border: 2px dotted #cacbcc;
  margin-left: -2px;
  margin-top: -2px;
  position: relative;

  img {
    border: none;
    margin: 0px;
  }

  .circle {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 10px;
    color: #fff;
  }

  .facebook {
    background-color: #3b5998;
  }

  .instagram {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  .twitter {
    background-color: #00acee;
  }

  .pinterest {
    background-color: #c8232c;
  }

  .linkedin {
    background-color: #0e76a8;
  }

  .youtube {
    background-color: #c4302b;
  }

  .whatsapp {
    background-color: #25d366;
    background: linear-gradient(225deg, #63f780 0%, #25d366 100%);
  }

  .google_analytics {
    background-color: #ed750a;
  }

  .google_mybusiness {
    background-color: #4285f4;
    background: linear-gradient(225deg, #7ab1f9 0%, #4285f4 100%);
  }

  span {
    display: block;
    font-size: 17px;
    color: #535353;
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: -1px;
    font-weight: 400;
  }

  > button {
    padding: 8px 18px;
    color: #fff;
    background: linear-gradient(251.77deg, #de2e4d 0%, #f24462 98.95%);
    border-radius: 3px;
    border: #de2e4d solid 1px;
    font-weight: bold;
    font-size: 12px;
    opacity: 0.8;
    transition: all 0.2s;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  .help {
    position: absolute;
    top: 35px;
    right: 60px;

    button {
      color: #858789;
      width: 20px;
      height: 20px;
      background: transparent;
      border: 0px;
    }
  }
`;
