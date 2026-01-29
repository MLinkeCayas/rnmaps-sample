export type SuperchargerData = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  latitude: number;
  longitude: number;
  status: string;
  dateOpened: string;
  stallCount: number;
  counted: boolean;
  elevationMeters: number;
  powerKilowatt: number;
  solarCanopy: boolean;
  battery: boolean;
  otherEVs: boolean;
};

export const getSuperchargerData = async () => {
  const response = await fetch(
    "https://supercharge.info/service/supercharge/allSites",
  );
  if (!response.ok) throw new Error("Failed to fetch supercharger data");

  const data = await response.json();
  const result = data.map((item: any) => ({
    id: item.id,
    name: item.name,
    address: item.address.street,
    city: item.address.city,
    state: item.address.state,
    zip: item.address.zip,
    country: item.address.country,
    latitude: item.gps.latitude,
    longitude: item.gps.longitude,
    status: item.status,
    dateOpened: item.dateOpened,
    stallCount: item.stallCount,
    counted: item.counted,
    elevationMeters: item.elevationMeters,
    powerKilowatt: item.powerKilowatt,
    solarCanopy: item.solarCanopy,
    battery: item.battery,
    otherEVs: item.otherEVs,
  }));

  return result as SuperchargerData[];
};

//getSuperchargerData().then(console.log);
