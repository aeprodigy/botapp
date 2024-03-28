import React from "react";

const FacebookConversations = () => {
  // Sample data for the two Facebook conversations
  const conversations1 = [
    {
      bot_sender: 0,
      business_id: 1,
      id: 1,
      message_date: "2024-03-21T22:28:39Z",
      message_text: "hello",
      platform: "facebook",
      received_number: 216799024847792,
      reply_to_id: null,
      sender_name: "user",
      sender_number: 8043463645668574,
    },
    {
      bot_sender: 1,
      business_id: 1,
      id: 2,
      message_date: "2024-03-21T22:28:39Z",
      message_text: "hi! how can i assist you today?",
      platform: "facebook",
      received_number: 216799024847792,
      reply_to_id: 1,
      sender_name: "bot",
      sender_number: 8043463645668574,
    },
    {
      bot_sender: 0,
      business_id: 1,
      id: 3,
      message_date: "2024-03-21T22:28:46Z",
      message_text: "do you sell apples?",
      platform: "facebook",
      received_number: 216799024847792,
      reply_to_id: null,
      sender_name: "user",
      sender_number: 216799024847792,
    },
    {
      bot_sender: 1,
      business_id: 1,
      id: 4,
      message_date: "2024-03-21T22:28:46Z",
      message_text:
        "the customer asked: |||| do you sell apples?  ||| and i didn't know how to reply. can you tell me what i can reply to this?",
      platform: "facebook",
      received_number: 216799024847792,
      reply_to_id: 3,
      sender_name: "bot",
      sender_number: 216799024847792,
    },
  ];

  // Filter conversations for platform "facebook"
  const facebookConversations = conversations1.filter(
    (conv) => conv.platform === "facebook"
  );

  // Render the Facebook conversations
  return (
    <div className="pt-8 flex flex-col justify-center p-8">
      <h2 className="text-center text-2xl text-blue-500">
        Facebook Conversations
      </h2>
      {facebookConversations.map((message, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-4 pt-8"
        >
          {message.sender_name === "user" && (
            <div className="text-left mb-2">
              <div className="inline-block bg-blue-500 text-white p-2 rounded-md">
                <p className="text-xs">{message.sender_name}</p>
                <p className="">{message.message_text}</p>
                <p className="text-xs">{message.message_date}</p>
              </div>
            </div>
          )}
          {message.bot_sender === 1 && (
            <div className="text-left mb-2">
              <div className="inline-block bg-gray-200 p-2 rounded-md">
                <p className="text-xs font-bold text-gray-600">
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
};

export default FacebookConversations;
