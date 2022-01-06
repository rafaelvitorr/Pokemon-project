import React from 'react';
import {useState} from 'react';
import { useDispatch} from 'react-redux';
import {BsSearch} from 'react-icons/bs';

import {ContainerSearch, InputSearchStyle, ButtonInputSearch} from './styles';
import {asyncGetPokemon} from '../../store/pokemons';

export default function InputSearch() {
   const dispatch = useDispatch();
   const [valueInput, setvalueInput] = useState('');

   const handleSendValue = () => {
      if(valueInput !== ''){
         dispatch(asyncGetPokemon(valueInput));
      }
      return;
   }
   
   return (
      <>
         <label style={{fontSize:'1.4rem'}}>Nome ou número</label>
         <ContainerSearch >
            <InputSearchStyle placeholder="Encontre um pokémon" onKeyDown={(e)=>{if(e.key === 'Enter'){handleSendValue();}}} type="text" value={valueInput} onChange={(e)=>{setvalueInput(e.target.value)}}/>
            <ButtonInputSearch className="button primary" onClick={handleSendValue}><BsSearch size={'1.5rem'}/></ButtonInputSearch>
         </ContainerSearch>
      </>
   )
}