import CV from 'assets/my-cv.pdf';
import React from 'react';

function DownloadCV(props) {
  return (
    <div className="download-cv">
      <a href={CV} download className="btn">
        Download my CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

DownloadCV.propTypes = {};

export default DownloadCV;
