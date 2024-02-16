"use client";
import { SEARCH_CITIES_BASE_URL, TOKEN } from "@/components/AQIConst";
import CityAQIList from "@/components/CityAQIList";
import { useAQIAPIs } from "@/components/useAQIAPIs";
import { Card, CardBody, Input } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { tv } from "tailwind-variants";
export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      xs: "text-1xl lg:text-1xl",
      sm: "text-2xl lg:text-4xl",
      md: "text-[2.1rem] lg:text-5xl",
      lg: "text-3xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [url, seturl] = useState("");
  const searchInput = useRef(null);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [cities, loading, initial, error] = useAQIAPIs(url);

  useEffect(() => {
    console.log(data);
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
        <center>
          <h1 className={title({ color: "green" })}>
            Pollution-Free Zone Finder
          </h1>
        </center>
        <div className="mt-4 items-center justify-center">
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
