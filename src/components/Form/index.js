import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';

import './styled.css';

import validator from '../../validator/validator';
import { hours } from '../../util/hours';
import { sports } from '../../util/sports';
import calcHours from '../../functions/calcHours';
import { Context } from '../../util/context';
import actions from '../../util/actions';
import { Anuncio300x250, Anuncio468x60 } from '../Anuncio';
import { Anuncio320x50 } from '../Anuncio';

const Form = function ({ sex, objective }) {
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);

  const [name, setNome] = useState('');
  const [age, setIdade] = useState(0);
  const [weight, setPeso] = useState(0);
  const [height, setAltura] = useState(0);
  //const [waist, setCintura] = useState(0);
  // const [neck, setPescoco] = useState(0);
  const [acordar, setAcordar] = useState(5);
  const [dormir, setDormir] = useState(22);
  const [calorieDay, setCalorieDay] = useState(350);
  const [calorietraining, setCalorieTraining] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sleep = calcHours(acordar, dormir);

  const calorie = Number(calorieDay) + Number(calorietraining);
  const data = {
    name,
    age,
    weight,
    height,
    sex,
    calorie,
    sleep,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validator(data);
    if (!isValid) return;

    dispatch({ type: actions.OBJECTIVE, objective });
    dispatch({ type: actions.DATA_CALC, data, isValid: true });
    const userData = [data, objective];
    sessionStorage.setItem('usedata', JSON.stringify(userData));

    navigate('/result');
  };

  return (
    <div className="conteiner_form">
      <Anuncio300x250 />
      <h1 className="title_form">Alguns dados para começarmos</h1>
      <div className="conteiner_data">
        <main>
          <form onSubmit={handleSubmit}>
            <section className="inputs">
              <label htmlFor="nome">
                <h3>Nome</h3>
                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Seu Nome"
                  name="nome"
                  onChange={(e) => setNome(e.target.value)}
                />
              </label>
              <label htmlFor="idade">
                <h3>Idade</h3>
                <input
                  autoComplete="off"
                  type="number"
                  placeholder="Idade 99"
                  name="idade"
                  onChange={(e) => setIdade(e.target.value)}
                />
              </label>
              <label htmlFor="peso">
                <h3>Peso</h3>
                <input
                  autoComplete="off"
                  type="number"
                  placeholder="Peso: ex= 100"
                  name="peso"
                  onChange={(e) => setPeso(e.target.value)}
                />
              </label>
              <label htmlFor="altura">
                <h3>Altura</h3>
                <input
                  autoComplete="off"
                  type="number"
                  placeholder="Altura: ex= 175"
                  name="altura"
                  onChange={(e) => setAltura(e.target.value)}
                />
              </label>

              {/* <label htmlFor="cintura">
              <h3>Cintura</h3>
              <input
                type="number"
                placeholder="Cintura"
                name="cintura"
                onChange={(e) => setCintura(e.target.value)}
              />
            </label>

            <label htmlFor="pescoco">
              <h3>Pescoço</h3>
              <input
                type="number"
                placeholder="Pescoço"
                name="pescoco"
                onChange={(e) => setPescoco(e.target.value)}
              />
            </label> */}
            </section>
            <Anuncio320x50 />
            <section className="average_calorie">
              <h1>Como é seu dia?</h1>
              <label htmlFor="calorie-work">
                <h4>Como é seu trabalho?</h4>
                <select
                  name="calorie-work"
                  value={calorieDay}
                  onChange={(e) => setCalorieDay(e.target.value)}
                >
                  <option value={350} key={1}>
                    Baixo esforço físico
                  </option>
                  <option value={600} key={2}>
                    Medio esforço físico
                  </option>
                  <option value={900} key={3}>
                    Alto esforço físico
                  </option>
                </select>
              </label>
              <Anuncio468x60 />
              <label htmlFor="calorie-training">
                <h4>Você pratica algum Atividade física ?</h4>
                <select
                  name="calorie-training"
                  value={calorietraining}
                  onChange={(e) => setCalorieTraining(e.target.value)}
                >
                  {sports}
                </select>
              </label>
            </section>

            <section className="conteiner_sleep">
              <h2>Como esta seu Sono? </h2>
              <Anuncio320x50 />
              <h4>Que horas aproximadamente você acorda</h4>

              <select
                value={acordar}
                onChange={(e) => setAcordar(e.target.value)}
              >
                {hours}
              </select>
              <h4>Que horas aproximadamente você dorme</h4>

              <select
                value={dormir}
                onChange={(e) => setDormir(e.target.value)}
              >
                {hours}
              </select>
            </section>

            <button type="submit">Vamos lá!!</button>
          </form>
        </main>
      </div>
    </div>
  );
};
Form.propTypes = {
  sex: PropType.string.isRequired,
  objective: PropType.string.isRequired,
};

export default Form;
