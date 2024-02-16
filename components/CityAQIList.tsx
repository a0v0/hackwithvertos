import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import NoDataFound from "./NoDataFound";

const CityAQIList = (props) => {
  let cityList = [];
  if (props.data) {
    cityList = props.data;
  }
  const getCategorizedAQI = (aqi) => {
    let className = "unknown";
    let impact = "Unknown";

    if (aqi >= 0 && aqi <= 50) {
      impact = "Good";
      className = "good";
    } else if (aqi >= 51 && aqi <= 100) {
      impact = "Moderate";
      className = "moderate";
    } else if (aqi >= 101 && aqi <= 150) {
      impact = "Unhealthy for Sensitive Groups";
      className = "unhealthy-sentitive";
    } else if (aqi >= 151 && aqi <= 200) {
      impact = "Unhealthy";
      className = "unhealthy";
    } else if (aqi >= 201 && aqi <= 300) {
      impact = "Very Unhealthy";
      className = "very-unhealthy";
    } else if (aqi >= 301) {
      impact = "Hazardous";
      className = "hazardous";
    }

    let catagorized = {};
    catagorized["impact"] = impact;
    catagorized["className"] = className;

    return catagorized;
  };
  return (
    <div className="mt-4 gap-2 grid grid-cols-2 sm:grid-cols-4">
      {cityList.length > 0 ? (
        cityList.map((cityInfo, i) => (
          <Card
            shadow="sm"
            key={i}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                // alt={item.title}
                className="w-full object-cover h-[140px]"
                src={
                  "https://th.bing.com/th/id/OIP.G_rg1X2GABfZXj7HBJUWhwHaHa?rs=1&pid=ImgDetMain"
                }
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{cityInfo.station.name}</b>
              {getCategorizedAQI(cityInfo.aqi).impact}
              <p className="text-default-500">
                <span className="text-default-700">AQI: {cityInfo.aqi}</span>
              </p>
            </CardFooter>
            {/* <CityAQI cityInfo={cityInfo} /> */}
          </Card>
        ))
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default CityAQIList;
