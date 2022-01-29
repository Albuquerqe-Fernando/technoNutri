import React, { useContext, useEffect, useMemo, useState } from 'react';
import PropType from 'prop-types';

import './styled.css';
import { optionCarbo } from '../../util/optionCarbo';
import { optionproteins } from '../../util/optionprotens';
import { optionSalad } from '../../util/optionSlad';
import { Context } from '../../util/context';
import {
  CalcCarbo,
  CalcEggs,
  CalcProteins,
  CalcSalad,
} from '../../functions/calcFoods';
import { optionVegetables } from '../../util/optionVegetables';
import {
  handlecarbo,
  handleProtein,
  handleSalad,
  handlevegetable,
} from '../../functions/handles';
import { mealsDownload } from '../../functions/mealsDownload';
import userData from '../../functions/userData';

const DivSelect = ({ snack }) => {
  const [carbo, setCarbo] = useState({});
  const [protein, setProtein] = useState({});
  const [salad, setsalad] = useState({});
  const [vegetables, setsaVegetables] = useState({});
  const [ingestCarbo, setIngestCarbo] = useState(0);
  const [ingestProteins, setIngestProteins] = useState(0);
  const [ingestSala, setIngestSala] = useState(0);
  const [ingestVegetables, setIngestVegetables] = useState(0);

  const {
    state: { data: data, macrosDivision, objective, isValid },
  } = useContext(Context);
  const useData = userData(data, objective, isValid);

  const { divisionCarbo, divisionProteins } = macrosDivision;

  const [{ weight }] = useData;

  const consumiCarbo = useMemo(
    () => CalcCarbo(carbo.value, vegetables.value, divisionCarbo),
    [carbo, vegetables, divisionCarbo],
  );

  const consumiProtein = useMemo(() => {
    if (protein.text === 'ovos') {
      return CalcEggs(protein.value, divisionProteins);
    } else {
      return CalcProteins(protein.value, divisionProteins);
    }
  }, [protein, divisionProteins]);

  const consumiSalad = useMemo(
    () => CalcSalad(salad.value, weight),
    [salad, weight],
  );

  useEffect(() => {
    if (consumiCarbo[0] === Infinity) {
      setIngestCarbo(0);
    } else {
      setIngestCarbo(consumiCarbo[0]);
    }

    setIngestVegetables(consumiCarbo[1]);
  }, [consumiCarbo]);

  useEffect(() => {
    const consumiEggs = () => {
      if (protein.text === 'ovos') {
        return `${consumiProtein[0]} UN + ${consumiProtein[1]}Claras`;
      }
    };
    if (consumiProtein === Infinity) {
      setIngestProteins(0);
    } else if (protein.text === 'ovos') {
      setIngestProteins(consumiEggs);
    } else {
      setIngestProteins(consumiProtein);
    }
  }, [consumiProtein, protein]);

  useEffect(() => {
    setIngestSala(consumiSalad);
  }, [consumiSalad]);

  const proteins = useMemo(() => {
    return { value: ingestProteins, text: protein.text };
  }, [ingestProteins, protein]);

  const carboDownload = useMemo(() => {
    return { value: ingestCarbo, text: carbo.text };
  }, [ingestCarbo, carbo]);

  const vegetablesDownload = useMemo(() => {
    return { value: ingestVegetables, text: vegetables.text };
  }, [ingestVegetables, vegetables]);

  const saladDownload = useMemo(() => {
    return { value: ingestSala, text: salad.text };
  }, [ingestSala, salad]);

  const obj = useMemo(() => {
    return {
      meals: snack,
      proteins,
      carboDownload,
      vegetablesDownload,
      saladDownload,
    };
  }, [snack, proteins, carboDownload, vegetablesDownload, saladDownload]);

  useEffect(() => {
    mealsDownload.unshift(obj);
  }, [obj]);

  return (
    <div className="conteinor_divs">
      <div className="h1_div">Sua {snack} refeição será</div>
      <div className="consteiner_selects">
        <div className="meals_div">
          <select
            className="select_meals"
            onChange={(e) => handlecarbo(e, setCarbo)}
          >
            {optionCarbo}
          </select>
          {<p>{ingestCarbo} g</p>}
        </div>
        <div className="meals_div">
          <select
            className="select_meals"
            onChange={(e) => handleProtein(e, setProtein)}
          >
            {optionproteins}
          </select>
          <p>
            {ingestProteins} {protein.text === 'ovos' ? '' : 'g'}
          </p>
        </div>
        <div className="meals_div">
          <select
            className="select_meals"
            onChange={(e) => handlevegetable(e, setsaVegetables)}
          >
            {optionVegetables}
          </select>
          <p>{ingestVegetables} g</p>
        </div>
        <div className="meals_div">
          <select
            className="select_meals"
            onChange={(e) => handleSalad(e, setsalad)}
          >
            {optionSalad}
          </select>
          <p>{ingestSala} g</p>
        </div>
      </div>
    </div>
  );
};

DivSelect.propTypes = {
  snack: PropType.string.isRequired,
};

export default DivSelect;
