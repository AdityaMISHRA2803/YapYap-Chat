import { useState } from "react";

export default function App() {
  const link = "https://yapyap-chat-1.onrender.com/";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 shadow-md rounded-lg p-10 w-full max-w-lg border border-gray-300">
        <div className="text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl font-semibold text-gray-900">
            YapYap-Chat
          </h1>

          {/* Message */}
          <p className="text-gray-700 text-base leading-relaxed">
            The link you visited is no longer active.  
            Please use the updated deployment link below.
          </p>

          {/* Button */}
          <div className="pt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-colors"
            >
              Open YapYap-Chat
            </a>
          </div>

          {/* Copy Section */}
          <div className="pt-4 text-sm text-gray-600">
            <p>If the button doesn’t work, copy this link:</p>
            <div className="mt-2 p-3 bg-white border rounded-md flex items-center justify-between">
              <span className="text-gray-800 font-mono text-xs break-all">
                {link}
              </span>
              <button
                onClick={handleCopy}
                className="ml-3 px-3 py-1 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
