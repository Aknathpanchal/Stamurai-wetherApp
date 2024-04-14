"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import AnimeCard, { CityData } from "./AnimeCard";
import { observer } from "mobx-react-lite";
import { useStore } from "@/app/store";

export type AnimeCard = JSX.Element;

const LoadMore = observer(() => {
  const {
    rootStore: { tasksDetails },
  } = useStore();
  const { ref, inView } = useInView();

  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (inView && isLoading) {
      // Add a delay of 500 milliseconds
      const delay = 500;

      const timeoutId = setTimeout(() => {
        tasksDetails.fetchTasksDetails({ page }).then(() => {
          const userDetails = tasksDetails.getTasksDetails;

          if (userDetails.length === 0) {
            setIsLoading(false);
          } else {
            setPage((prevPage) => prevPage + 1);
          }
        });
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, isLoading, tasksDetails, page]);

  return (
    <>
      {tasksDetails.getTasksDetails.map((cityData: CityData, index: number) => (
        <AnimeCard
          key={cityData.geoname_id + cityData.ascii_name + cityData.cou_name_en}
          CityData={cityData}
          index={index}
        />
      ))}
      <tr ref={ref}>
        {[...Array(4)].map((_, index) => (
          <td key={index}>
            {inView && isLoading && (
              <img
                src="./spinner.svg"
                alt="spinner"
                width={56}
                height={56}
                className="object-contain"
                style={{ margin: "auto" }}
              />
            )}
          </td>
        ))}
      </tr>
    </>
  );
});


export default LoadMore;
