// global.d.ts is a special file types added here can be used globally in the project without importing them.
type ConversationType = {
  id: string;
  fullName: string;
  profilePic: string;
};

type MessageType = {
  id: string;
  body: string;
  senderId: string;
  createdAt: string;
};
