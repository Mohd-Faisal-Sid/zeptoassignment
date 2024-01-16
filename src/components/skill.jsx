import React, { useState, useEffect } from 'react';

function Skills() {
  const [inputValue, setInputValue] = useState('');
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);

  const allSkills = ['JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'React', 'Node.js', 'SQL'];

  useEffect(() => {
    const filtered = allSkills.filter(skill =>
      skill.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSkills(filtered);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSkillSelect = (skill) => {
    setSkills([...skills, skill]);
    setInputValue('');
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Backspace' && inputValue === '' && skills.length > 0) {
      handleRemoveSkill(skills.length - 1);
    }
  };

  return (
    <>
    <h5>Add Skills</h5>
    <div className="App">
    
    <div className="skill-input">
      {skills.map((skill, index) => (
        <div key={index} className="skill-tag">
          {skill}
          <span className="remove-button" onClick={() => handleRemoveSkill(index)}>
            x
          </span>
        </div>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Skills"
      />
    </div>
    <hr/>
    {inputValue && (
      <div className="suggestions">
        {filteredSkills.map((skill, index) => (
          <div key={index} onClick={() => handleSkillSelect(skill)}>
            {skill}
          </div>
        ))}
      </div>
    )}
  </div>
    </>
   
  );
}

export default Skills;
