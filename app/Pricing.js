"use client";  // Mark this as a client component

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTag } from '@fortawesome/free-solid-svg-icons';


const pricingPlans = [
  {
    name: 'Trial',
    priceMonthly: null,
    subHead: 'Get personalised template',
    priceAnnual: 0,
    features: ['25+ data sources', 'GPT4, LinkedIn and others', 'Access to Slack community', '10+ templates to scale your outbound'],
    subFeatures: ['Explore product capabilities'],
    buttonText: 'Try Now',
    isPopular: false,
    isOff: false,
  },
  {
    name: 'Growth',
    priceMonthly: 229,
    priceAnnual: 199,
    subHead: null,
    oldPriceMonthly: 459,
    oldPriceAnnual: 399,
    features: ['8,000 Credits', 'Webhook, HTTP API', 'Credit rollover (upto 2x plan credits)','Outbound email integrations like Instantly, Smartlead.', 'Dedicated 3 hours from Bitscale expert'],
    subFeatures: ['Unlimited leads search', 'Unlimited leads search', 'Personalized outreach at scale'],
    buttonText: 'Continue with Growth',
    isPopular: false,
    isOff: true,

  },
  {
    name: 'Booster',
    priceMonthly: 499,
    priceAnnual: 399,
    subHead: null,
    oldPriceMonthly: 999,
    oldPriceAnnual: 799,
    features: ['25,000 Credits', 'Webhook, HTTP API','Credit rollover (upto 2x plan credits)', 'Outbound email integrations like Instantly, Smartlead.', 'Dedicated 3 hours from Bitscale expert', 'Advanced models like Claude Sonnet','Dedicated 8 hours from Bitscale expert', '2-way Hubspot integration'],
    subFeatures: ['Unlimited leads search', 'Fully enriched 15000 leads', 'Personalized outreach at scale'],

    buttonText: 'Continue with Booster',
    isPopular: true,
    isOff: true,

  },
  {
    name: 'Enterprise',
    priceMonthly: null,
    priceAnnual: null,
    subHead: 'For individual pricing',
    features: ['Data privacy certification', 'Priority Support', 'Dedicated Bitscale expert','Private Slack Channel', 'Collaborative workspace and templates'],
    subFeatures: ['Perfect for High-Volume End-to-End CRM Data Enrichment', 'Unlimited list of leads with unlimited data points'],
    buttonText: 'Contact Us',
    isPopular: false,
    isOff: false,

  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false); // Toggle between monthly and annual pricing
  const [activePlan, setActivePlan] = useState('Booster'); // Track active plan (default is Booster)

  const togglePricing = () => {
    setIsAnnual(!isAnnual); // Toggle between annual and monthly
  };

  const handleSelectPlan = (planName) => {
    setActivePlan(planName); // Set the active plan based on user selection
  };

  return (
    <div className="flex flex-col items-center p-6 font-inter w-[1280px]">
      {/* Toggle Monthly/Annual */}
      <div className="flex justify-center mb-8 space-x-4 bg-blue-100 py-1 px-1 rounded-md">
        <button
          onClick={() => setIsAnnual(false)}
          className={`text-lg py-2 px-4 rounded-md ${!isAnnual ? 'bg-white text-gray-900 font-semibold' : 'bg-blue-100 text-gray-900'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsAnnual(true)}
          className={`text-lg py-2 px-4 rounded-md ${isAnnual ? 'bg-white text-gray-900 font-semibold' : 'bg-blue-100 text-gray-900 '}`}
        >
          Annual
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            onClick={() => handleSelectPlan(plan.name)} // Set the active plan when clicked
            className={`shadow-lg rounded-lg p-6 text-left cursor-pointer border border-gray-200 transition-colors duration-300  ${
              activePlan === plan.name
                ? 'bg-gradient-to-b from-[#1E429F] to-[#0B1839] text-white ' // Gradient background for active plan
                : 'bg-white text-gray-500' // Default styling for non-active plans
            }`}
          >
            

           
            {plan.isPopular === true ? (
              <div className='flex justify-between  gap-2 pb-3'>
                  <div className={`${
              activePlan === plan.name
                ? 'text-white ' // Gradient background for active plan
                : 'text-gray-800' // Default styling for non-active plans
            }`}>{plan.name} </div>
                  <div className='rounded-[14.25px] bg-[#CEE0FF] text-blue-900 font-[10px] pl-2 pr-2 pt-1 pb-1'>Popular</div>
                </div>
            ):(
              <>
              <h3 className={`text-base mb-4 font-[500] ${
              activePlan === plan.name
                ? 'text-white ' // Gradient background for active plan
                : 'text-gray-800' // Default styling for non-active plans
            }`}>{plan.name}</h3>
              </>
            )}

            

            {/* Dynamic pricing */}
            {plan.priceMonthly !== null ? (
              <>
                <div className={`flex text-end gap-3 items-end ${
              activePlan === plan.name
                ? 'text-white ' // Gradient background for active plan
                : 'text-gray-800' // Default styling for non-active plans
            }`}>
                  <div className="text-4xl font-[800] mb-1">${isAnnual ? plan.priceAnnual : plan.priceMonthly}</div>
                  <div className="text-lg font-[300] mb-1 text-bottom">/month</div>
                </div>
                {plan.isOff === true ? (
              <div className='flex justify-left items-center gap-2 mb-6'>
                  <div className='rounded-[14.25px] bg-[#ECFDF3] text-green-500 font-[10px] pt-0.5 pb-0.5 pl-2 pr-2'>
                    <FontAwesomeIcon icon={faTag}/> 50% off
                  </div>
                  <div className={`text-lg font-[800] line-through ${
              activePlan === plan.name
                ? 'text-white ' // Gradient background for active plan
                : 'text-gray-800' // Default styling for non-active plans
            }`}>
                    ${isAnnual ? plan.oldPriceAnnual : plan.oldPriceMonthly}
                  </div>
                  
                </div>
            ):(
              <>
              <h3 className={`text-base mb-4 font-[500] ${
              activePlan === plan.name
                ? 'text-white ' // Gradient background for active plan
                : 'text-gray-800' // Default styling for non-active plans
            }`}>{plan.name}</h3>
              </>
            )}
              </>
            ) : (
              plan.name === "Trial" ? (
                <>
                  <p className={ `text-4xl font-[800] mb-1 ${
              activePlan === plan.name
                ? 'text-white ' // Gradient background for active plan
                : 'text-gray-800' // Default styling for non-active plans
            }`}>Try Now</p>
                  <p className='mb-6'>Get personalised template</p>
                </>
              ):
              (
                <>
                  <p className={`text-4xl font-[800] mb-1 ${
              activePlan === plan.name
                ? 'text-white ' // Gradient background for active plan
                : 'text-gray-800' // Default styling for non-active plans
            }`}>Contact</p>
                  <p className='mb-6'>For individual pricing</p>
                </>
              )
              

              
            )}

            <div className="text-left space-y-2 mb-6 h-[412px] font-[400] border-b ">
              {plan.features.map((feature, i) => (
                <div key={i}  className={feature === "8,000 Credits" ? "text-blue-500 font-bold flex justify-left gap-2" : "flex justify-left gap-2 "}>
                  <div><FontAwesomeIcon icon={faCircleCheck}/> </div>
                  <div >{feature}</div>
                </div>
              ))}
            </div>

            <ul className="list-disc text-left space-y-2 mb-6 font-[400] h-[120px]  ml-5">
              {plan.subFeatures.map((feature, i) => (
                <li key={i}>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`py-2 px-4 rounded-lg w-[100%]  transition ${
                activePlan === plan.name ? 'bg-white text-blue-600 hover:bg-blue-100' : 'bg-blue-500 text-white hover:bg-blue-700'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
