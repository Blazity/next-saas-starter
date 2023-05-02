import React from 'react';

export default function Chatbot() {
  return <div>Chatbot</div>;
}

// import React, { useState } from 'react';
// import styled from 'styled-components';

// export default function Chatbot() {
//   const [notifcationCount, setNotificationCount] = useState(1);
//   const [chatBotOpen, setChatBotOpen] = useState(false);
//   const messages = [
//     { IMCM: 'Hey, how can we help you today?' },
//     { user: 'I want to schedule a demo' },
//     { user: 'How does this work' },
//     { user: 'Other question' },
//   ];

//   const handleOpen = () => {
//     setChatBotOpen(true);
//     if (messages[0].IMCM) {
//       console.log('sup');
//     } else {
//       console.log('nahs');
//     }
//   };

//   const handleClose = () => {
//     setChatBotOpen(false);
//   };

//   if (!chatBotOpen) {
//     return (
//       <ClosedChatbotWrapper onClick={handleOpen}>
//         <Notification>
//           <NotificationCount>{notifcationCount}</NotificationCount>
//         </Notification>
//       </ClosedChatbotWrapper>
//     );
//   }
//   return (
//     <OpenChatBotWrapper>
//       <Notification onClick={handleClose}>
//         <NotificationCount>X</NotificationCount>
//       </Notification>
//       <MessagesContainer>
//         {messages.map((message, i) => {
//           if (message.IMCM) {
//             return <IMCMMessage>{message.IMCM}</IMCMMessage>;
//           }
//           return <UserMessage>{message.user}</UserMessage>;
//         })}
//       </MessagesContainer>
//     </OpenChatBotWrapper>
//   );
// }

// const OpenChatBotWrapper = styled.div`
//   position: sticky;
//   bottom: 50px;
//   left: 90%;
//   width: 400px;
//   height: 400px;
//   background-color: #ababab;
//   z-index: 1;
//   display: flex;
//   align-items: center;
// `;

// const ClosedChatbotWrapper = styled.div`
//   position: sticky;
//   bottom: 50px;
//   left: 90%;
//   cursor: pointer;

//   width: 100px;
//   height: 124px;
//   background: transparent;
//   background-repeat: no-repeat;
//   background-image: url('/team/jonathon.jpg');
//   z-index: 1;
// `;

// const Notification = styled.div`
//   position: sticky;
//   top: 10px;
//   left: 90%;
//   height: 20px;
//   width: 20px;
//   background-color: #f00;
//   color: #fff;
// `;

// const NotificationCount = styled.p`
//   font-size: 1.5rem;
//   margin-top: 50%;
//   margin-right: 50%;
// `;

// const MessagesContainer = styled.div`
//   width: 90%;
//   height: 90%;
// `;

// const UserMessage = styled.div`
//   max-width: 60%;
//   margin-right: 5%;
//   background-color: #0f0;
// `;

// const IMCMMessage = styled.div`
//   max-width: 60%;
//   margin-left: 5%;
//   background-color: #00f;
// `;
