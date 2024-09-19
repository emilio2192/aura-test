import React from 'react';
import { classNames } from '../utils/functions';

import SimpleLayout from '../components/SimpleLayout';

export default function AiPage() {
    return (<SimpleLayout>
        <div className={classNames('w-full h-full bg-white flex flex-col px-5 relative')}>
            <div className={classNames('flex items-center justify-between p-4 bg-white')}>
                <a href="/home" className={classNames('color-dark-blue flex flex-row')}>
                   <img src="/backFlag.png" alt="back" className="mr-5" /> Return
                </a>
                <h1 className={classNames('text-center text-2xl font-bold flex-grow')}>Aura AI</h1>
            </div>
            <div className={classNames('text-center light-purple-bg py-2')}>
                What are the competitive dynamics between HubSpot and Salesforce&apos;
            </div>
            <div className={classNames('flex flex-col')} >
                <p className="mt-2">
                    The competitive dynamics between HubSpot and Salesforce are largely driven by the differences in their product offerings. Salesforce is an enterprise-level product that is expensive and powerful, but is mainly used by larger companies. HubSpot, on the other hand, is more focused on smaller teams and has grown its functionality to offer robust enterprise-level solutions. Salesforce has an advantage in terms of its integrations, as it is able to integrate with other enterprise-level products, while HubSpot has been working to improve its native integrations and AI capabilities. Salesforce also has a larger customer base, which gives it an advantage in terms of market share. However, HubSpot has been able to differentiate itself by offering a more user-friendly UI, as well as a more cost-effective solution. As one source stated, “I think what HubSpot has really done well is kind of zig really around that. Like all the other competitors even in some of those markets like if you look at what Zendesk is doing or even sort of Adobe, which is much further up-market, right, like so much like here. We&apos;re going to acquire a bunch of companies and sort of fill up its table on some sort of investor presentation deck like to be able to check all the boxes” . This shows that HubSpot has been able to differentiate itself from Salesforce by offering a more cost-effective solution that is tailored to smaller teams.
                </p>
                <img src="/aiActions.png" alt='aiAction' className={classNames("w-60 mt-5")} />
            </div>
            <div className={classNames('w-full absolute bottom-2 left-0 right-0 px-5')}>
                    <input 
                        type='text' 
                        className={classNames('gray-color border-gray input-padding input-radius w-full')} 
                        placeholder="E.g. Microsoft Research"
                    />
                </div>
        </div>
    </SimpleLayout>)
}