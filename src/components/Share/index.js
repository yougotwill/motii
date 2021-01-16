import React, { useState } from 'react';

import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const Share = ({
  streak,
  closeHandler
}) => {
  const shareUrl = 'https://motii.netlify.app';
  const title = () => {
    if (streak > 0) {
      return 'Day ' + streak + ' done! Want to start a good habit? Try out motii!';
    } else {
      return 'Want to start a good habit? Try out motii!';
    }
  };
  const [ shareText, setShareText ] = useState(title());

  return (
    <div className='share'>
      <h3>Share your progress!</h3>
      <textarea className='share-text' type='text' onChange={(event) => setShareText(event.target.value)}>
        {shareText}
      </textarea>
      <div className='share-buttons'>
        <EmailShareButton resetButtonStyle={false} url={shareUrl} subject='motii - the motivational calendar' body={shareText} onShareWindowClose={closeHandler}>
          <EmailIcon size={32} />
        </EmailShareButton>
        <FacebookShareButton resetButtonStyle={false} url={shareUrl} quote={shareText} onShareWindowClose={closeHandler}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <TwitterShareButton resetButtonStyle={false} url={shareUrl} title={shareText} onShareWindowClose={closeHandler}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
        <WhatsappShareButton resetButtonStyle={false} url={shareUrl} title={shareText} separator=':: ' onShareWindowClose={closeHandler}>
          <WhatsappIcon size={32} />
        </WhatsappShareButton>
        <LineShareButton resetButtonStyle={false} url={shareUrl} title={shareText} onShareWindowClose={closeHandler}>
          <LineIcon size={32} />
        </LineShareButton>
      </div>
    </div>
  );
}

export default Share;
