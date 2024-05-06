
// import React, { useState } from "react";
// import useMyFiles from "@/apiHooks/useMyFiles";
// import FileUpload from "@/components/FileUpload";
// import MyFiles from "@/components/MyFiles";
// import Intro from "@/components/Intro";
// import ChatBox from "@/components/ChatBox";
// import Head from "next/head";
// import Header from "@/components/home/header";

// export default function Home() {
//   const [activeFile, setActiveFile] = useState();
//   const { files, isError, isLoading } = useMyFiles();
//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <>
//       <Head>
//         <title>DocTalker - Chat with my PDF</title>
//       </Head>
//       <main className={`w-full h-screen`}>
//         <Header/>
//         <div className={"max-w-7xl mx-auto"}>
//           <div
//             className={
//               "mt-5 px-5 lg:px-0 h-[calc(100vh-170px)] min-h-[calc(100vh-170px)]"
//             }
//           >
//             <div className={"grid lg:grid-cols-2 gap-10 h-[inherit]"}>
//               <div className="upload-button">
//                 <Intro />
//                 <FileUpload />
//                 <MyFiles setActiveFile={setActiveFile} files={files} />
//               </div>
//               <div className="chatbox">

//                 <ChatBox activeFile={activeFile} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
// import React, { useState } from "react";
// import useMyFiles from "@/apiHooks/useMyFiles";
// import FileUpload from "@/components/FileUpload";
// import MyFiles from "@/components/MyFiles";
// import Intro from "@/components/Intro";
// import ChatBox from "@/components/ChatBox";


// import Head from "next/head";
// import Header from "@/components/home/header";
// const options = {
//   continuous: true, // Allow continuous speech recognition
//   interimResults: false, // Don't show interim results
// };

// export default function Home() {
//   const [activeFile, setActiveFile] = useState();
//   const { files, isError, isLoading } = useMyFiles();

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <>
    
//       <Head>
//         <title>IIITDMJ Bot</title>
//       </Head>
//       <main className={`w-full h-screen`}>
//         {/* <Header /> */}
//         <div className={"max-w-7xl mx-auto"}>
        
//           <div
//             className={
//               "mt-5 px-5 lg:px-0 h-[calc(100vh-170px)] min-h-[calc(100vh-170px)]"
//             }
//           >
//             <div className={"grid lg:grid-cols-2 gap-10 h-[inherit]"}>
//               <div className="upload-button">
//                 {/* <Intro />
//                 <FileUpload /> */}
//                 {/* <MyFiles setActiveFile={setActiveFile} files={files} /> */}
//               </div>
//               <div className="chatbox">
//                 {/* Wrap ChatBox with SpeechRecognition */}
               
//                   <ChatBox activeFile={activeFile} />
                
//               </div>
//             </div>
//           </div>
         
//         </div>
//       </main>
      
//     </>
//   );
// }
import React, { useState } from "react";
import useMyFiles from "@/apiHooks/useMyFiles";

import ChatBox from "@/components/ChatBox";
import Head from "next/head";


export default function Home() {
  const [activeFile, setActiveFile] = useState();
  const { files, isError, isLoading } = useMyFiles();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>IIITDMJ Bot</title>
      </Head>
      <main className="bg-Neutral w-full h-full flex flex-col transform-scale-150"> {/* Adapted for full height */}
      <ChatBox activeFile={activeFile} />
        <div className="max-w-840 max-h-400 mx-auto px-2 py-4"> {/* Constrain to 840px width */}
          <div className="h-full transform scale-150 mt-12 flex-1"> {/* Ensure full height */}
          
            <div className="flex flex-col justify-between h-full flex-1"> {/* Adjusted to one column */}
              <div className="chatbox"> {/* Chat box fills the remaining space */}
               
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
