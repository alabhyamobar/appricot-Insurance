import React, { useState, createContext } from 'react';

export const ServicesProvider = createContext();

const ServiceContext = (props) => {
  const [service, setServiceData] = useState([
    {
      slug: "life-insurance",
      title: "Life Insurance",
      description:
        "Life insurance provides financial protection for your loved ones in case of your untimely death. It helps cover debts, daily living expenses, and future goals like education or retirement. There are different options, from temporary term life to lifelong whole life policies with investment opportunities.",
      icon: "❤️",
      details: [
        {
          name: "Term Life Insurance",
          desc: "Term life insurance is a simple and affordable coverage option, providing a death benefit for a set term like 10, 20, or 30 years. It’s ideal for individuals seeking temporary protection, such as covering a mortgage or children’s education. While it does not accumulate cash value, term life offers high death benefits at relatively low premiums, providing essential financial support for your family if the unexpected happens. It’s an excellent option for those looking for short-term coverage without the complexity or cost of permanent life insurance policies.",
          logo: "📄",
        },
        {
          name: "Whole Life Insurance",
          desc: "Whole life insurance offers permanent coverage that lasts for your entire lifetime, as long as premiums are paid. This policy also includes a ‘cash value’ component, which grows over time and can be borrowed against or withdrawn. Whole life insurance is beneficial for those who want guaranteed lifelong protection and prefer having an investment element within their life insurance policy. This type of coverage provides both security for loved ones in the event of death and a savings component that can be leveraged as a financial asset in the future.",
          logo: "🔁",
        },
        {
          name: "Endowment Plans",
          desc: "Endowment plans combine the benefits of life insurance and investments. These policies provide a death benefit if the policyholder passes away during the term. If the policyholder survives the term, they receive a lump sum maturity benefit. Endowment plans are a great way to save for future goals, such as your child’s education or retirement, while also ensuring your loved ones are financially secure in case of your passing. The premiums for these plans are higher than term life insurance but offer both life cover and an investment return, making it a versatile financial tool.",
          logo: "🎯",
        },
        {
          name: "ULIPs (Unit Linked Insurance Plans)",
          desc: "Unit Linked Insurance Plans (ULIPs) combine life insurance coverage with investment opportunities. ULIPs divide your premium into two parts: one part goes toward life insurance, while the other is invested in various funds like equity, debt, or hybrid funds. This offers flexibility, as you can choose the investment strategy based on your risk profile. ULIPs are ideal for individuals seeking both financial protection and the potential for wealth accumulation through market-linked investments. While they come with higher charges compared to traditional life insurance policies, they offer the dual benefit of insurance and investment growth over time.",
          logo: "📊",
        },
      ],
    },
    {
      slug: "general-insurance",
      title: "General Insurance",
      description:
        "General insurance covers risks related to property and everyday life. It protects against events like accidents, theft, or damage to assets. Types include motor, home, travel, and business insurance, ensuring both individuals and companies are financially shielded.",
      icon: "🛡️",
      details: [
        {
          name: "Motor Insurance",
          desc: "Motor insurance provides protection against financial loss due to damage, theft, or accidents involving your vehicle. It includes two primary types: comprehensive insurance, which covers damage to your own vehicle and third-party liability, and third-party insurance, which only covers damages caused to others. Comprehensive motor insurance is ideal for those seeking broader coverage for both their vehicle and third-party claims. It also ensures that vehicle owners are financially protected from the unexpected costs of accidents, theft, or natural disasters.",
          logo: "🚗",
        },
        {
          name: "Home Insurance",
          desc: "Home insurance offers coverage for damages to your house and personal belongings due to incidents like fire, natural disasters, theft, vandalism, or accidents. It typically includes two types of coverage: building insurance for the structure of your home, and contents insurance for your personal possessions. Having home insurance helps mitigate the costs of repair or replacement if your home or valuables are damaged. It’s essential for homeowners and renters alike, providing peace of mind knowing that your property is protected from unpredictable events.",
          logo: "🏠",
        },
        
        {
          name: "Commercial Insurance",
          desc: "Commercial insurance provides essential coverage for businesses, safeguarding them from a variety of risks like property damage, employee injuries, legal liabilities, or product-related incidents. This insurance is crucial for protecting business assets, operations, and employees, ensuring that companies can continue functioning smoothly even in the face of unexpected events. Depending on the type of business, it can include general liability insurance, workers’ compensation, product liability, business interruption coverage, and more. For any business, commercial insurance is a critical tool for risk management and long-term sustainability.",
          logo: "🏢",
        },
      ],
    },
    {
      slug: "corporate-insurance",
      title: "Corporate Insurance",
      description:
        "Corporate insurance offers tailored policies for organizations, covering specialized commercial risks and operations. It ensures business continuity and financial protection from large-scale or industry-specific risks.",
      icon: "🏦",
      details: [
        {
          name: "Marine Insurance",
          desc: "Marine insurance is specifically designed for businesses involved in shipping goods or transportation over water. It covers the risk of damage or loss of ships, cargo, and other transport methods during the course of trade and transportation. Marine insurance protects against the financial impact of natural disasters, piracy, accidents, and other shipping-related risks. It’s essential for global businesses dealing with international shipping, as it helps mitigate the risks associated with the transport of goods across seas, offering peace of mind during complex logistics operations.",
          logo: "🚢",
        },
        {
          name: "Fire Insurance",
          desc: "Fire insurance provides comprehensive coverage for damages and losses caused by fire-related incidents in both commercial and industrial properties. It is a critical safeguard that helps businesses protect their physical assets, including buildings, machinery, inventory, and equipment, from the devastating impact of fire outbreaks. This insurance ensures financial stability in times of crisis, allowing companies to recover swiftly, resume operations with minimal disruption, and avoid long-term financial setbacks. Whether caused by electrical faults, natural disasters, or accidental fires, Apricoat’s fire insurance solutions are designed to provide peace of mind and resilient recovery planning.",
          logo: "🔥",
        },
      ],
    },
    {
      slug: "health-insurance",
      title: "Health Insurance",
      description:
        "Health insurance helps cover medical expenses like doctor visits, surgeries, and hospitalizations. It provides financial protection for individuals and families, with various plans like individual, family floater, and critical illness coverage.",
      icon: "🩺",
      details: [
        {
          name: "Individual Health Insurance",
          desc: "Individual health insurance covers one person for medical expenses, including doctor consultations, hospitalization, surgeries, and treatments. This type of insurance is ideal for those who don’t have coverage through an employer or prefer a customized health plan. Individual policies often offer flexibility, allowing policyholders to add coverage for critical illnesses, maternity benefits, and more. This option provides a personalized approach to healthcare, ensuring that you have the right level of coverage for your specific needs.",
          logo: "👤",
        },
        {
          name: "Family Floater Plan",
          desc: "A family floater health insurance plan covers the entire family under a single policy. The sum insured can be used by any family member, making it an affordable and convenient option for families. These plans typically cover hospitalization, surgeries, doctor consultations, and other medical treatments, ensuring that all family members are protected under one plan. Family floater plans often provide higher coverage at a lower premium compared to individual policies for each family member, offering cost-effective healthcare solutions for families.",
          logo: "👨‍👩‍👧‍👦",
        },
        {
          name: "Travel Insurance",
          desc: "Travel insurance is designed to protect you from unexpected events that may occur while traveling, such as trip cancellations, lost baggage, medical emergencies, or travel delays. It can also provide coverage for emergency evacuations, trip interruptions, or even accidental death while abroad. Whether you’re traveling internationally or domestically, travel insurance ensures you won’t face financial ruin in case of unforeseen disruptions. This policy is particularly valuable for travelers seeking to safeguard their plans and investments, ensuring a worry-free journey.",
          logo: "✈️",
        },
        {
          name: "Critical Illness Cover",
          desc: "Critical illness cover provides a lump sum payout upon diagnosis of a serious illness like cancer, heart attack, or stroke. This financial support helps policyholders manage the high costs of treatment for life-threatening illnesses that are not always fully covered by standard health insurance. The lump sum payment can be used for medical expenses, post-treatment care, or even to replace lost income during recovery. Critical illness cover is especially valuable for individuals who want additional protection against severe health conditions that could lead to financial strain.",
          logo: "⚕️",
        },
        {
          name: "Group Health Insurance",
          desc: "Group health insurance is often provided by employers to cover the medical needs of their employees and their families. These policies offer coverage for hospitalization, outpatient treatments, surgeries, and other healthcare services under a single plan. Group health insurance is typically more affordable than individual plans due to the shared risk among a group of people. It ensures employees have access to quality healthcare without high out-of-pocket expenses, making it an essential benefit for companies to offer.",
          logo: "👥",
        },
      ],
    },
    {
      slug: "mutual-funds",
      title: "Mutual Funds",
      description:
        "Mutual funds pool investments from multiple individuals to create a diversified portfolio of stocks, bonds, and other assets. They offer professional management, reducing individual investment risk and providing growth potential.",
      icon: "💼",
      details: [
        {
          name: "Equity Mutual Funds",
          desc: "Equity mutual funds invest primarily in stocks and are suitable for investors with a higher risk tolerance. These funds aim for long-term capital growth by investing in a diversified portfolio of stocks across various sectors and industries. Although equity mutual funds are subject to market fluctuations, they offer higher return potential over time. Investors seeking wealth accumulation and willing to accept some degree of risk should consider these funds as part of their investment strategy.",
          logo: "📈",
        },
        {
          name: "Debt Mutual Funds",
          desc: "Debt mutual funds primarily invest in fixed-income securities like bonds, treasury bills, and other debt instruments. These funds are ideal for conservative investors seeking steady returns with lower risk. Debt funds are less volatile compared to equity funds and provide a more stable source of income. They are perfect for individuals looking for consistent returns with minimal exposure to market risk, offering a safer option for risk-averse investors.",
          logo: "💵",
        },
        {
          name: "Hybrid Mutual Funds",
          desc: "Hybrid mutual funds invest in a combination of stocks and bonds, offering a balanced approach to growth and income. These funds aim to provide moderate growth while managing risk through diversification. Hybrid funds are ideal for investors who want a mix of both equity and debt exposure in one investment vehicle. They offer a diversified portfolio that can help reduce risk while still providing opportunities for capital appreciation and income generation over time.",
          logo: "⚖️",
        },
      ],
    },

    {
      slug: "claim-support",
      title: "Claim Support",
      description:
        "At Apricoat Insurances, our Claim Support Service ensures fast, transparent, and stress-free assistance when you need it most. From filing to settlement, our dedicated team provides clear guidance, timely updates, and full support—helping you navigate marine, fire, or property claims with confidence and minimal delays.",
      icon: "🤝",
      details: [
        {
          name: "Claim Intimation / Filing Assistance",
          desc: "We help you initiate your claim quickly and efficiently through call, email, or our online portal. Our team guides you step-by-step in reporting your loss and beginning the claims process without delays.",
          logo: "📞📝",
        },
        {
          name: "Documentation Support",
          desc: "Get expert help in compiling and submitting all required documents. We provide detailed checklists tailored to your claim type, ensuring nothing is missed and your claim proceeds smoothly.",
          logo: "📄",
        },
        {
          name: "Claim Assessment / Surveyor Coordination",
          desc: "We coordinate with licensed surveyors and assessors to evaluate the extent of damage or loss. Our team ensures timely inspections and clear communication throughout the process.",
          logo: "🔍🏢",
        },
      ],
    },
    {
      slug: "survey-and-evaluation",
      title: "Survey and Evaluation",
      description:
        "We offer comprehensive pre- and post-claim surveys to evaluate risks and damages accurately. This helps us ensure fair coverage and settlement.",
      icon: "🧾🧑‍🔧",
      details: [
        {
          name: "Pre-Insurance Survey",
          desc: "A proactive evaluation conducted before policy issuance to assess risks, especially for high-value or industrial assets.",
          logo: "🧾",
        },
        {
          name: "Loss Assessment Survey",
          desc: "An on-site inspection post-incident to assess damage or loss, forming the basis of the claim amount. Our experts provide a detailed report to facilitate the claims process.",
          logo: "🏗️",
        },
        {
          name: "Surveyor Assignment and Coordination",
          desc: "We assign certified, experienced surveyors and manage all communications between you and them for a hassle-free experience.",
          logo: "🤝",
        },
      ],
    },
    
  ]);

  return (
    <ServicesProvider.Provider value={{ service, setServiceData }}>
      {props.children}
    </ServicesProvider.Provider>
  );
};

export default ServiceContext;