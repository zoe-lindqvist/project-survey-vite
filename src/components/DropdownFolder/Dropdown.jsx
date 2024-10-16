/* eslint-disable react/prop-types */
// src/components/Dropdown.jsx
export const Dropdown = ({ options, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} required>
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
