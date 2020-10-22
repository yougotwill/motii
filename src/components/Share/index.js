import React from 'react';

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
  const title = () => {
    if (streak > 0) {
      return 'Day ' + streak + ' done! Want to start a good habit? Try out motii!';
    } else {
      return 'Want to start a good habit? Try out motii!';
    }
  };
  const shareUrl = 'https://motii.netlify.app';

  return (
    <div className='share'>
      <h3>Share your progress!</h3>
      <textarea className='share-text' type='text' value={title()} readOnly />
      <div className='share-buttons'>
        <EmailShareButton url={shareUrl} subject='motii - the motivational calendar' body={title} onClick={closeHandler}>
          <EmailIcon size={32} />
        </EmailShareButton>
        <FacebookShareButton url={shareUrl} quote={title()}  onClick={closeHandler}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title()}  onClick={closeHandler}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={title()} separator=':: '  onClick={closeHandler}>
          <WhatsappIcon size={32} />
        </WhatsappShareButton>
        <LineShareButton url={shareUrl} title={title()} onClick={closeHandler}>
          <LineIcon size={32} />
        </LineShareButton>
      </div>
    </div>
  );
}

export default Share;
