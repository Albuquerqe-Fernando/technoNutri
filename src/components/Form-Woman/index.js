import React, { useContext, useState } from 'react';
import PropType from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './styled.css';
import validator from '../../validator/validator';
import calcHours from '../../functions/calcHours';
import { hours } from '../../util/hours';
import { sports } from '../../util/sports';
import actions from '../../util/actions';
import { Context } from '../../util/context';

const Woman = function ({ sex }) {
  const objective = 'slim-down';
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);

  const [name, setNome] = useState('');
  const [age, setIdade] = useState(0);
  const [Weight, setPeso] = useState(0);
  const [height, setAltura] = useState(0);
  /*   const [cintura, setCintura] = useState(0);
  const [quadril, setQuadril] = useState(0);
  const [pescoco, setPescoco] = useState(0); */
  const [acordar, setAcordar] = useState('5');
  const [dormir, setDormir] = useState('22');
  const [calorieDay, setCalorieDay] = useState(250);
  const [calorietraining, setCalorieTraining] = useState(0);

  const sleep = calcHours(acordar, dormir);
  const calorie = Number(calorieDay) + Number(calorietraining);

  const data = {
    name,
    age,
    Weight,
    height,
    sex,
    calorie,
    sleep,
  };
  //console.log(calorie, calorieDay, calorietraining);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validator(data);
    if (!isValid) return;

    dispatch({ type: actions.OBJECTIVE, objective });
    dispatch({ type: actions.DATA_CALC, data });

    navigate('/result');
  };

  return (
    <div className="conteiner-woman">
      <main>
        <form onSubmit={handleSubmit}>
          <section className="inputs">
            <label htmlFor="nome">
              <h3>Nome</h3>
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
            <label htmlFor="idade">
              <h3>Idade</h3>
              <input
                type="number"
                placeholder="Idade"
                name="idade"
                onChange={(e) => setIdade(e.target.value)}
              />
            </label>
            <label htmlFor="peso">
              <h3>Peso</h3>
              <input
                type="number"
                placeholder="Peso"
                name="peso"
                onChange={(e) => setPeso(e.target.value)}
              />
            </label>
            <label htmlFor="altura">
              <h3>Altura</h3>
              <input
                type="number"
                placeholder="Altura"
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
            <label htmlFor="quadril">
              <h3>Quadril</h3>
              <input
                type="number"
                placeholder="Quadril"
                name="quadril"
                onChange={(e) => setQuadril(e.target.value)}
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
          <section className="average-calorie">
            <h1>Como é seu dia?</h1>
            <label htmlFor="calorie-work">
              <h4>Como é seu trabalho?</h4>
              <select
                name="calorie-work"
                value={calorieDay}
                onChange={(e) => setCalorieDay(e.target.value)}
              >
                <option value={250} key={1}>
                  Baixo esforço físico
                </option>
                <option value={500} key={2}>
                  Medio esforço físico
                </option>
                <option value={800} key={3}>
                  Alto esforço físico
                </option>
              </select>
            </label>
            <label htmlFor="calorie-training">
              <h4>Você pratica algum esporte?</h4>
              <select
                name="calorie-training"
                value={calorietraining}
                onChange={(e) => setCalorieTraining(e.target.value)}
              >
                {sports}
              </select>
            </label>
          </section>
          <section className="conteiner-sleep">
            <h2>Como esta seu Sono? </h2>
            <h4>Que horas aproximadamente você acorda</h4>

            <select
              value={acordar}
              onChange={(e) => setAcordar(e.target.value)}
            >
              {hours}
            </select>
            <h4>Que horas aproximadamente você dorme</h4>

            <select value={dormir} onChange={(e) => setDormir(e.target.value)}>
              {hours}
            </select>
          </section>
          <button type="submit">Calcular</button>
        </form>
      </main>
    </div>
  );
};

Woman.propTypes = {
  sex: PropType.string.isRequired,
};
export default Woman;
