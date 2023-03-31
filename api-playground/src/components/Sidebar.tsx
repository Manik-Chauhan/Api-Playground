import React, { useState } from "react";
import { ArrowDownCircleIcon , ArrowRightCircleIcon} from "@heroicons/react/24/outline";


export default function Sidebar() {
  

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const[text,setText]= useState("Hello , Welcome to Api-Playground !");

  const onHere=() =>{

    setText("You Selected Api 1")

  };
  const onHere2=() =>{

    setText("You Selected Api 2")

  };

  const handleClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-row mt-16">
        <div className="relative column-1 w-1/5 h-screen bg-custom-blue justify-center overflow-scroll overscroll-contain">
          <div className="flex flex-col items-center py-4  bg-blue-500 mb-10 font-mono text-xl font-black">
            <h1>Perfios APIS</h1>
          </div>



          <div className="flex flex-col items-center py-4  bg-blue-400 mb-10 text-lg">
            <h1>Perfios Product 1 APIS</h1>
          </div>



          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer "
          >
            
              <button
                onClick={() => handleClick(1)}
                className="w-full px-4 py-2 text-left text-lg font-medium"
                
              ><ArrowDownCircleIcon className="h-6 w-6 float-right" />

            
                <h1>API No. #1</h1>
                
              </button>
              {activeAccordion === 1 && (
                <div className="px-4 py-2 bg-white">
                  
                  <button onClick={onHere} className="w-full px-4 py-2 text-left text-lg font-medium">
                  <ArrowRightCircleIcon className="h-6 w-6 text-gray-500 float-right" />
                <h1>This Will Help You create Order</h1>
                
              </button>
              
                </div>
              )}



              <button
                onClick={() => handleClick(2)}
                className="w-full px-4 py-2 text-left text-lg font-medium "
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #2</h1>
                
              </button>
              {activeAccordion === 2 && (
                <div className="px-4 py-2 bg-white">
                <button onClick={()=>onHere2()} className="w-full px-4 py-2 text-left text-lg font-medium">
                <ArrowRightCircleIcon className="h-6 w-6 text-gray-500 float-right" />
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}

              <button
                onClick={() => handleClick(3)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #3</h1>
              </button>
              {activeAccordion === 3 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}

              <button
                onClick={() => handleClick(4)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #4</h1>
              </button>
              {activeAccordion === 4 && (
               <div className="px-4 py-2 bg-white">
               <button className="w-full px-4 py-2 text-left text-lg font-medium">
             <h1>This Will Help You create Order</h1>
           </button>
             </div>
              )}

              <button
                onClick={() => handleClick(5)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #5</h1>
              </button>
              {activeAccordion === 5 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}


              <button
                onClick={() => handleClick(6)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #6</h1>
              </button>
              {activeAccordion === 6 && (
               <div className="px-4 py-2 bg-white">
               <button className="w-full px-4 py-2 text-left text-lg font-medium">
             <h1>This Will Help You create Order</h1>
           </button>
             </div>
              )}

              <button
                onClick={() => handleClick(7)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #7</h1>
              </button>
              {activeAccordion === 7 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}

              <button
                onClick={() => handleClick(8)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #8</h1>
              </button>
              {activeAccordion === 8 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}


              <button
                onClick={() => handleClick(9)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #9</h1>
              </button>
              {activeAccordion === 9 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}


              <button
                onClick={() => handleClick(10)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #10</h1>
              </button>
              {activeAccordion === 10 && (
               <div className="px-4 py-2 bg-white">
               <button className="w-full px-4 py-2 text-left text-lg font-medium">
             <h1>This Will Help You create Order</h1>
           </button>
             </div>
              )}
            
          </a>


          <div className="flex flex-col items-center py-5 mt-8  bg-blue-400 mb-10">
            <h1>Perfios Product 2 APIS</h1>
          </div>



          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer "
          >
            
              <button
                onClick={() => handleClick(1)}
                className="w-full px-4 py-2 text-left text-lg font-medium"
                
              ><ArrowDownCircleIcon className="h-6 w-6 float-right" />

            
                <h1>API No. #1</h1>
                
              </button>
              {activeAccordion === 1 && (
                <div className="px-4 py-2 bg-white">
                  
                  <button className="w-full px-4 py-2 text-left text-lg font-medium">
                  <ArrowRightCircleIcon className="h-6 w-6 text-gray-500 float-right" />
                <h1>This Will Help You create Order</h1>
                
              </button>
              
                </div>
              )}



              <button
                onClick={() => handleClick(2)}
                className="w-full px-4 py-2 text-left text-lg font-medium "
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #2</h1>
                
              </button>
              {activeAccordion === 2 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}

              <button
                onClick={() => handleClick(3)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #3</h1>
              </button>
              {activeAccordion === 3 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}

              <button
                onClick={() => handleClick(4)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #4</h1>
              </button>
              {activeAccordion === 4 && (
               <div className="px-4 py-2 bg-white">
               <button className="w-full px-4 py-2 text-left text-lg font-medium">
             <h1>This Will Help You create Order</h1>
           </button>
             </div>
              )}

              <button
                onClick={() => handleClick(5)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #5</h1>
              </button>
              {activeAccordion === 5 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}


              <button
                onClick={() => handleClick(6)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #6</h1>
              </button>
              {activeAccordion === 6 && (
               <div className="px-4 py-2 bg-white">
               <button className="w-full px-4 py-2 text-left text-lg font-medium">
             <h1>This Will Help You create Order</h1>
           </button>
             </div>
              )}

              <button
                onClick={() => handleClick(7)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #7</h1>
              </button>
              {activeAccordion === 7 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}

              <button
                onClick={() => handleClick(8)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #8</h1>
              </button>
              {activeAccordion === 8 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}


              <button
                onClick={() => handleClick(9)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #9</h1>
              </button>
              {activeAccordion === 9 && (
                <div className="px-4 py-2 bg-white">
                <button className="w-full px-4 py-2 text-left text-lg font-medium">
              <h1>This Will Help You create Order</h1>
            </button>
              </div>
              )}


              <button
                onClick={() => handleClick(10)}
                className="w-full px-4 py-2 text-left text-lg font-medium tline-none"
              >
                <ArrowDownCircleIcon className="h-6 w-6 float-right" />
                <h1>API No. #10</h1>
              </button>
              {activeAccordion === 10 && (
               <div className="px-4 py-2 bg-white">
               <button className="w-full px-4 py-2 text-left text-lg font-medium">
             <h1>This Will Help You create Order</h1>
           </button>
             </div>
              )}
            
          </a>




          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer"
          >
            <h1>API 6</h1>
          </a>



          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer"
          >
            <h1>API 7</h1>
          </a>




          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer"
          >
            <h1>API 8</h1>
          </a>




          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer"
          >
            <h1>API 9</h1>
          </a>




          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer"
          >
            <h1>API 10</h1>
          </a>


          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer"
          >
            <h1>API 11</h1>
          </a>



          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer"
          >
            <h1>API 12</h1>
          </a>


          <a
            href="#"
            className="flex flex-col items-center py-4 my-4 bg-blue-300 hover:cursor-pointer"
          >
            <h1>API 13</h1>
          </a>
        </div>
        <div className="flex flex-col md:flex-row w-11/12">




          <div className="column-2 w-full md:w-6/12 h-full border-2 border-dashed md:mx-2 my-2 rounded-md">
             <h1 className="font-mono text-2xl font-bold m-4">{text}</h1>
          </div>





          <div className="column-3 w-full md:w-6/12 h-full border-2 border-dashed md:mx-2 my-2 rounded-md">
            <h1  className="font-mono text-xl underline m-4">Language</h1>
            <h3 className="m-4">{text}</h3>
            <h2 className="italic m-4">Base url : https://www.perfios.com/</h2>
          </div>
        </div>
      </div>
    </>
  );
}
