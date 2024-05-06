// import { MdMic, MdMicOff } from "react-icons/md";
// import { useEffect, useRef, useState } from "react";
// import toast from "react-hot-toast";
// import Chat from "@/components/ChatBox/Chat";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import ReadyAlert from "./ReadyAlert";

// export default function ChatBox({ activeFile }) {
//   const divRef = useRef(null);
//   const [chat, setChat] = useState([]);
//   const [inputText, setInputText] = useState("");
//   const [submitTimeout, setSubmitTimeout] = useState(null);

//   const { transcript, listening, finalTranscript } = useSpeechRecognition();

//   useEffect(() => {
//     if (transcript) {
//       setInputText(transcript); // Sync input field with transcript
//     }
//   }, [transcript]); // Update on transcript change

//   const scrollToBottom = () => {
//     if (divRef.current) {
//       divRef.current.scrollTop = divRef.current.scrollHeight; // Scroll to bottom after new message
//     }
//   };

//   useEffect(() => {
//     scrollToBottom(); // Scroll when chat length changes
//   }, [chat.length]);

//   const handleSubmit = async () => {
//     const trimmedText = inputText.trim();
//     if (trimmedText.split(" ").length < 3) {
//       return; // Avoid submitting on very short input
//     }

//     setInputText(""); // Clear input field
//     SpeechRecognition.stopListening(); // Stop listening on submit

//     // Add new chat entry
//     setChat((prevChat) => [...prevChat, { query: trimmedText, response: null }]);

//     try {
//       const response = await fetch("/api/querybyweb", {
//         method: "POST",
//         body: JSON.stringify({ query: trimmedText }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         const jsonResponse = await response.json();
//         setChat((prevChat) => {
//           const updatedChat = [...prevChat];
//           updatedChat[updatedChat.length - 1].response = jsonResponse.response;
//           return updatedChat;
//         });
//       } else {
//         throw new Error("Failed to fetch response");
//       }
//     } catch (error) {
//       toast.error("An error occurred while fetching the response.");
//     }
//   };

//   useEffect(() => {
//     if (!listening && finalTranscript) {
//       const timeout = setTimeout(handleSubmit, 2000); // Auto-submit after 2 seconds of silence
//       setSubmitTimeout(timeout);
//     }

//     // Clear timeout to avoid unexpected behavior
//     return () => {
//       if (submitTimeout) {
//         clearTimeout(submitTimeout);
//       }
//     };
//   }, [listening, finalTranscript]); // Update when listening state changes

//   const handleMicToggle = () => {
//     if (listening) {
//       SpeechRecognition.stopListening(); // Stop listening if it's on
//     } else {
//       SpeechRecognition.startListening(); // Start listening if it's off
//     }
//   };
//   return (
//     <div className={"border-Accent h-full flex flex-col bg-Primary"}>
//     <div className={"flex flex-col border border-Accent text-center py-1 text-white"}>
//       {activeFile ? activeFile.fileName : "IIITDMJ's Voice Assisted Bot"}
//     </div>
//     <div className={"border text-black border-Accent bg-Secondary p-3 grow flex flex-col justify-end h-[calc(150vh-300px)]"}>
//       {chat.length > 0 ? (
//         <div ref={divRef} className={"overflow-auto"}>
//           {chat.map((entry, index) => (
//             <Chat key={index} query={entry.query} response={entry.response} />
//           ))}
//         </div>
//       ) : (
//         <ReadyAlert/>
//       )}
//     </div>
  
//     <div className={"bg-Neutral p-3 flex justify-between items-center space-x-2 "}>
//       <input
//         className={" bg-Neutral text-dark w-full m-0 outline-0 flex-1"}
//         placeholder={"Type or speak here..."}
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)} // Allow manual input
//       />
//       <button type="button" onClick={handleMicToggle}>
//         {listening ? <MdMicOff size={30} color="black" /> : <MdMic size={30} color="black" />}
//       </button>
//     </div>
//   </div>
  
//   );
// }
// import { MdMic, MdMicOff } from "react-icons/md";
// import { useEffect, useRef, useState } from "react";
// import toast from "react-hot-toast";
// import Chat from "@/components/ChatBox/Chat";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import ReadyAlert from "./ReadyAlert";

