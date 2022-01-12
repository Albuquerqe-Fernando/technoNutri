import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';

import './styled.css';

//import FormWoman from '../Form-Woman';
import Form from '../Form';
import Modal from '../Modal';

const Radios = function ({ objective }) {
  const [sex, setsex] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setModal(true);
    }, 2000);
  }, []);

  function hendelClick(e) {
    const sex = e.target.value;
    setsex(sex);
  }

  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <section className="conteiner-form">
        <div className="form">
          <h1>Diario alimentar para ?</h1>
          <div className="radios">
            <label htmlFor="sex">
              <h3>Homen:</h3>
              <input
                type="radio"
                name="sex"
                value="man"
                onClick={hendelClick}
              />
            </label>

            <label htmlFor="sex">
              <h3>Mulher:</h3>
              <input
                type="radio"
                name="sex"
                value="woman"
                onClick={hendelClick}
              />
            </label>
          </div>
        </div>
      </section>
      <Form sex={sex} objective={objective} />
      {/*       {woman && <FormWoman sex={sex} />}
       */}{' '}
    </>
  );
};
Radios.propTypes = {
  objective: PropType.string.isRequired,
};

export default Radios;
