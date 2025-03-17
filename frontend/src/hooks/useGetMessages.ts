import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation) return;
      setLoading(true);
      setMessages([]);
      try {
      } catch (error: any) {
        toast.error(error.messages);
      } finally {
        setLoading(false);
      }
    };
    getMessages();
  }, [selectedConversation, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
