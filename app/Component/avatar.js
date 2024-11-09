import React from 'react';

function Avatar({ name = '', size = 12 }) { // Set default for `name` to an empty string
  // Get the first letter of the name, convert to uppercase, or return an empty string if no name is provided
  const firstLetter = name ? name.charAt(0).toUpperCase() : '';

  // Function to generate a random color based on the first letter (using a hashing algorithm)
  const getRandomColor = (name) => {
    let hash = 0;
    
    // Check if name exists and is not empty
    if (name) {
      for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
    }
    
    // Set HSL color with a slightly darker tone
    return `hsl(${hash % 360}, 85%, 40%)`; // Higher saturation, slightly lower lightness
  };

  return (
    <div
      className='flex items-center font-montserrat justify-center rounded-full font-semibold text-white'
      style={{
        width: `${size * 4}px`, // Adjust width based on the size prop
        height: `${size * 4}px`, // Adjust height based on the size prop
        fontSize: `${size * 1.5}px`, // Adjust font size based on the size prop
        backgroundColor: getRandomColor(name), // Set background color based on name
      }}
    >
      {firstLetter} {/* Display the first letter */}
    </div>
  );
}

export default Avatar;
