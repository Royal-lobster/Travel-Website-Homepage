import React, { useState, useEffect } from "react";
import file from "./exp_data.json";
import ExperienceCard from "./ExperienceCard";

function Experiences() {
  const [expData, setExpData] = useState([]);
  useEffect(() => {
    setExpData(JSON.parse(JSON.stringify(file)));
  }, []);
  return (
    <>
      <section className="experiences">
        <h1 className="experiences__title">Experiences</h1>
        <div className="experiences__cards">
          {expData?.data?.map((exp) => (
            <ExperienceCard
              key={exp.id}
              image={exp.image}
              imageAlt={exp.imageAlt}
              title={exp.title}
              description={exp.description}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        .experiences {
          margin: 0 auto;
          max-width: var(--max-width);
          padding: 20px;
        }
        .experiences__title {
          font-size: 30px;
          margin-bottom: 50px;
          font-weight: bold;
          border-bottom: 1px solid var(--theme-400);
          padding-bottom: 20px;
        }
        .experiences__cards {
          display: grid;
          max-width: 1100px;
          margin: 0 auto;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 30px;
        }
      `}</style>
    </>
  );
}

export default Experiences;
