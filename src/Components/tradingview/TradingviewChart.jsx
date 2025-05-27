import React, { useEffect, useRef } from 'react';
import './TradingViewChart.css';

function TradingViewChart({ coin = 'BTC', currency = 'USD' }) {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;

    // Fallback to USDT if currency isn't supported
    const safeCurrency = currency.toUpperCase() === 'NGN' ? 'USDT' : currency.toUpperCase();
    const safeCoin = coin.toUpperCase();

    // Binance is used here for a broad range of support
    const symbol = `BINANCE:${safeCoin}${safeCurrency}`;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: '60',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: 'tradingview-chart',
    });

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(script);

    return () => {
      // Clean up on unmount
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [coin, currency]);

  return (
    <div className="chart-container">
      <div
        id="tradingview-chart"
        ref={containerRef}
        className="tradingview-chart"
      />
    </div>
  );
}

export default TradingViewChart;