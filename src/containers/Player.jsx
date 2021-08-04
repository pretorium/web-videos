import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import '../assets/styles/components/Player.scss';

function Player(props) {
  const {
    history,
    playing,
    getVideoSource,
    match: { params: { id } },
  } = props;
  const hasPlaying = Object.keys(playing).length > 0;

  useLayoutEffect(() => {
    getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button onClick={() => { history.goBack(); }} type='button'>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}

const mapStateToProps = ({ playing }) => ({ playing });
const mapDispatchToProps = { getVideoSource };

export default connect(mapStateToProps, mapDispatchToProps)(Player);
