import AnimatedEllipsis from "@/components/AnimatedEllipsis";

// export default function Chat({query, response}) {
// 	return (

// 	)
// }

import React from "react";
import QRCode from "qrcode.react";

const Chat = ({ query, response }) => {
  // Function to extract latitude and longitude from a response
  const extractCoordinates = (text) => {
    const latRegex = /Latitude\s*:\s*(-?\d+\.\d+)/i; // Regex to find latitude
    const lonRegex = /Longitude\s*:\s*(-?\d+\.\d+)/i; // Regex to find longitude

    const latMatch = latRegex.exec(text);
    const lonMatch = lonRegex.exec(text);

    if (latMatch && lonMatch) {
      return {
        latitude: parseFloat(latMatch[1]),
        longitude: parseFloat(lonMatch[1]),
      };
    }
    return null; // No coordinates found
  };

  const coordinates = extractCoordinates(response); // Check for coordinates

  return (
    <div>
      {query && (
        <div className={"w-full p-2 border-b mb-2 flex items-center"}>
          <div
            className={"w-8 h-8 flex-shrink-0 rounded-full bg-amber-600 mr-2"}
          />
          <div>{query}</div>
        </div>
      )}
      <div className={"w-full p-2 border-b mb-2 flex items-center justify-end"}>
        <div>
          {response ? (
            coordinates ? (
              // If coordinates found, generate a QR code for Google Maps
              <QRCode
                value={`https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`}
                size={200} // Size of the QR code
              />
            ) : (
              response
            )
          ) : (
            <span>Loading...</span> // Or another placeholder for a missing response
          )}
        </div>
        <div
          className={"w-8 h-8 flex-shrink-0 rounded-full bg-purple-500 ml-2"}
        />
      </div>
    </div>
  );
};

export default Chat;
