import React from 'react';

const ImagePlaceholder = ({ title, subtitle }) => (
  <div className="image-placeholder">
    <div className="image-placeholder-inner">
      <span>Image Placeholder</span>
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </div>
);

export default ImagePlaceholder;