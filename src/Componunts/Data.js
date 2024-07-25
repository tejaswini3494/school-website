
import React, { useContext, useState } from "react";
// import { AcademicsData } from "./AcademcsData";
// import { AcademicsData } from "./Academics/AcademcsData";
import AcademicsCard from "./Academics/AcademicsCard";
import AcademicsInfoCard from "./Academics/AcademicsInfoCard";
// import { AcademicsData } from "./Academics/AcademcsData";


import { ShopcontextMe } from "./Schoolcontext";

export default function Data(props) {
    const { AcademicsData } = useContext(ShopcontextMe);
    const [count, setcount] = useState(AcademicsData[0]);
    const handelSkill = (data) => {
      setcount(data);
    };
  
  return (
    <>
    <div className="md:flex w-5/6 mx-auto py-10 items-center gap-20 ">
    <div className=" flex-1 flex flex-col gap-4 bg-slate-400 p-3 w-6/6 ">
      {AcademicsData.map((item, i) => {
        if (props.category === item.category) {
          return (
            <>
            <AcademicsCard
                  title={item.title}
                   isActive={count.title === item.title}
                  onClick={() => {
                    handelSkill(item);
                  }}
            

              />
            </>
          );
        } else {
          return null;
        }
        
      })}
    </div>
    <div className=" flex-1 flex flex-col text-blue-800 font-semibold text-lg gap-4">
    <AcademicsInfoCard heading={count.title} skills={count.skills}/>
    </div>
    </div>
    </>
  );
}
