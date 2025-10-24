import React, { useEffect, useState } from "react";
import image from "../../assets/home/deals-bg.jpg";
const Deals = () => {
  const [time , setTime] = useState({
    days : 10 ,
    hrs  : 1 ,
    min : 1 , 
    sec : 5
  })

  const formateTime = (time) => {
    console.log(time)
    return String(time).padStart(2 , "0")
  }

  useEffect(() => {
    // console.log("useeffect runs")
   let interval =  setInterval(() => {
        setTime(prev => {
          let {days , hrs , min , sec} = prev

          sec--
          if(sec <= 0){
            sec = 59
            min--
            if(min <= 0){
              hrs--
              min = 59
              if(hrs <= 0){
                hrs = 23
                days--
              }
            }
          }

          return {days , hrs , min , sec} 
        })

        // console.log("interval runnins")
    }, 1000);


    return () => {
      clearInterval(interval)
    }
  } , [])

  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className={`my-20 py-20 w-full bg-cover bg-fixed h-[600px] md:h-[500px] lg:h-[600px] `}
    >
      <div className="  container px-10 mx-auto   ">
       <div className="max-w-[600px] md:mx-auto lg:mx-0 bg-white space-y-2 p-5 rouned-md">
         <h2 className="text-xl font-semibold text-primary">25% off</h2>
        <h2 className="text-4xl  font-semibold font-poppins">Great Deals on organic food.</h2>

        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          maecenas accumsan lacus vel facilisis.
        </p>

        <div className="border text-center w-fit p-4 flex items-center gap-4 border-[#E9CBBE]">

            <div>
                <h2 className="text-2xl font-bold">{formateTime(time.days)} </h2>
                <p>
                    Days
                </p>
            </div>
            <p className="text-4xl ">:</p>

            <div>
                <h2 className="text-2xl font-bold">{formateTime(time.hrs)} </h2>
                <p>
                    Hrs
                </p>
            </div>
            <p className="text-4xl ">:</p>

            <div>
                <h2 className="text-2xl font-bold">{formateTime(time.min)} </h2>
                <p>
                    Min
                </p>
            </div>
            <p className="text-4xl ">:</p>

            <div>
                <h2 className="text-2xl font-bold">{formateTime(time.sec)} </h2>
                <p>
                    sec
                </p>
            </div>
            

        </div>
       </div>
      </div>
    </div>
  );
};

export default Deals;
