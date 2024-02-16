"use client";
import { SEARCH_CITIES_BASE_URL, TOKEN } from "@/components/AQIConst";
import CityAQIList from "@/components/CityAQIList";
import { useAQIAPIs } from "@/components/useAQIAPIs";
import { Card, CardBody, Input } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
interface City {
  uid: number;
  aqi: string;
  time: {
    tz: string;
    stime: string;
    vtime: number;
  };
  station: {
    name: string;
    geo: [number, number];
    url: string;
    country?: string;
  };
}

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [url, seturl] = useState("");
  const searchInput = useRef(null);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [cities, loading, initial, error] = useAQIAPIs(url);
  const [Cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    console.log(data);
    setCities(data);
  }, [data]);

  const searchCityName = (e) => {
    e.preventDefault();
    // console.log(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${value}`);
    seturl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${value}`);

    // console.log(cityArray);
  };

  return (
    <Card
      style={{ width: "100%" }}
      className="m-4 flex flex-col items-center justify-center gap-4 py-8 md:py-10"
    >
      <CardBody>
        <div className=" items-center justify-center">
          <form onSubmit={(e) => searchCityName(e)}>
            <label>
              <Input
                color="success"
                type="text"
                ref={searchInput}
                value={value}
                placeholder="Enter a City Name"
                variant={"flat"}
                label="City Name"
                onValueChange={setValue}
              />
            </label>
          </form>

          {loading ? (
            <span>loading...</span>
          ) : (
            !initial && <CityAQIList data={cities.data} />
          )}
        </div>
      </CardBody>
    </Card>
  );
}
