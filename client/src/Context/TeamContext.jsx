import React, { createContext, useState } from 'react';

export const TeamProvider = createContext();
const TeamContext = ({children}) => {
    const [teamMembers , setteamMembers] = useState([
        {
            id: 1,
            name: "Mayank Saxena",
            role: "Managing Director & Principal Officer",
            description: "Mayank Saxena, Managing Director and Principal Officer of Apricoat Insurance, brings visionary leadership and deep industry expertise to the organization. He leads strategic planning, ensures regulatory compliance, and drives business growth. With a strong focus on client satisfaction and innovation, especially in marine and fire insurance, his leadership continues to shape Apricoat into a trusted name in the industry.",
            // image: "https://via.placeholder.com/150"
          },
          {
            id: 2,
            name: "Shaifali Saxena",
            role: "On Board Director",
            description: "Shaifali Saxena serves as the Onboard Director at Apricoat Insurance, where she leads and refines the onboarding experience for both clients and new employees. With a focus on excellence and a personal touch, she ensures every interaction is timely, transparent, and tailored. Her strategic approach blends operational efficiency with empathy, turning onboarding into a benchmark of trust and clarity that fosters lasting relationships and confident collaborations."
            //image: "https://via.placeholder.com/150"
          },
          {
            id: 3,
            name: "Pratyush Pandey",
            role: "Business Development Executive (BDE)",
            description: "Pratyush Mishra is a Business Development Executive at Apricoat Insurance, specializing in marine and fire insurance. With a keen understanding of market dynamics, he identifies growth opportunities and builds strong client relationships. His proactive approach and commitment to excellence drive Apricoat's mission to deliver tailored insurance solutions that meet the evolving needs of clients.",
            // image: "https://via.placeholder.com/150"
          },
          {
            id: 4,
            name: "Our Associates",
            role: "Sales Person",
            description: "At Apricoat Insurance, our 14 dedicated associates form the backbone of our operations. With diverse expertise across underwriting, client servicing, claims processing, policy documentation, and support services, they work diligently to uphold our commitment to excellence. Each associate is trained to deliver prompt, accurate, and empathetic assistance, ensuring that our clients receive the best possible support at every stage of their insurance journey. Their professionalism and collaborative spirit drive our mission to build trust, security, and lasting relationships.",
            // image: "https://via.placelder.com/150"
          },
    ])
    
  return (
    <TeamProvider.Provider value = { [teamMembers , setteamMembers] }>
      {children}
    </TeamProvider.Provider>
  )
}

export default TeamContext
