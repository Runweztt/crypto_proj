import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Main.scss';

function CryptoConverter() {
  const [crypto, setCrypto] = useState('bitcoin');
  const [currency, setCurrency] = useState('usd');
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(null);

  const cryptoList = ['bitcoin', 'ethereum', 'litecoin', 'dogecoin'];
  const currencyList = ['usd', 'eur', 'gbp', 'ngn', 'jpy'];

  useEffect(() => {
    if (!amount) return;

    axios
      .get(`https://api.coingecko.com/api/v3/simple/price`, {
        params: {
          ids: crypto,
          vs_currencies: currency,
        },
      })
      .then(res => {
        const rate = res.data[crypto][currency];
        setConverted((amount * rate).toFixed(2));
      })
      .catch(err => {
        console.error(err);
      });
  }, [crypto, currency, amount]);

  return (
    <section className="converter__wrap">
      <h2>Crypto Converter</h2>

      <form className="converter__form" onSubmit={(e) => e.preventDefault()}>
        <select value={crypto} onChange={(e) => setCrypto(e.target.value)}>
          {cryptoList.map((coin) => (
            <option key={coin} value={coin}>{coin.toUpperCase()}</option>
          ))}
        </select>

        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencyList.map((cur) => (
            <option key={cur} value={cur}>{cur.toUpperCase()}</option>
          ))}
        </select>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />

        <button type="submit">Convert</button>
      </form>

      {converted !== null && (
        <div className="converter__result">
          {amount} {crypto.toUpperCase()} = {converted} {currency.toUpperCase()}
        </div>
      )}
    </section>
  );
}

export default CryptoConverter;
