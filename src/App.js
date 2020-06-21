import React, { useState } from 'react';
import MainHeader from './components/ProjetoBase/MainHeader';
import NumberInput from './components/ProjetoBase/NumberInput';
import MonthCells from './components/ProjetoBase/MonthCells';

export default function App() {
  const [initialValue, setInitialValue] = useState(1000);
  const [monthlyInterest, setMonthlyInterest] = useState(0.5);
  const [monthQuantity, setMonthQuantity] = useState(1);

  return (
    <div className="container">
      <MainHeader />
      <div className="row">
        <NumberInput
          getInputValue={(value) => { setInitialValue(value) }}
          name={"Montante Inicial:"}
          currentValue={initialValue}
          stepValue={1}
        />
        <NumberInput
          getInputValue={(value) => { setMonthlyInterest(value) }}
          name={"Taxa de Juros Mensal:"}
          currentValue={monthlyInterest}
          stepValue={0.1}
        />
        <NumberInput
          getInputValue={(value) => { setMonthQuantity(value) }}
          name={"Período (Meses):"}
          currentValue={monthQuantity}
          stepValue={1}
        />
      </div>
      <div className="row">
        <MonthCells
          initialValue={initialValue}
          monthlyInterest={monthlyInterest}
          monthQuantity={monthQuantity}
        />
      </div>
    </div>
  );
}
