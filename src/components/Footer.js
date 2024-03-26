import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
            <h4 className="text-lg font-semibold mb-2">Common Information</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel est nec tellus tincidunt dapibus.</p>
            {/* Add more common information as needed */}
          </div>
          {/* Add more sections if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
