import Image from "next/image";
import { MotionTr } from "./Motion";
import { Link } from "@nextui-org/react";

const stagger = 0.25;

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export interface CityData {
  geoname_id: string;
  name: string;
  ascii_name: string;
  alternate_names: string[];
  feature_class: string;
  feature_code: string;
  country_code: string;
  cou_name_en: string;
  country_code_2: string | null;
  admin1_code: string;
  admin2_code: string;
  admin3_code: string | null;
  admin4_code: string | null;
  population: number;
  elevation: number | null;
  dem: number;
  timezone: string;
  modification_date: string;
  label_en: string;
  coordinates: { lon: number; lat: number };
}

interface Prop {
  CityData: CityData;
  index: number;
  page?: number;
  MAX_LIMIT?: number;
}

function AnimeCard({ CityData, index }: Prop) {
  return (
    <MotionTr
      key={CityData.geoname_id}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * stagger,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full "
    >
      <td className="text-center flex justify-center">
        <img
          src={`https://flagcdn.com/${CityData.country_code?.toLowerCase()}.svg`}
          width={30}
          alt="Contry Flgs"
        />
      </td>
      <td className="text-center">
        <Link
          href={`/weather?lon=${CityData.coordinates.lon}&lat=${CityData.coordinates.lat}&city=${CityData.ascii_name}`}
          className="text-blue-600 "
        >
          {CityData.ascii_name}
        </Link>
      </td>
      <td className="text-center">
        <p className="text-center">{CityData.cou_name_en}</p>
      </td>
      <td className="text-center">{CityData.timezone}</td>
    </MotionTr>
  );
}

export default AnimeCard;
