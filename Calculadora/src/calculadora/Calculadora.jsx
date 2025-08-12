import React, { useState } from 'react';
import './BasicCalculator.css'; // Arquivo CSS que vamos criar

const BasicCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState(null);

  const calculate = (op) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Entrada inválida');
      return;
    }

    let res;
    switch (op) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number2 !== 0 ? number1 / number2 : 'Erro: divisão por zero';
        break;
      case '/':
        res = number1 * number2;
        break;
      default:
        res = '';
    }

    setResult(res);
    setOperation(op);
  };

  const clearAll = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setOperation(null);
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Calculadora Moderna</h2>
      <div className="input-group">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Primeiro número"
          className="calculator-input"
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Segundo número"
          className="calculator-input"
        />
      </div>
      <div className="buttons-group">
        <button onClick={() => calculate('+')} className="operation-btn add">+</button>
        <button onClick={() => calculate('-')} className="operation-btn subtract">-</button>
        <button onClick={() => calculate('*')} className="operation-btn multiply">×</button>
        <button onClick={() => calculate('/')} className="operation-btn divide">÷</button>
      </div>
      <div className="input-group">
        <input
          type="text"
          value={result}
          readOnly
          placeholder="Resultado"
          className="calculator-input result"
        />
      </div>
      <button onClick={clearAll} className="clear-btn">Limpar Tudo</button>
      {operation && (
        <p className="operation-display">
          Operação: {num1} {operation} {num2} = {result}
        </p>
      )}
    </div>
  );
};

export default BasicCalculator;