"use client";
import React from "react";
import { classNames } from "../../utils/functions";
import AIService from "../../api/openai.service";
import { ThreeDots } from "react-loader-spinner";
import { v4 as uuid } from "uuid";
import ReactMarkdown from "react-markdown";

type Messages = {
  request: string;
  response: string;
};

export default function AiPage() {
  const aiService = new AIService();
  const [messages, setMessages] = React.useState<Messages[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [history, setHistory] = React.useState<string[]>([]);
  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      const inputElement = e.target as HTMLInputElement;
      try {
        const response = await aiService.consult(inputElement.value);
        setHistory([...history, inputElement.value]);
        if (response.choices[0].message.content) {
          const item = {
            request: inputElement.value,
            response: response.choices[0].message.content,
          };
          setMessages([...messages, item]);
          (e.target as HTMLInputElement).value = "";
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <div
        className={classNames(
          "w-full h-full bg-white flex flex-col px-5 relative"
        )}
      >
        <div
          className={classNames(
            "flex items-center justify-between p-4 bg-white"
          )}
        >
          <a
            href="/dashboard/home"
            className={classNames("color-dark-blue flex flex-row")}
          >
            <img src="/backFlag.png" alt="back" className="mr-5" /> Return
          </a>
          <h1
            className={classNames("text-center text-2xl font-bold flex-grow")}
          >
            Aura AI
          </h1>
        </div>
        <div className={classNames("text-center light-purple-bg py-2")}>
          What are the competitive dynamics between HubSpot and Salesforce
        </div>
        <div className={classNames("w-full messages-container")}>
            {isLoading && ( <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#6869ac"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />)}
            {messages.length > 0 &&
            messages.map((item) => (
                <div className={classNames("flex flex-col mt-2")} key={uuid()}>
                <span className={classNames("text-lg font-bold purple-color")}>
                    {item.request}
                </span>
                <ReactMarkdown className="mt-2">{item.response}</ReactMarkdown>
                <img
                    src="/aiActions.png"
                    alt="aiAction"
                    className={classNames("w-60 mt-5")}
                />
                </div>
            ))}
        </div>
        <div
          className={classNames("w-full absolute bottom-2 left-0 right-0 px-5")}
        >
          <input
            type="text"
            className={classNames(
              "gray-color border-gray input-padding input-radius w-full"
            )}
            placeholder="Hi, I’m Aura, you AI Assistant. Tell me, what question do you have?"
            onKeyUp={handleKeyPress}
          />
        </div>
      </div>
    </>
  );
}