// // Function to convert text to speech
// const speakText = (text) => {
//   const synth = window.speechSynthesis;

//   if (!synth) {
//     console.error("Speech synthesis not supported.");
//     return;
//   }

//   if (synth.speaking) {
//     synth.cancel(); // Cancel any ongoing speech
//   }

//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.rate = 1; // Normal rate
//   utterance.pitch = 1; // Normal pitch
//   utterance.volume = 1; // Full volume
//   synth.speak(utterance);
// };

// export default function ChatBox({ activeFile }) {
//   const divRef = useRef(null);
//   const [chat, setChat] = useState([]);
//   const [inputText, setInputText] = useState("");
//   const [submitTimeout, setSubmitTimeout] = useState(null);

//   const { transcript, listening, finalTranscript } = useSpeechRecognition();

//   useEffect(() => {
//     if (transcript) {
//       setInputText(transcript); // Sync input with transcript
//     }
//   }, [transcript]);

//   const scrollToBottom = () => {
//     if (divRef.current) {
//       divRef.current.scrollTop = divRef.current.scrollHeight; // Scroll to bottom on new message
//     }
//   };

//   useEffect(() => {
//     scrollToBottom(); // Scroll when chat length changes
//   }, [chat.length]);

//   const handleSubmit = async () => {
//     const trimmedText = inputText.trim();
//     if (trimmedText.split(" ").length < 3) {
//       return; // Avoid submitting if too short
//     }

//     setInputText(""); // Clear input field
//     SpeechRecognition.stopListening(); // Stop listening on submit

//     // Add a new chat entry
//     setChat((prevChat) => [...prevChat, { query: trimmedText, response: null }]);

//     try {
//       const response = await fetch("/api/querybyweb", {
//         method: "POST",
//         body: JSON.stringify({ query: trimmedText }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         const jsonResponse = await response.json();
//         setChat((prevChat) => {
//           const updatedChat = [...prevChat];
//           updatedChat[updatedChat.length - 1].response = jsonResponse.response;
//           return updatedChat;
//         });

//         // Speak the response
//         speakText(jsonResponse.response);
//       } else {
//         throw new Error("Failed to fetch response");
//       }
//     } catch (error) {
//       toast.error("An error occurred while fetching the response.");
//     }
//   };

//   useEffect(() => {
//     if (!listening && finalTranscript) {
//       const timeout = setTimeout(handleSubmit, 2000); // Auto-submit after 2 seconds of silence
//       setSubmitTimeout(timeout);
//     }

//     // Clear timeout to avoid unexpected behavior
//     return () => {
//       if (submitTimeout) {
//         clearTimeout(submitTimeout);
//       }
//     };
//   }, [listening, finalTranscript]); // Update when listening state changes

//   const handleMicToggle = () => {
//     if (listening) {
//       SpeechRecognition.stopListening(); // Stop listening if it's on
//     } else {
//       SpeechRecognition.startListening(); // Start listening if it's off
//     }
//   };

//   return (
//     <div className={"border-Accent h-full flex flex-col bg-Primary"}>
//       <div className={"flex flex-col border border-Accent text-center py-1 text-white"}>
//         {activeFile ? activeFile.fileName : "IIITDMJ's Voice-Assisted Bot"}
//       </div>
//       <div className={"border text-black border-Accent bg-Secondary p-3 grow flex flex-col justify-end h-[calc(150vh-300px)]"}>
//         {chat.length > 0 ? (
//           <div ref={divRef} className={"overflow-auto"}>
//             {chat.map((entry, index) => (
//               <Chat key={index} query={entry.query} response={entry.response} />
//             ))}
//           </div>
//         ) : (
//           <ReadyAlert />
//         )}
//       </div>
  
//       <div className={"bg-Neutral p-3 flex justify-between items-center space-x-2"}>
//         <input
//           className={"bg-Neutral text-dark w-full m-0 outline-0 flex-1"}
//           placeholder={"Type or speak here..."}
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)} // Allow manual input
//         />
//         <button type="button" onClick={handleMicToggle}>
//           {listening ? <MdMicOff size={30} color="black" /> : <MdMic size={30} color="black" />}
//         </button>
//       </div>
//     </div>
//   );
// }
import { MdMic, MdMicOff, MdSend } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Chat from "@/components/ChatBox/Chat";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ReadyAlert from "@/components/ChatBox/ReadyAlert";

