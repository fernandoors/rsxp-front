import React from 'react';

import { Faq, Icon } from './styles';
import { FaMoneyBillAlt, FaQuestionCircle, FaUserAlt } from 'react-icons/fa';


export default function Summary({ view, handleSetView }) {
  return (
    <Faq>
      <Icon onClick={() => handleSetView('Quem são?')} color={`${view === 'Quem são?'}`}>
        <FaQuestionCircle />
        <label>
          Quem são?
        </label>
      </Icon>
      <Icon onClick={() => handleSetView('O que precisa?')} color={`${view === 'O que precisa?'}`}>
        <FaUserAlt />
        <label>
          O que precisa?
        </label>
      </Icon>
      <Icon onClick={() => handleSetView('O que ganha?')} color={`${view === 'O que ganha?'}`}>
        <FaMoneyBillAlt />
        <label>
          O que ganha?
        </label>
      </Icon>
    </Faq>
  );
}
