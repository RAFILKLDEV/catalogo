import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Chart from './components/Chart/Chart';
import produtos from './constants';

function App() {
  
  const storageCarrinho = localStorage.getItem('carrinho')
  
  const [carrinho, setCarrinho] = useState(JSON.parse(storageCarrinho) || [])
  const [menuAberto, setMenu] = useState(false)

  const handleAppClick = (event) => {
    if (menuAberto && event.target.className !== 'chartMenu') {
      setMenu(false);
    }
  }

  const toggleChart = () => {
    setMenu(!menuAberto);
  }

  const updateStorage = (novoCarrinho) => {
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho))
  }

  const updateCarrinho = (id) => {
    let novoCarrinho = [...carrinho];
    if (novoCarrinho.indexOf(id) >= 0) {
      novoCarrinho = novoCarrinho.filter(it => it !== id);
    } else {
      novoCarrinho.push(id);
    }
    setCarrinho(novoCarrinho)
    updateStorage(novoCarrinho)
  }

  return (
    <div className={menuAberto ? "App App--MenuActive" : "App"} onClick={handleAppClick}>
      <div className='App-Container'>
        <div className='Header-App'>
          <img src='https://images.vexels.com/media/users/3/131778/isolated/preview/2f58b79f41ddd2cf40e188c533a7f751-pizza-logotipo-modelo.png'></img>
          <div id='chart'>{carrinho.length}</div>
          <img id='chart' onClick={toggleChart}
          src='https://cdn-0.emojis.wiki/emoji-pics/whatsapp/shopping-cart-whatsapp.png'></img>
        </div>
        <div className='Menu'>
          <button className='Button'>Recheio</button>
          <button className='Button'>Massa</button>
          <button className='Button'>Tamanho</button>
          <button className='Button'>Ingredientes</button>
        </div>
        <Chart className="chartMenu" chartzim={carrinho}/>
        <div className='Catalog'>
          {produtos.map(produto => 
          <Card key={produto.src} 
          carrinho={carrinho}
          produto={produto} 
          updateCarrinho={updateCarrinho}>   
          </Card>)}
        </div>
      </div>
    </div>
  );
}

export default App;
