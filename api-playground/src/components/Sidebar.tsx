import React from "react";


export default function Sidebar() {
    return (
      <div  className="flex flex-row mt-16">
      <div  className="relative column-1 w-1/6 h-screen bg-custom-blue justify-center overflow-scroll overscroll-contain">
        <div  className="flex flex-col items-center py-4  bg-blue-500 mb-10">
         <h1>Perfios APIS</h1>
        </div>
        <a href="#" target="_blank" className="flex flex-col items-center py-4 my-4 bg-blue-200 hover:cursor-pointer">
          <h1>API 1</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 2</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 3</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 4</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 5</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 6</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 7</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 8</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 9</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 10</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 11</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 12</h1>
        </a>
        <a href="#"  className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer">
        <h1>API 13</h1>
        </a>
     
      </div>
      <div  className="flex flex-col md:flex-row w-11/12">
        <div  className="column-2 w-full md:w-6/12 h-full border-2 border-dashed md:mx-2 my-2 rounded-md"></div>
        <div  className="column-3 w-full md:w-5/12 h-full border-2 border-dashed md:mx-2 my-2 rounded-md"></div>
      </div>
    </div>
    );
}