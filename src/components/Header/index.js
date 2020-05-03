import React from 'react';

import { RiArrowDownSLine } from 'react-icons/ri';
import { BsFillGearFill } from 'react-icons/bs';
import { AiOutlineDashboard, AiFillPieChart } from 'react-icons/ai';
import { MdShowChart } from 'react-icons/md';
import {
  FaRegCalendarPlus,
  FaRegCalendarAlt,
  FaInbox,
  FaRegNewspaper,
  FaNetworkWired,
} from 'react-icons/fa';

import { Row, Col } from 'react-bootstrap';

import { TopHeader, HeaderUi } from './styles';

import logoMlabs from '../../assets/logo-mlabs.png';

const Header = () => {
  return (
    <>
      <TopHeader fluid>
        <Row className="align-items-center">
          <Col className="clock">
            <h4>23/09/2019 10:19:56</h4>
          </Col>
          <Col className="account">
            <div>
              <span>Minha Conta</span>
              <RiArrowDownSLine size={24} />
            </div>
          </Col>
          <Col className="setting">
            <BsFillGearFill size={20} />
          </Col>
        </Row>
      </TopHeader>
      <HeaderUi fluid>
        <Row className="align-items-center">
          <Col xs={12} sm={12} lg={2} xl={2}>
            <img src={logoMlabs} alt="Logo MLABS" />
          </Col>
          <Col xs={12} sm={12} lg={12} xl={10}>
            <div className="opcoes">
              <ul>
                <li className="active">
                  <a href="41">
                    <AiOutlineDashboard size={32} />
                    <span>DASHBOARD</span>
                  </a>
                </li>
                <li>
                  <a href="41">
                    <FaRegCalendarPlus size={32} />
                    <span>AGENDAR POST</span>
                    <small>NOVO</small>
                  </a>
                </li>
                <li>
                  <a href="41">
                    <FaRegCalendarAlt size={32} />
                    <span>CALENDÁRIO</span>
                  </a>
                </li>
                <li>
                  <a href="41">
                    <FaInbox size={32} />
                    <span>INBOX</span>
                  </a>
                </li>
                <li>
                  <a href="41">
                    <FaRegNewspaper size={32} />
                    <span>FEED</span>
                  </a>
                </li>
                <li>
                  <a href="41">
                    <FaNetworkWired size={32} />
                    <span>WORKFLOW</span>
                  </a>
                </li>
                <li>
                  <a href="41">
                    <MdShowChart size={32} />
                    <span>ACOMPANHAMENTO</span>
                  </a>
                </li>
                <li>
                  <a href="41">
                    <AiFillPieChart size={32} />
                    <span>RELATÓRIOS</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </HeaderUi>
    </>
  );
};

export default Header;
