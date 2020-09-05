import React from 'react';
import '../index.css';

function InfoTab() {
  const paragraph1 =
    "Located in the heart of the arts district, Julianne's Cafe is the perfect spot for a relaxing breakfast atmosphere.";
  const paragraph2 =
    'Established in 2020, our cafe strives to provide the best traditional, experimental, and fun options for the most important meal of the day!';

  return (
    <div className="tabContent overlay">
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  );
}

export default InfoTab;
