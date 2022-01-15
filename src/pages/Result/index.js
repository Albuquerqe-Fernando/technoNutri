import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../util/context';

import { GrDocumentPdf } from 'react-icons/gr';

import './styled.css';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import macros from '../../functions/macros';
import WaterComponemt from '../../components/WaterComponemt';
import SleepComponemt from '../../components/SleepComponemt';
import SelectDiet from '../../components/SelectDiet/inex';
import amountMeals from '../../functions/amountMeals';
import actions from '../../util/actions';
import { handleDownload } from '../../functions/handles';
import userData from '../../functions/userData';
import Loandig from '../../components/Loandig';
import { Anuncio320x50, Anuncio468x60 } from '../../components/Anuncio';

const Result = function () {
  const navegate = useNavigate();
  const [loandig, setloading] = useState(true);
  const {
    state: { data: data, objective, isValid },
    dispatch,
  } = useContext(Context);
  const userDta = userData(data, objective, isValid);

  const { carbo, proteins, fat, Water, sleep } = macros(userDta[0], userDta[1]);

  const mealsAmount = amountMeals(sleep);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 6000);
  }, []);

  useEffect(() => {
    const divisionCarbo = Math.round(carbo / mealsAmount);
    const divisionProteins = Math.round(proteins / mealsAmount);
    const divisionFat = Math.round(fat / mealsAmount);

    const macrosDivision = { divisionCarbo, divisionProteins, divisionFat };
    dispatch({ type: actions.DIVISION_MACROS, macrosDivision });
  }, [mealsAmount, carbo, proteins, fat, dispatch]);
  const handleClick = () => {
    handleDownload(navegate);
  };

  return (
    <>
      <Header />
      {loandig ? <Loandig /> : ''}
      <main className="conteiner_result">
        <div className="result">
          <div className="title_result">
            <h1>Vamos criar seu diario alimentar </h1>
          </div>
          <section className="data_result">
            <h2>
              Nome: <p>{userDta[0].name}</p>
            </h2>
            <h2>Idade: {userDta[0].age} </h2>
            <h2>Altura: {userDta[0].height}</h2>
            <h2>Peso: {userDta[0].weight}Kg</h2>
          </section>
          <Anuncio320x50 />
          <WaterComponemt Water={Water} />
          <Anuncio468x60 />
          <SleepComponemt sleep={sleep} />
          {!loandig && (
            <SelectDiet
              carbo={carbo}
              proteins={proteins}
              fat={fat}
              mealsAmount={mealsAmount}
            />
          )}
          <Anuncio468x60 />
          <button
            className="button_download"
            type="button"
            onClick={handleClick}
          >
            <h1>DOWNLOAD</h1>
            <GrDocumentPdf color="#4b0082" className="icon" />
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Result;
