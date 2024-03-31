import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const App = () => {
  const navigate = useNavigate();
  const [bookmarkscount,setbookmarkscount]=useState(0)
  const [bookmarks,setbookmarks] =useState([])
  const userid=useSelector((state)=>state.username.value)


  function handleclick(e) {
    navigate("/add");
  }
  
  //Getting bookmarks count from backend for a particular user id...
  async function getbookmarkscount() {
    const baseurl = "https://bookmarkmanager-wg1i.onrender.com/api/protected/getbookmarkscount";
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "uid": userid
      },
    };
    await fetch(baseurl, request).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      (async ()=>{
        const resp=await response.json()
        setbookmarkscount(resp.count)
      })()
    });
  }


  //Getting bookmarks for a user id...
  async function getbookmarks(){
    const baseurl = "https://bookmarkmanager-wg1i.onrender.com/api/protected/getbookmarks";
    const request = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "uid": userid
      },
    };
    await fetch(baseurl, request).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      (async ()=>{
        const resp=await response.json()
        setbookmarks(resp)
      })()
    });

  }


  useEffect(() => {
    getbookmarkscount()
  }, [bookmarkscount]);

  useEffect(() => {
    getbookmarks()
  }, [bookmarks]);
  
  return (
    <>
      <div className="main flex">
        <div className="left w-[20%] bg-black opacity-90 text-white h-[100vh] overflow-auto">
          <div className="accountnav flex justify-between items-center p-3">
            <button className="hover:bg-gray-950 cursor-pointer">
              Username
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="#ffffff" d="M0 0h24v24H0z" />
              <path d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H3a1 1 0 0 1 0-2h8V3a1 1 0 0 1 1-1z" />
            </svg>
          </div>
          <div className="allbookmarks flex justify-between hover:bg-gray-950 cursor-pointer mb-3 px-2">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="#ffffff"
                  d="M18.363 9.574A6.503 6.503 0 0 0 7.999 4.5a6.5 6.5 0 1 0 5.918 9.172A4.002 4.002 0 0 0 18 17c1.657 0 3-1.343 3-3s-1.343-3-2.637-3.426z"
                />
              </svg>
              All Bookmarks
            </div>
            <p>{bookmarkscount}</p>
          </div>
          <div className="collections flex flex-col border border-x-0 border-y-1 py-6 gap-2">
            <h1 className="font-bold p-2">Collections</h1>
            <div className="ele flex justify-between px-2 hover:bg-gray-950 cursor-pointer">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#ffffff"
                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm1.588 15.177h.012c.187-.005.348-.115.43-.277.072-.146.05-.324-.063-.456l-1.816-2.666c-.233-.342-.635-.566-1.079-.566-.447 0-.85.223-1.079.567l-1.816 2.666c-.112.132-.135.31-.064.456.071.147.242.26.429.264l.002.001h.012l1.538-.002 1.233-1.8-.187 1.758c-.011.101.033.2.107.272.075.072.175.113.282.113h.035l1.756-.181-1.767 2.592z"
                  />
                </svg>
                Social Media
              </div>
              2
            </div>
            <div className="ele flex justify-between px-2 hover:bg-gray-950 cursor-pointer">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="#ffffff" d="M0 0h24v24H0z" />
                  <path d="M5.64 6.36A8.961 8.961 0 0 1 12 4a8.96 8.96 0 0 1 6.36 2.64 8.96 8.96 0 0 1 2.64 6.36 8.96 8.96 0 0 1-2.64 6.36 8.96 8.96 0 0 1-6.36 2.64 8.96 8.96 0 0 1-6.36-2.64 8.96 8.96 0 0 1-2.64-6.36zm2.8 2.8a6.96 6.96 0 0 0 4.96 2.04 6.975 6.975 0 0 0 2.04-4.96 6.975 6.975 0 0 0-2.04-4.96 6.96 6.96 0 0 0-4.96-2.04 6.96 6.96 0 0 0-4.96 2.04 6.96 6.96 0 0 0-2.04 4.96 6.96 6.96 0 0 0 2.04 4.96zm2.52-2.52A5.013 5.013 0 0 1 12 8a5.013 5.013 0 0 1 3.56 1.48 5.013 5.013 0 0 1 1.48 3.56 5.013 5.013 0 0 1-1.48 3.56 5.013 5.013 0 0 1-3.56 1.48 5.013 5.013 0 0 1-3.56-1.48 5.013 5.013 0 0 1-1.48-3.56 5.013 5.013 0 0 1 1.48-3.56z" />
                </svg>
                Productivity
              </div>
              3
            </div>
          </div>
          <div className="filters flex flex-col border border-y-1 border-x-0 py-6 gap-2">
            <h1 className="font-bold p-2">Filters</h1>
            <div className="elef flex justify-between px-2 hover:bg-gray-950 cursor-pointer">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#ffffff"
                    d="M7.5 15a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm8-6a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm-4 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm4-12a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm-12 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm8-6a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z"
                  />
                </svg>
                Links
              </div>
              2
            </div>
            <div className="elef flex justify-between px-2 hover:bg-gray-950 cursor-pointer">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#ffffff"
                    d="M7.5 15a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm8-6a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm-4 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm4-12a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm-12 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm8-6a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z"
                  />
                </svg>
                Links
              </div>
              2
            </div>
            <div className="elef flex justify-between px-2 hover:bg-gray-950 cursor-pointer">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#ffffff"
                    d="M7.5 15a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm8-6a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm-4 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm4-12a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm-12 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm8-6a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z"
                  />
                </svg>
                Links
              </div>
              2
            </div>
            <div className="elef flex justify-between px-2 hover:bg-gray-950 cursor-pointer">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#ffffff"
                    d="M7.5 15a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm8-6a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm-4 6a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm4-12a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm-12 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm8-6a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0z"
                  />
                </svg>
                Links
              </div>
              2
            </div>
          </div>
          <div className="fixed bottom-0 w-full overflow-auto">
            <a href="#" target="_blank" class="upgrade-R9fx">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="184"
                class="pic-gXiJ"
              >
                <defs>
                  <filter id="pic_svg__a">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                    ></feColorMatrix>
                  </filter>
                  <filter id="pic_svg__b">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                    ></feColorMatrix>
                  </filter>
                  <filter id="pic_svg__c">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                    ></feColorMatrix>
                  </filter>
                  <filter id="pic_svg__d">
                    <feColorMatrix
                      in="SourceGraphic"
                      values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
                    ></feColorMatrix>
                  </filter>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(0 58)">
                    <rect width="32" height="32" fill="#E13E54" rx="6"></rect>
                    <path
                      fill="#FFF"
                      fill-rule="nonzero"
                      d="m18.9 18.2 3 3a.5.5 0 1 1-.8.7l-3-3a5 5 0 1 1 .7-.7zM15 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                    ></path>
                  </g>
                  <g transform="translate(0 20)">
                    <rect width="32" height="32" fill="#6D7278" rx="6"></rect>
                    <g filter="url(#pic_svg__a)">
                      <path
                        fill="#000"
                        fill-rule="nonzero"
                        d="m16 9-3.5 5h7l-3.4-5zm1.3 0H20c.6 0 1.3.3 1.6.8l3.1 3.7c.2.1.3.3.3.5h-4.2l-3.5-5zm-2.6 0H12c-.5 0-1.3.3-1.6.8l-3.1 3.7a2 2 0 0 0-.3.5h4.2l3.5-5zm2.6 14.7.1-.1 7.2-7.2c.4-.4.6-.9.6-1.4H20l-2.6 8.7zm-1.2.5h-.2L13.2 15h5.6l-2.7 9.2zM6.8 15c0 .5.2 1 .6 1.4l7.2 7.2.1.1-2.6-8.7H6.8z"
                      ></path>
                    </g>
                  </g>
                  <path
                    fill="#FFD229"
                    d="M45.7 76h16.6c2.7 0 3.7.3 4.6.8 1 .5 1.8 1.3 2.3 2.3.5 1 .8 2 .8 4.6v16.6c0 2.7-.3 3.7-.8 4.6-.5 1-1.3 1.8-2.3 2.3-1 .5-2 .8-4.6.8H45.7c-2.7 0-3.7-.3-4.6-.8-1-.5-1.8-1.3-2.3-2.3-.5-1-.8-2-.8-4.6V83.7c0-2.7.3-3.7.8-4.6.5-1 1.3-1.8 2.3-2.3 1-.5 2-.8 4.6-.8z"
                  ></path>
                  <path
                    fill="#000"
                    fill-rule="nonzero"
                    d="M49 100a5 5 0 0 1-1-10c.4-3.3 3-6 6-6 3.3 0 6 3.1 6 7v1a4 4 0 1 1 0 8H49z"
                    opacity="0.4"
                  ></path>
                  <path
                    fill="#12AB66"
                    d="M45.7 114h16.6c2.7 0 3.7.3 4.6.8 1 .5 1.8 1.3 2.3 2.3.5 1 .8 2 .8 4.6v16.6c0 2.7-.3 3.7-.8 4.6-.5 1-1.3 1.8-2.3 2.3-1 .5-2 .8-4.6.8H45.7c-2.7 0-3.7-.3-4.6-.8-1-.5-1.8-1.3-2.3-2.3-.5-1-.8-2-.8-4.6v-16.6c0-2.7.3-3.7.8-4.6.5-1 1.3-1.8 2.3-2.3 1-.5 2-.8 4.6-.8z"
                  ></path>
                  <path
                    fill="#FFF"
                    fill-rule="nonzero"
                    d="M54 122a8 8 0 0 1 .2 16H54a8 8 0 1 1 0-16zm0 3a4 4 0 0 0-4 4v5l2-2 2 2 2-2 2 2v-5a4 4 0 0 0-4-4zm-1.5 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  ></path>
                  <path
                    fill="#608381"
                    d="M45.7 152h16.6c2.7 0 3.7.3 4.6.8 1 .5 1.8 1.3 2.3 2.3.5 1 .8 2 .8 4.6v16.6c0 2.7-.3 3.7-.8 4.6-.5 1-1.3 1.8-2.3 2.3-1 .5-2 .8-4.6.8H45.7c-2.7 0-3.7-.3-4.6-.8-1-.5-1.8-1.3-2.3-2.3-.5-1-.8-2-.8-4.6v-16.6c0-2.7.3-3.7.8-4.6.5-1 1.3-1.8 2.3-2.3 1-.5 2-.8 4.6-.8z"
                  ></path>
                  <path
                    fill="#553CDA"
                    d="M45.7 38h16.6c2.7 0 3.7.3 4.6.8 1 .5 1.8 1.3 2.3 2.3.5 1 .8 2 .8 4.6v16.6c0 2.7-.3 3.7-.8 4.6-.5 1-1.3 1.8-2.3 2.3-1 .5-2 .8-4.6.8H45.7c-2.7 0-3.7-.3-4.6-.8-1-.5-1.8-1.3-2.3-2.3-.5-1-.8-2-.8-4.6V45.7c0-2.7.3-3.7.8-4.6.5-1 1.3-1.8 2.3-2.3 1-.5 2-.8 4.6-.8z"
                  ></path>
                  <g filter="url(#pic_svg__b)" transform="translate(38 38)">
                    <g fill="#000" fill-rule="nonzero">
                      <path d="M19.3 9h.1c.2 0 .4.2.4.5l-.4 3.5h3.3a.5.5 0 0 1 0 1h-3.4l-.6 4h4a.5.5 0 0 1 0 1h-4l-.5 3.6a.5.5 0 0 1-1 0v-.2l.4-3.4h-4l-.4 3.6a.5.5 0 0 1-1 0v-.2l.4-3.4H9.3a.5.5 0 0 1 0-1h3.4l.6-4h-4a.5.5 0 0 1 0-1h4l.5-3.6c0-.2.3-.4.5-.4h.1c.2 0 .4.2.4.5l-.4 3.5h4l.4-3.6c0-.2.3-.4.5-.4zm-1.6 9 .6-4h-4l-.6 4h4z"></path>
                      <path opacity="0.1" d="M15 15h3l-1 2h-3z"></path>
                    </g>
                  </g>
                  <path
                    fill="#E77438"
                    d="M45.7 0h16.6C65 0 66 .3 67 .8s1.8 1.3 2.3 2.3c.5 1 .8 2 .8 4.6v16.6c0 2.7-.3 3.7-.8 4.6-.5 1-1.3 1.8-2.3 2.3-1 .5-2 .8-4.6.8H45.7c-2.7 0-3.7-.3-4.6-.8-1-.5-1.8-1.3-2.3-2.3-.5-1-.8-2-.8-4.6V7.7c0-2.7.3-3.7.8-4.6.5-1 1.3-1.8 2.3-2.3 1-.5 2-.8 4.6-.8z"
                  ></path>
                  <path
                    fill="#1F7FC7"
                    d="M7.7 96h16.6c2.7 0 3.7.3 4.6.8 1 .5 1.8 1.3 2.3 2.3.5 1 .8 2 .8 4.6v16.6c0 2.7-.3 3.7-.8 4.6-.5 1-1.3 1.8-2.3 2.3-1 .5-2 .8-4.6.8H7.7c-2.7 0-3.7-.3-4.6-.8-1-.5-1.8-1.3-2.3-2.3-.5-1-.8-2-.8-4.6v-16.6c0-2.7.3-3.7.8-4.6.5-1 1.3-1.8 2.3-2.3 1-.5 2-.8 4.6-.8z"
                  ></path>
                  <g filter="url(#pic_svg__c)" transform="translate(0 96)">
                    <g
                      transform="translate(7 8)"
                      fill="#000"
                      fill-rule="nonzero"
                    >
                      <path d="M0 4h18v1H0z"></path>
                      <rect
                        width="18"
                        height="12"
                        y="4"
                        opacity="0.9"
                        rx="1"
                      ></rect>
                      <path
                        d="M0 1c0-.6.5-1 1-1h5l2 2H0V1zm0 1h17c.6 0 1 .4 1 1v1H0V2z"
                        opacity="0.6"
                      ></path>
                    </g>
                  </g>
                  <path
                    fill="#7AA3C1"
                    d="M7.7 134h16.6c2.7 0 3.7.3 4.6.8 1 .5 1.8 1.3 2.3 2.3.5 1 .8 2 .8 4.6v16.6c0 2.7-.3 3.7-.8 4.6-.5 1-1.3 1.8-2.3 2.3-1 .5-2 .8-4.6.8H7.7c-2.7 0-3.7-.3-4.6-.8-1-.5-1.8-1.3-2.3-2.3-.5-1-.8-2-.8-4.6v-16.6c0-2.7.3-3.7.8-4.6.5-1 1.3-1.8 2.3-2.3 1-.5 2-.8 4.6-.8z"
                  ></path>
                  <g filter="url(#pic_svg__d)" transform="translate(0 134)">
                    <path
                      fill="#000"
                      fill-rule="nonzero"
                      d="M26 16.5a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0zm-10-2.4L14.3 16H13l3.5-4 3.5 4h-1.3L17 14v7h-1v-7z"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="right w-[80%] bg-black text-white h-[100vh] opacity-85 overflow-auto">
          <div className="nav flex justify-between px-4 mt-2">
            <div class="flex items-center bg-black rounded-lg p-2 opacity-100 border-2">
              <button type="submit" class="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class="fill-current text-white"
                >
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25a1 1 0 1 0 1.41-1.41L15.5 14zm-6 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 1 1-9 0z" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search..."
                class="flex-1 bg-transparent text-white outline-none"
              />
            </div>
            <div className="flex border px-4 bg-orange-300 text-black font-bold rounded-2xl">
              <button onClick={(e) => handleclick(e)}>Add</button>
            </div>
          </div>
          <div className="heading">
            <h1 className="font-bold m-4">All Bookmarks</h1>
          </div>
          <div className="list flex flex-col">

            {bookmarks.map((item)=>{
              return(<div className="card flex gap-4 px-2 hover:bg-gray-950 py-4 border-white border-[0.1px] border-opacity-70">
              <img src="./src/assets/logoimg.png" alt="" width={40}/>
              <div className="content">
                <h1 className="font-bold">{item.title}</h1>
                <p className="opacity-80">
                  URL : {item.url}
                </p>
              </div>
            </div>

              )
            })}

            <div className="card flex gap-4 px-2 hover:bg-gray-950 py-4 border-white border-[0.1px] border-opacity-70">
              <img src="./src/assets/facebooklogo.webp" alt="" />
              <div className="content">
                <h1 className="font-bold">Sample Bookmark</h1>
                <p className="opacity-80">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
                  minus iure? Debitis modi ipsam similique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
