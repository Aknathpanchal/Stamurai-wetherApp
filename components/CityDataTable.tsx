"use client";
import { useEffect, useState } from "react";
import LoadMore from "./LoadMore";
import AnimeCard, { CityData } from "./AnimeCard";
import { observer } from "mobx-react-lite";
import { useStore } from "@/app/store";

// function CityDataTable({results}:{results:CityData[]}) {
const CityDataTable = observer(({results}:{results:CityData[]}) => {
    const {
        rootStore: { tasksDetails },
      } = useStore();
    



  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">City Name</th>
            <th className="text-center">Country</th>
            <th className="text-center">Timezone</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((cityData: CityData, index: number) => (
            <AnimeCard
              key={cityData.geoname_id+cityData.ascii_name+cityData.cou_name_en}
              CityData={cityData}
              index={index}
              //   page={page}
            />
          ))}

          <LoadMore />
        </tbody>
      </table>
    </>
  );
});

// }

export default CityDataTable;
