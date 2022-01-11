import React from 'react';
import PropType from 'prop-types';

import './styled.css';

const Modal = ({ setModal }) => {
  const handleClick = () => {
    return setModal(false);
  };
  return (
    <div className="conteiner_modal">
      <div className="modal">
        <h1>
          Esta ferramenta não <br />
          substitui um nutricionista ou invalida uma prescrição pelo mesmo
        </h1>
        <button type="button" onClick={handleClick} className="btn">
          OK
        </button>
      </div>
    </div>
  );
};
Modal.propTypes = {
  setModal: PropType.func.isRequired,
};

export default Modal;
