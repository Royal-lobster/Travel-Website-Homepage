import React from "react";
import { Card } from "primereact/card";
import Image from "next/image";
import Link from "next/link";
function ExperienceCard({
  image,
  title,
  description,
  imageAlt,
  tag,
  author,
  date,
}) {
  return (
    <>
      {console.log(tag)}
      <Link href="#">
        <a className="experienceCard__wrapper">
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
            <div
              className="experienceCard__tag"
              style={{
                color:
                  tag == "inspiration" ? "var(--secondary)" : "var(--primary)",
              }}
            >
              {tag}
            </div>
            <h2 className="experienceCard__title">{title}</h2>
            <p className="experienceCard__credits">
              By {author} on {date}
            </p>
            <p>{description}</p>
          </Card>
        </a>
      </Link>
      <style jsx global>
        {`
          .experienceCard__wrapper {
            border: 1px solid #dbdbdb;
            width: 250px;
            border-radius: 8px;
            margin: 0 auto;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
            :focus {
              outline: none;
              transform: scale(108%);
              cursor: pointer;
              background-color: #fff;
            }
            :hover {
              transform: scale(108%);
              cursor: pointer;
              background-color: #fff;
            }
          }
          .experienceCard {
            background-color: transparent;
            box-shadow: none;
            display: flex;
            flex-direction: column;

            &__tag {
              text-transform: uppercase;
            }

            &__title {
              font-size: 20px;
              margin: 10px 0;
              color: var(--primary);
              font-weight: 600;
              color: #333333;
            }

            &__credits {
              font-size: 14px;
              margin-bottom: 20px;
              color: var(--theme-500);
            }
          }
          @media only screen and (max-width: 380px) {
            .experienceCard__wrapper {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}

export default ExperienceCard;
