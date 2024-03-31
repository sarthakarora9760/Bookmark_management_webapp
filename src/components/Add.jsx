import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const userid=useSelector((state)=>state.username.value)
    const navigate=useNavigate()


  async function handleClick(e) {
    const uri = "https://bookmarkmanager-wg1i.onrender.com/api/protected/addbookmark";
      const data = {
        url: document.getElementById("url").value,
        title: document.getElementById("titlevalue").value,
        category: "First category",
        uid: userid,
        tags: document.getElementById("tags").value,
      };
      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      await fetch(uri, request).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      });
      alert("Bookmark added to your personalized list successfully! Note: To add bookmark to your chrome, use this chrome extension : ")
      navigate("/app")
  }
  return (
    <div>
      <div class="bg-black text-white bg-opacity-90 w-full h-[100vh] p-6">
        <div class="navbar flex justify-between mx-6">
          <div class="logo flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="#ffffff" d="M0 0h24v24H0z" />
              <path d="M12 2L10.55 4H5v16h14V4h-5.55L12 2zm-2 15l-3.5-2.5 1-1.38L10 14.11l2.5 1.86 3.5-2.5-1-3.28-3.5 2.5-3.5-2.5 1 3.28L4.5 13.11 5.55 15 7 13.62z" />
            </svg>
            <p class="font-bold">Add new</p>
          </div>
          <div class="search flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="#ffffff" d="M0 0h24v24H0z" />
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25a1 1 0 0 0 1.41-1.41L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="#ffffff" d="M7 10l5 5 5-5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
        <div class="main flex flex-col w-full gap-8 mt-4">
          <div class="flex w-[90%] mx-auto gap-5">
            <img
              src="./src/assets/bookmarkcover.jfif"
              class="w-[20%] rounded-xl"
            />
            <div class="flex flex-col w-[80%]">
              <h1>Bookmark manager- All your bookmarks at one place</h1>
              <h2 class="opacity-60">All in one bookmark manager. For your</h2>
            </div>
          </div>
          <div class="flex w-[90%] mx-auto gap-5">
            <article class="w-[20%]">Title: </article>
            <input
              id="titlevalue"
              class="w-[80%] rounded-md px-2 text-black"
              type="text"
              placeholder="Enter Title"
            />
          </div>
          <div class="flex w-[90%] mx-auto gap-5">
            <article class="w-[20%]">Collection: </article>
            <div class="flex w-[80%]">
              <button class="bg-black rounded-md opacity-70 px-3 cursor-pointer">
                Unsorted
              </button>
              <button class="bg-red-400 rounded-md opacity-70 px-3 cursor-pointer">
                Design
              </button>
              <button class="bg-green-300 rounded-md opacity-70 px-3 cursor-pointer">
                Awesome Tech
              </button>
            </div>
          </div>
          <div class="flex w-[90%] mx-auto gap-5">
            <article class="w-[20%]">Tags: </article>
            <input
              id="tags"
              class="w-[80%] rounded-md px-2 text-black"
              type="text"
              placeholder="Add Tags"
            />
          </div>
          <div class="flex w-[90%] mx-auto gap-5">
            <article class="w-[20%]">URL: </article>
            <input
              id="url"
              class="w-[80%] rounded-md px-2 text-black"
              type="text"
              placeholder="Enter URL here in https://"
            />
          </div>
        </div>
        <div class="flex w-[90%] mx-auto gap-5 mt-6 justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="#ffffff" d="M0 0h24v24H0z" />
            <path
              fill="rgba(255, 0, 0, 0.3)"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="#ffffff" d="M0 0h24v24H0z" />
            <path
              fill="rgba(255, 0, 0, 0.3)"
              d="M12 2a2.23 2.23 0 0 0-2.2 2H14a2.23 2.23 0 0 0-2.2-2zm5 6v2a6.91 6.91 0 0 0-1.5-4.39L15.07 6.5A4.69 4.69 0 0 1 17 10zm-10 0a4.69 4.69 0 0 1 1.93-3.9L8.5 4.61A6.91 6.91 0 0 0 7 9zM7 21a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1H7zm7-6c0 1.1-.9 2-2 2s-2-.9-2-2h4z"
            />
          </svg>
        </div>
        <div class="footer flex w-[90%] justify-between mt-6 ml-6 cursor-pointer">
          <div class="hightlights flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="#ffffff" d="M0 0h24v24H0z" />
              <path
                fill="rgba(0, 0, 0, 0.5)"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
              <path
                fill="rgba(0, 0, 0, 0.5)"
                d="M14.85 9.54c.13-.5.2-1.02.2-1.54 0-2.48-2.02-4.5-4.5-4.5S6.5 5.52 6.5 8c0 .52.07 1.04.2 1.54A3.995 3.995 0 0 0 8 15.4c0 .72-.19 1.4-.51 1.98l-2.28 5.36a1 1 0 0 0 1.31 1.3l5.35-2.28c.57-.24 1.25-.5 1.96-.51a4 4 0 0 0 4-4c0-1.04-.4-2.01-1.15-2.75a4.004 4.004 0 0 0-2.98-1.15zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
            <button class="cursor-pointer">hightlights</button>
          </div>
          <div class="tabs flex gap-3 items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="#ffffff" d="M0 0h24v24H0z" />
              <path
                fill="rgba(0, 0, 0, 0.5)"
                d="M8 2v2H4v16h16V4h-4V2H8zM6 6h12v12H6V6zm5 13v2h2v-2h-2zm0-10v2h2V9h-2zm0 5v2h2v-2h-2z"
              />
            </svg>
            <button>Add Tabs</button>
          </div>
          <button
            onClick={(e) => handleClick(e)}
            id="save"
            class="text-black p-2 bg-orange-300 cursor-pointer rounded-xl"
          >
            Save
          </button>
        </div>
        <script src="script.js"></script>
      </div>
    </div>
  );
};

export default Add;
