import React from 'react'
import { FaRobot } from 'react-icons/fa6';

const Instagram = () => {
    //the instagram data
    const instaMessage = [
      {
        bot_sender: 1,
        business_id: 1,
        id: 11,
        message_date: "2024-03-17T16:01:50Z",
        message_text: "tetsetste",
        platform: "instagram",
        received_number: 12121232,
        reply_to_id: 1,
        sender_name: "J",
        sender_number: 1231235545,
      },
    ];
    const InstaConversations = instaMessage.filter(
      (conversation) => conversation.platform === "instagram"
    );

  return (
    <div className="pt-8 flex flex-col justify-center p-8">
      <h2 className="text-center text-2xl text-pink-500">
       Instagram Conversations
      </h2>
      {InstaConversations.map((message, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-4 pt-8"
        >
          
          {message.bot_sender === 1 && (
            <div className="text-left mb-2">
              <div className="inline-block bg-gray-200 p-2 rounded-md">
                <p className="text-xs font-bold text-gray-600 flex items-center">
                  {message.sender_name}
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
}

export default Instagram