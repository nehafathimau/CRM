// import apiInterceptor from "../interceptors/interceptors";
// /* =============================
//    GET ALL STAFF (for members)
// ============================= */

// export const getStaffList = async () => {
//   try {
//     const response = await apiInterceptor.get("/staff/alllist");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching staff list:", error);
//     throw error;
//   }
// };


// /* =============================
//    GET MY CHAT ROOMS
// ============================= */

// export const getChatRooms = async () => {
//   try {
//     const response = await apiInterceptor.get("/chat/my-rooms");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching chat rooms:", error);
//     throw error;
//   }
// };


// /* =============================
//    GET ROOM MESSAGES
// ============================= */

// export const getRoomMessages = async (roomId) => {
//   try {
//     const response = await apiInterceptor.get(`/chat/room/${roomId}/messages`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     throw error;
//   }
// };


// /* =============================
//    SEND MESSAGE
// ============================= */

// export const sendMessage = async (roomId, message) => {
//   try {
//     const response = await apiInterceptor.post(
//       `/chat/room/${roomId}/message`,
//       message,
//       {
//         headers: {
//           "Content-Type": "text/plain",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error sending message:", error);
//     throw error;
//   }
// };


// /* =============================
//    CREATE CHAT ROOM
// ============================= */

// export const createChatRoom = async (roomData) => {
//   try {
//     const response = await apiInterceptor.post("/chat/room", roomData);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating chat room:", error);
//     throw error;
//   }
// };

import apiInterceptor from "../interceptors/interceptors";

/* =============================
   GET STAFF
============================= */

export const getStaffList = async () => {
  const res = await apiInterceptor.get("/staff/alllist");
  return res.data;
};

/* =============================
   GET CHAT ROOMS
============================= */

export const getChatRooms = async () => {
  const res = await apiInterceptor.get("/chat/my-rooms");
  console.log(res.data);
  return res.data;
};

/* =============================
   GET ROOM MESSAGES
============================= */

export const getRoomMessages = async (roomId) => {
  const res = await apiInterceptor.get(`/room/${roomId}/messages`);
  console.log("chat mess",res.data);
  return res.data;
};

/* =============================
   CREATE ROOM
============================= */

export const createChatRoom = async (roomData) => {
  const res = await apiInterceptor.post("/chat/room", roomData);
  return res.data;
};

export const deleteRoom = async (roomId) => {
   const res = await apiInterceptor.delete(`/room/${roomId}`);
 
  return res.data;
};