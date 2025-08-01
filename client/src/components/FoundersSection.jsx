import React from 'react';
import './FoundersSection.css';

const founders = [
  {
    img: '/founder2.jpg',
    profile: '/liam.jpg',
    name: 'Liam Carter Hayes',
    upvotes: 775,
    startup: 'Medly',
    description: 'AI health assistant for rural clinics. Diagnoses, manages records & works offline in local languages. 500+ users in 3 villages.',
  },
  {
    img: '/founder2.jpg',
    profile: '/liam.jpg',
    name: 'Liam Carter Hayes',
    upvotes: 775,
    startup: 'SkillSprout',
    description: 'SkillSprout delivers 5-minute lessons. Learn fast, stay consistent. Grow a skill, one day at a time.',
  },
  // Add more founders if needed
    {
    img: '/founder2.jpg',
    profile: '/liam.jpg',
    name: 'Liam Carter Hayes',
    upvotes: 775,
    startup: 'SkillSprout',
    description: 'SkillSprout delivers 5-minute lessons. Learn fast, stay consistent. Grow a skill, one day at a time.',
  },
];

const FoundersSection = () => {
  return (
    <div className="founders-section">
      <h2>Founders for you</h2>
      <div className="founder-slider">
        {founders.map((founder, idx) => (
          <div className="founder-card" key={idx}>
            <img src={founder.img} alt="Startup" className="startup-image" />
            <div className="founder-info">
              <div className="founder-header">
                <img src={founder.profile} alt="Profile" className="profile-pic" />
                <div>
                  <h4>{founder.name}</h4>
                  <p>{founder.upvotes} Upvotes</p>
                </div>
              </div>
              <h3>{founder.startup} <span className="verified">✔</span></h3>
              <p>{founder.description}</p>
              <button className="details-btn">See details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoundersSection;
