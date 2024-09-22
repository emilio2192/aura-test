'use client';
import React from 'react';
import { classNames } from '../../utils/functions';
import AIService from '../../api/openai.service';



export default function AiPage() {
    const aiService = new AIService();
    const [messages, setMessages] = React.useState('');
    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const inputElement = e.target as HTMLInputElement;
            console.log('Enter key pressed', inputElement.value);
            const response = await aiService.consult(inputElement.value);
            if(response.choices[0].message.content){
                setMessages(response.choices[0].message.content);
                (e.target as HTMLInputElement).value = '';
            }
            console.log('Response', response);
        }   
    }
    
    return (<>
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
            {messages && <div className={classNames('flex flex-col')} >
                <p className="mt-2">
                    {messages}
                </p>
                <img src="/aiActions.png" alt='aiAction' className={classNames("w-60 mt-5")} />
            </div>}
            <div className={classNames('w-full absolute bottom-2 left-0 right-0 px-5')}>
                    <input 
                        type='text' 
                        className={classNames('gray-color border-gray input-padding input-radius w-full')} 
                        placeholder="Hi, I’m Aura, you AI Assistant. Tell me, what question do you have?"
                        onKeyUp={handleKeyPress}
                    />
                </div>
        </div>
    </>)
}