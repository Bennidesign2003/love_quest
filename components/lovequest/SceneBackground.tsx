import React from 'react';

const backgrounds = {
  phone: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  fashion: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  office: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  home: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  garden: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  mountains: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  road: 'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)',
  bar: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 50%, #ff99ac 100%)',
  night: 'linear-gradient(135deg, #2c3e50 0%, #4a569d 50%, #fd746c 100%)',
  beach: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 50%, #74b9ff 100%)',
  restaurant: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
  city: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
  park: 'linear-gradient(135deg, #c1dfc4 0%, #deecdd 100%)',
  snow: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
  tattoo: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  spa: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
  speakeasy: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
  kitchen: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
  fireworks: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)',
  underwater: 'linear-gradient(135deg, #0083B0 0%, #00B4DB 100%)',
  sports: 'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)',
  celebration: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  sunset: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #ff9ff3 100%)',
  default: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
};

export default function SceneBackground({ background }) {
  const bgStyle = backgrounds[background] || backgrounds.default;

  return (
    <div
      className="absolute inset-0 -z-10 opacity-30"
      style={{
        background: bgStyle,
        filter: 'blur(80px)'
      }}
    />
  );
}