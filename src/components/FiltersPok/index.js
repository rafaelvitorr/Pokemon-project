import React from 'react';

import {FiltersPokContainer,TabContainer,ContainerFilters} from './styles';
import InputSearch from '../InputSearch';

export default function FiltersPok() {
   return (
         <FiltersPokContainer>
            <ContainerFilters>
               <div>
                  <InputSearch/>
               </div>
               <div className='boxDescription'>
                  Realize a busca por Pokémon pelo nome ou usando o número do Pokédex Nacional.
               </div>
            </ContainerFilters>
            <TabContainer>
               Mostrar pokedex
            </TabContainer>
         </FiltersPokContainer>
   )
}
