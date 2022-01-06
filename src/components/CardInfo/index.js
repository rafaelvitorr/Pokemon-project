import React from 'react'
import TabsInfo from './TabsInfo';
import { useSelector, useDispatch } from "react-redux";
import {BsExclamationSquareFill} from "react-icons/bs";

import notData from '../../assets/img/undraw_no_data_re_kwbl.svg';
import { setPokedexList,removePokemonList } from '../../store/pokedex';
import { ContainerInfo } from './styles';
export default function CardInfo() {
   const dispatch = useDispatch();
   const { pokemons: { pokemonSearch }, pokedex: { pokedexList } } = useSelector(state => state);
   const { id = 0, name = 'Pokemon not found', weight = 0, height = 0, types = [], sprites = { other: { dream_world: { front_default: notData } } } } = pokemonSearch;
   const { other: { dream_world: { front_default } } } = sprites;
   const existsInPokedem = pokedexList.filter(pokemon => pokemon.id === id)[0] || false;

   const formatHectogramsInKg = (hectograma) => {
      if (hectograma === 0) {
         return 0;
      }
      return (hectograma * 100) / 1000;
   }
   const formatDecimetresInMeters = (Decimetro) => {
      if (Decimetro === 0) {
         return 0;
      }
      return Decimetro / 10;
   }
   // if (0 === 0) { return (<></>) }
   return (
      <ContainerInfo>
         <main>
            {existsInPokedem && (<span><BsExclamationSquareFill />Capturado</span>)}
            <img src={front_default} alt='imagen pokemon' />
         </main>
         <main>
            <span>National № <b>{id}</b></span>
            <h1 className='capitalized'>{name}</h1>
            <div className='flexRow'>
               <div className='infoSubtitle noborder'>
                  <span className='fontBold'>{formatHectogramsInKg(weight)} kg</span>
                  <span>Peso</span>
               </div>
               <div className='infoSubtitle'>
                  <span className='fontBold'>{formatDecimetresInMeters(height)} m</span>
                  <span>Altura</span>
               </div>
               <div className='infoSubtitle'>
                  <div>
                     {
                        types.map((type, index) => {
                           return (
                              <span key={index} className='fontBold'>{type.type.name}</span>
                           )
                        })
                     }
                  </div>
                  <span>Tipo</span>
               </div>
            </div>
            <TabsInfo pokemonData={pokemonSearch} />
            <hr />
            <div className="buttonsBox">
               {existsInPokedem? (
                  <button id='removePok' className='buttons' onClick={() => dispatch(removePokemonList(pokemonSearch))}>Libertar Pokemon</button>
               ) : (
                  <button id='setPokedex' className='buttons' onClick={() => dispatch(setPokedexList(pokemonSearch))}>Capturar Pokemon</button>
               )}
            </div>
         </main>
      </ContainerInfo>
   )
}
