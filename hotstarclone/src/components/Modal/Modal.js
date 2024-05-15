import { FavoritesContext } from '../MovieList/FavoritesContext.js';
import React, { useState,useContext } from 'react';
import * as Elements from '../Modal/Modal.Style.jsx';
import ReactDom from 'react-dom'

const Modal = ({open , close}) => {
    const { favoritesCount, favoritemovies } = useContext(FavoritesContext);
    
    if(open) {
      return ReactDom.createPortal(
        <Elements.BackGround>
        <Elements.Modal>
        <span onClick={close}>&times;</span>
        <h2>Favorites</h2>
        <Elements.ModalContent>
          {favoritemovies.map((movie, index) => (
            <div key={index}>
              <Elements.Image>
                <img src={movie.posterURL} alt="" />
              </Elements.Image>
            </div>
          ))}
        </Elements.ModalContent>
      </Elements.Modal>
      </Elements.BackGround>,
      document.getElementById('portal')
      );
    }
};
export default Modal;