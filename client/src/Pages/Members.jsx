import React, { useContext } from 'react';
import { TeamProvider } from '../Context/TeamContext';
import cn from 'classnames';
import Nav from '../Components/Nav';

const Members = ({ isAlternate }) => {
  const [teamMembers] = useContext(TeamProvider);

  return (
    <div className='w-full min-h-screen bg-green-50 px-4 py-10 sm:px-6 lg:px-10'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center text-green-900 mb-6 mt-10 sm:mb-12'>
        Meet Our Team
      </h1>

      <p className='text-center text-gray-700 italic max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-semibold mb-8 sm:mb-10'>
        "Our dedicated team of professionals is here to provide you with the best insurance solutions tailored to your needs..."
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto'>
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className={cn(
              "bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg",
              isAlternate ? "border-l-4 border-green-500" : "border-l-4 border-green-700"
            )}
          >
            <div className="p-4 sm:p-6 md:p-8">
              <h3
                className={cn(
                  "text-lg sm:text-xl font-semibold mb-1",
                  isAlternate ? "text-green-500" : "text-green-700"
                )}
              >
                {member.name}
              </h3>
              <p className="text-gray-600 font-medium mb-2 sm:mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm sm:text-base">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
