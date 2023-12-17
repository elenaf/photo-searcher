import React, { useCallback, useState, useEffect } from 'react';
import styles from './App.module.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { api } from '../../api';

function App() {
  const buttonTitle = 'Search';

  const [query, setQuery] = useState('');
  const [value, setValue] = useState('Russia');
  const [cards, setCards] = useState([]);

  /* useEffect( () => {
    api.search(value).then(array => {
      setCards(array);
    });
  }, [value]); */

  const cbClick = useCallback(() => {
    setQuery(value);
   
    
  }, [value]);

  useEffect(() => {
    api.search(value).then(array => {
      setCards(array);
    });
  }, [query]);

  return (
    <div className={styles.App}>
      <div className={styles.AppContent}>
        <div className={styles.AppSearch}>
          <Input value={value} onChange={setValue} />
          <Button title={buttonTitle} onClick={cbClick} />
        </div>
        <div className={styles.AppCards}>
          {
            cards.map(card => (<Card key={card.id} card={card} />))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
