import React, { useState } from "react";
import { SlRefresh } from "react-icons/sl";
import { AiOutlineCopy, AiOutlineSave } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { addPassword } from "./db";
import TableComponent from "./TableComponent";
import { generateRandomPassword, isValidUrl } from "./utils";

const MainPage = () => {
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [length, setLength] = useState(8);

  // const generatePassword = () => {
  //   const randomPassword = Math.random().toString(36).slice(-8);
  //   setPassword(randomPassword);
  // };

  const generatePassword = () => {
    if (length > 3 && length < 21) {
      const randomPassword = generateRandomPassword(length);
      setPassword(randomPassword);
    } else {
      toast("Password should be minimum 4 & maximum 20 characters");
    }
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    toast("Password Copied to clipboard");
  };

  const savePassword = async () => {
    if (isValidUrl(website)) {
      console.log("Website:", website, "Password:", password);
      addPassword(website, password);
      toast("Password saved successfully");
    } else {
      toast("Enter valid URL");
    }
  };

  return (
    <div className="max-w-5xl px-4 mx-auto my-4 pt-4">
      <Toaster
        toastOptions={{
          className: "bg-cyan-800 text-cyan-100",
          duration: 1000,
          style: {
            background: "#083344",
            color: "#cffafe",
          },
        }}
      />
      <div>
        <h1 className="text-center text-4xl font-bold text-teal-800">
          Password Generator
        </h1>
        <input
          className="w-40 rounded-md border-2 border-teal-700 mr-2 px-3.5 py-4 text-slate-900 shadow-sm"
          placeholder="Length:"
          type="number"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
        <button
          className="inline-flex items-center rounded-md bg-teal-900 px-2 py-4 my-4 text-md text-teal-200 drop-shadow-xl hover:bg-teal-800"
          title="generate-password-button"
          onClick={generatePassword}
        >
          Generate Password
          <span className="ml-4">
            <SlRefresh size={28} />
          </span>
        </button>
        <div className="block flex items-center mt-4">
          <input
            className="w-3/4 rounded-md border-2 border-teal-700 px-3.5 py-4 text-slate-900 shadow-sm"
            placeholder="Password:"
            value={password}
            readOnly
          />
          <button
            className="ml-4"
            title="copy-button"
            onClick={copyPassword}
          >
            <AiOutlineCopy
              size={32}
              className="text-teal-900 hover:text-blue-600"
            />
          </button>
        </div>

        <div className="block flex items-center mt-4">
          <input
            className="w-3/4 rounded-md border-2 border-teal-700 px-3.5 py-4 text-slate-900 shadow-sm"
            placeholder="Website:"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <button
            className="ml-4 my-2"
            title="save-button"
            onClick={savePassword}
          >
            <AiOutlineSave
              size={32}
              className="text-teal-900 hover:text-blue-600"
            />
          </button>
        </div>

        {/* <div className="mt-4">
          <h2 className="text-lg font-bold">Saved Passwords:</h2>
          {passwords && (
            <ul>
              {passwords.map((entry) => (
                <li key={entry.id}>
                  <span>{entry.website}: </span>
                  <span>{entry.password}</span>
                </li>
              ))}
            </ul>
          )}
        </div> */}
        <TableComponent />
      </div>
    </div>
  );
};

export default MainPage;