// Function to convert text to speech
const speakText = (text) => {
  const synth = window.speechSynthesis;

  if (!synth) {
    console.error("Speech synthesis not supported.");
    return;
  }

  if (synth.speaking) {
    synth.cancel(); // Cancel any ongoing speech
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1; // Normal rate
  utterance.pitch = 1; // Normal pitch
  utterance.volume = 1; // Full volume
  synth.speak(utterance);
};

export default function ChatBox({ activeFile }) {
  const divRef = useRef(null);
  const [chat, setChat] = useState([]);
  const [inputText, setInputText] = useState("");
  const [submitTimeout, setSubmitTimeout] = useState(null);

  const { transcript, listening, finalTranscript } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInputText(transcript); // Sync input field with transcript
    }
  }, [transcript]);

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight; // Scroll to bottom on new message
    }
  };

  useEffect(() => {
    scrollToBottom(); // Scroll when chat length changes
  }, [chat.length]);

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault(); // Prevent default form submission behavior
    }

    const trimmedText = inputText.trim();
    if (trimmedText.split(" ").length < 3) {
      return; // Avoid submitting on very short input
    }

    setInputText(""); // Clear input field
    SpeechRecognition.stopListening(); // Stop listening on submit

    // Add a new chat entry
    setChat((prevChat) => [...prevChat, { query: trimmedText, response: null }]);

    try {
      const response = await fetch("/api/querybyweb", {
        method: "POST",
        body: JSON.stringify({ query: trimmedText }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        setChat((prevChat) => {
          const updatedChat = [...prevChat];
          updatedChat[updatedChat.length - 1].response = jsonResponse.response;
          return updatedChat;
        });

        // Speak the response
        speakText(jsonResponse.response);
      } else {
        setChat((prevChat) => {
          const updatedChat = [...prevChat];
          updatedChat[updatedChat.length - 1].response = "Oops? an error occured";
          return updatedChat;
        });
        throw new Error("Failed to fetch response");
      }
    } catch (error) {
      toast.error("An error occurred while fetching the response.");
    }
  };

  useEffect(() => {
    if (!listening && finalTranscript) {
      const timeout = setTimeout(handleSubmit, 2000); // Auto-submit after 2 seconds of silence
      setSubmitTimeout(timeout);
    }

    // Clear timeout to avoid unexpected behavior
    return () => {
      if (submitTimeout) {
        clearTimeout(submitTimeout);
      }
    };
  }, [listening, finalTranscript]);

  const handleMicToggle = () => {
    if (listening) {
      SpeechRecognition.stopListening(); // Stop listening if it's on
    } else {
      SpeechRecognition.startListening(); // Start listening if it's off
    }
  };

  return (
    <div className={"border-Accent h-full flex flex-col bg-Primary"}>
      <div className={"flex flex-col border border-Accent text-center py-1 text-white"}>
        {activeFile ? activeFile.fileName : "IIITDMJ's Voice-Assisted Bot"}
      </div>
      <div className={"border text-black border-Accent bg-Secondary p-3 grow flex flex-col justify-end h-[calc(150vh-300px)]"}>
        {chat.length > 0 ? (
          <div ref={divRef} className={"overflow-auto"}>
            {chat.map((entry, index) => (
              <Chat key={index} query={entry.query} response={entry.response} />
            ))}
          </div>
        ) : (
          <ReadyAlert />
        )}
      </div>
  
      <form onSubmit={handleSubmit}>
        <div className={"bg-Neutral p-3 flex justify-between items-center space-x-2"}>
          <input
            className={"bg-Neutral text-dark w-full m-0 outline-0 flex-1"}
            placeholder={"Type or speak here..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} // Allow manual input
          />
          <button type="button" onClick={handleMicToggle}>
            {listening ? <MdMicOff size={30} color="black" /> : <MdMic size={30} color="black" />}
          </button>
          <button type="submit">
            <MdSend size={30} color="black" />
          </button>
        </div>
      </form>
    </div>
  );
}
