import { CITY_LIST } from '@/constants/administrativeDistrict';

const selectList = ['온라인', ...CITY_LIST];

const selectCityStyle = (
  focusLocation: string | null,
  city: string,
  selectLocationList: Record<string, string[]> | null,
) => {
  return focusLocation === city ||
    (selectLocationList &&
      selectLocationList[city] &&
      selectLocationList[city].length > 0)
    ? 'select-shadow-border bg-[#F5F5F5] font-bold flex h-[1.75rem] w-[11.11%] cursor-pointer items-center justify-center'
    : 'shadow-border text-sub-color2 flex h-[1.75rem] w-[11.11%] cursor-pointer items-center justify-center';
};

interface CityListProps {
  focusLocation: string | null;
  selectLocationList: Record<string, string[]>;
  focusLocationHandler: (city: string) => void;
}

const CityList = ({
  focusLocation,
  selectLocationList,
  focusLocationHandler,
}: CityListProps) => {
  return (
    <ul className="flex flex-wrap">
      {selectList.map((city) => (
        <li
          key={city}
          className={selectCityStyle(focusLocation, city, selectLocationList)}
          onClick={() => focusLocationHandler(city)}
        >
          {city}
        </li>
      ))}
    </ul>
  );
};

export default CityList;
