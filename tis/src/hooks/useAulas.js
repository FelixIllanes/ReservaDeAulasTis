import { useEffect, useState } from 'react';
import { getAll, update, remove } from '../services/aulas';

export const useAulas = () => {
  const [aulas, setAulas] = useState([]);
  const [aula, setAula] = useState(null);

  useEffect(() => {
    getAll().then((data) => {
      if (data.length) {
        setAulas(data);
      } else {
        setAulas(['vacio']);
      }
    });
  }, []);

  const updateAula = (id, body) => {
        
/*         update(body, id);.then(data => {

          if(!data.codigo === 1){ */
            const newAulas = aulas.map((aula) => (aula.id === id ? body : aula));
            setAulas(newAulas);
/*           }

      }) */
  };

  const removeAula = (id) => {
    const newAulas = aulas.filter((aula) => aula.id !== id);
    setAulas(newAulas);
    remove(id);
  };

  const focusAula = (aula) => {
    console.log(aula);
    setAula(aula);
  };

  return { aulas, updateAula, removeAula, focusAula, aula };
};
