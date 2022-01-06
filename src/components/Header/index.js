import React from 'react';
import Switch from 'react-switch';
import { useSelector,useDispatch } from "react-redux";
import { toogleTheme } from '../../store/global';

import {HeaderContainer} from './styles';
import logoPokemon from "../../assets/img/Pokémon-Com-Fundo-Transparente-1280x720.png";

const Header: React.FC = () => {
   const dispatch = useDispatch();
   const {theme:{title, colors}} = useSelector((state) => state.global);
   return (
      <HeaderContainer>
         <img src={logoPokemon} alt="logo" height="80"/>
         <Switch
            onChange={() => {dispatch(toogleTheme())}}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={colors.background}
            onColor={colors.background}
         />
      </HeaderContainer>
   )
}

export default Header;
