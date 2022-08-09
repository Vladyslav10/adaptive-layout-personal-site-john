import React from "react";

const Workpost = ({workClass, works}) => {
    

  return (
    <div className={workClass}>
        <div className={workClass + '__img ibg'}>
            <img src={works.img} alt={works.alt} />
        </div>
        <div className={workClass + '__info'}>
            <div className={workClass + "__title"}>{works.title}</div>
            <div className={workClass + "__row"}>
                <div className={workClass + "__year"}>{works.year}</div>
                <div className={workClass + "__design"}>{works.design}</div>
            </div>
            <div className={workClass + "__description"}>{works.description}</div>
        </div>
    </div>  
  );
};

export default Workpost;