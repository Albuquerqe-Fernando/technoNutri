import React, { useContext, useEffect, useState } from 'react';
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

const Result = function () {
  const [loandig, setloading] = useState(true);
  const {
    state: { data: data, objective, isValid },
    dispatch,
  } = useContext(Context);
  const userDta = userData(data, objective, isValid);

  const { carbo, proteins, fat, Water, sleep } = macros(userDta[0], userDta[1]);
  console.log(carbo, proteins);

  const mealsAmount = amountMeals(sleep);
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

  return (
    <>
      <Header />
      {loandig ? <Loandig /> : ''}
      <main className="conteiner_result">
        <div className="result">
          <div className="anuncio_result" />
          <div className="title_result">
            <h1>Vamos criar seu diario alimentar </h1>
          </div>
          <section className="data_result">
            <h2>Nome: {userDta[0].name}</h2>
            <h2>Idade: {userDta[0].age} </h2>
            <h2>Altura: {userDta[0].height}</h2>
            <h2>Peso: {userDta[0].weight}Kg</h2>
          </section>
          <div className="anuncio_result" />
          <WaterComponemt Water={Water} />
          <div className="anuncio_result" />
          <SleepComponemt sleep={sleep} />
          <div className="anuncio_result" />
          {!loandig && (
            <SelectDiet
              carbo={carbo}
              proteins={proteins}
              fat={fat}
              mealsAmount={mealsAmount}
            />
          )}
          <div className="anuncio_result" />
          <button
            className="button_download"
            type="button"
            onClick={handleDownload}
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
