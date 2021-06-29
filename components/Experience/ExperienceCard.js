import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";
function ExperienceCard({ image, title, description, imageAlt }) {
  return (
    <>
      <Card
        className="experienceCard"
        header={
          <Image
            src={image}
            width={350}
            height={250}
            alt={imageAlt}
            objectFit="cover"
          />
        }
      >
        <h2 className="experienceCard__title">{title}</h2>
        <p>{description}</p>
      </Card>

      <style jsx global>
        {`
          .experienceCard {
            max-width: 350px;
            margin: 0 auto;
            box-shadow: 0 0px 1.6px rgba(0, 0, 0, 0.011),
              0 0px 3.8px rgba(0, 0, 0, 0.016), 0 0px 7.1px rgba(0, 0, 0, 0.02),
              0 0px 12.7px rgba(0, 0, 0, 0.024),
              0 0px 23.8px rgba(0, 0, 0, 0.029), 0 0px 57px rgba(0, 0, 0, 0.04);
          }
          .experienceCard__title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
            color: var(--primary);
            border-bottom: 1px solid var(--theme-400);
            padding-bottom: 12px;
          }
        `}
      </style>
    </>
  );
}

export default ExperienceCard;
