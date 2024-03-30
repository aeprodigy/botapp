import React from "react";
import { FaRobot } from "react-icons/fa6";

const WhatsAppConversations = () => {
  // an array of data from the messaging data
  const conversations = [
    {
      bot_sender: 0,
      business_id: 1,
      id: 5,
      message_date: "2024-03-21T23:53:53Z",
      message_text: "hello",
      platform: "whatsapp",
      received_number: 15550926585,
      reply_to_id: null,
      sender_name: "j",
      sender_number: 584246018872,
    },
    {
      bot_sender: 1,
      business_id: 1,
      id: 6,
      message_date: "2024-03-21T23:53:53Z",
      message_text: "hello! how can i assist you today?",
      platform: "whatsapp",
      received_number: 584246018872,
      reply_to_id: 5,
      sender_name: "bot",
      sender_number: 15550926585,
    },
   
  ];

  // Filter conversations for platform "whatsapp"
  const whatsappConversations = conversations.filter(
    (conv) => conv.platform === "whatsapp"
  );

  // Render the WhatsApp conversations
  return (
    <div className="pt-8 flex flex-col justify-center p-8">
      <h2 className="text-center text-2xl text-green-500">
        WhatsApp Conversations
      </h2>
      {whatsappConversations.map((message, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-4 pt-8"
        >
          {message.sender_name === "j" && (
            <div className="text-left mb-2">
              <div className="inline-block bg-green-500 text-white p-2 rounded-md">
                <p className="text-xs">{message.sender_name}</p>
                <p className="">{message.message_text}</p>
                <p className="text-xs">{message.message_date}</p>
              </div>
            </div>
          )}
          {message.bot_sender === 1 && (
            <div className="text-left mb-2">
              <div className="inline-block bg-gray-200 p-2 rounded-md">
                <p className="text-xs font-bold text-gray-600 flex items-center">
                  <FaRobot /> {message.sender_name}
                </p>
                <p className="pt-2">{message.message_text}</p>
                <p className="text-xs text-right text-gray-400 pt-2">
                  {message.message_date}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WhatsAppConversations;
