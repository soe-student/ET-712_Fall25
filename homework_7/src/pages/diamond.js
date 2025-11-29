import React from 'react';

function Diamond() {
  return (
    <div className="page-container diamond-page">
      <h1 className="page-title">💎 Diamond - The Hardest Natural Substance</h1>
      <img 
        src="/images/diamond.jpg" 
        alt="Brilliant cut diamond"
        className="page-image"
      />
      <div className="content-box">
        <h2>More Than Just a Girl's Best Friend</h2>
        <p>
          Diamonds are not just beautiful—they're scientific marvels formed deep within the Earth under 
          extreme pressure and temperature over billions of years. While most people know diamonds are the 
          hardest natural material on Earth (rating 10 on the Mohs scale), few realize that they can actually 
          burn! When exposed to temperatures above 763°C (1,405°F) in the presence of oxygen, diamonds will 
          combust and turn into carbon dioxide. The largest diamond ever discovered is the Cullinan Diamond, 
          found in South Africa in 1905, weighing an astounding 3,106 carats (over 1.3 pounds) in its rough 
          form. Even more fascinating, scientists have discovered a planet 40 light-years away called 55 Cancri e, 
          which is believed to be covered in diamonds—a literal "diamond planet" twice the size of Earth. 
          Diamonds also have industrial applications beyond jewelry; they're used in cutting tools, scientific 
          equipment, and even in quantum computing research. Perhaps most intriguingly, your diamond engagement 
          ring might actually be older than the dinosaurs—most diamonds are between 1 and 3.5 billion years old, 
          formed long before life even existed on Earth's surface.
        </p>
      </div>
    </div>
  );
}

export default Diamond;