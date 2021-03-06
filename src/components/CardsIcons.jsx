import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import notFavoriteIcon from '../icons/appIcons/favoriteDisabled.png';
import favoriteIcon from '../icons/appIcons/favoriteEnable.png';
import isDoneIcon from '../icons/appIcons/checkEnable.png';
import notDoneIcon from '../icons/appIcons/checkDisabled.png';

function CardsIcons(props) {
  const { isFavorite, isDone } = props;
  return (
    <Container className="icons-wrapper">
      <img
        className="check-icon"
        src={ isDone ? isDoneIcon : notDoneIcon }
        alt="Check Icon"
      />
      <img
        className="fav-icon"
        src={ isFavorite ? favoriteIcon : notFavoriteIcon }
        alt="Favorite Icon"
      />
    </Container>
  );
}

export default CardsIcons;

const Container = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
  position: static;
  box-sizing: border-box;
  margin-top: 5px;

  /* .icons-wrapper {
  } */

  .fav-icon {
    width: 14px;
    height: 12px;
    /* margin-left: 72px;
    margin-bottom: 5px; */
  }

  .check-icon {
    width: 14px;
    height: 12px;
  }

`;

CardsIcons.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  isDone: PropTypes.bool.isRequired,
};
