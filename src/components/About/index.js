import React from 'react';

const About = ({ handleRouteChange }) => {

  return (
    <div className='about'>
      <h1>Introducing Motii</h1>

      <div className='border'>
        <h2>What?</h2>
        <p>Motii is a calendar that helps people motivate themselves when starting new habits.</p>
        <p><i>It’s not a habit forming,<br />it’s habit rewarding.</i></p>
      </div>

      <div className='border'>
        <h2>How?</h2>
        <p>Motii is very simple by design.</p>
        <ol>
          <li>Pick <b>1</b> habit you want to form.</li>
          <li>Type your habit into the HabitBox.</li>
          <li>Give yourself <b>1</b> month to make your habit.</li>
          <li>Everyday you do your habit cross off that day.</li>
          <li>When you cross a day off Motii will give you some positivity!</li>
          <li>When you don't cross off a day Motii don't feel too bad Motii will <b>motivation</b> you!</li>
          <li><b>When</b> you reach <b>1</b> month either continue with your habit or start a new one!</li>
          <b>Of course keep up your old habit!</b>
        </ol>  
      </div>

      <div className='border'>
        <h2>Which?</h2>
        There are 2 ways to use Motii.

        <h3>Local is Lekker</h3>
        <p>You probably noticed at the top of this page there are <b>Login</b> and <b>Sign up</b> buttons. If you rolled your eyes at yet another user login productivity app fret not! You can use Motii just fine without signing up for an account.</p>
        <p>All that happens is that Motii will store your data in local storage (see what I did there?). This means that if you clear your browser cache at any time you may lose your data on this page.</p>
        <p>P.S. <i>Lekker</i> is an Afrikaans (South African) word that means great or cool.</p>

        <h3>...Working title</h3>
        <p><span onClick={() => handleRouteChange('signup')}>Sign up</span> with Motii and keep your data accross all your devices. Anywhere you login you can see your habit information!</p>
      </div>

      <div className='border'>
        <h2>Who?</h2>
        My name is <a href='https://yougotwill.github.io' target='_blank' rel='noopener noreferrer'>William Grant</a>. I'm a South African living in Japan for the last 2 years. Currently I'm teaching English but I'd like to get back into Frontend development full-time. I'm a big fan of productivity apps and keeping myself motivated and focused on my goals. I enjoy listening to music, eating ramen and travelling around Japan.
      </div>

      <div className='border'>
        <h2>When?</h2>
        <p>The idea for Motii first came to me in March 2019. Since then it has had various iterations and forms as I improved my knowledge of Frontend development.</p>
        <p>This is the final product which I thought was worth sharing with the world!</p>
      </div>
    </div>
  )
};

export default About;
