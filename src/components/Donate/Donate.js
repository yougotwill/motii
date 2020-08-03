import React from 'react';
import Svg from 'react-inlinesvg';

import githubSVG from '../../resources/github.svg';
import twitterSVG from '../../resources/twitter.svg';

const Donate = () => {
  return (
    <div className='donate'>
      <h2>Hey there <span role='img' aria-label='Waving Hand'>👋</span></h2>
      <h3>Want to make a donation? </h3>
      <a className='donate-button' href='https://www.paypal.me/yougotwill' target='_blank' rel='noopener noreferrer'><button>Donate via PayPal</button></a>
      <br />
      <p>No cash but want to show your support? Send me a tweet!</p>
      <a className='social-button' href='https://twitter.com/yougotwill' target='_blank' rel='noopener noreferrer'><button><Svg src={twitterSVG} alt='twitter-logo' /></button></a>
      <p>Want to learn more about the developer? See my Github!</p>
      <a className='social-button' href='https://github.com/yougotwill' target='_blank' rel='noopener noreferrer'><button><Svg src={githubSVG} alt='github-logo' /></button></a>
    </div>
  );
};

export default Donate;
