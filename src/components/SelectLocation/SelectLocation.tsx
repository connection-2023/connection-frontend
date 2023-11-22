import { useEffect, useState } from 'react';
import { WARD_LIST } from '@/constants/administrativeDistrict';
import { toggleSelection } from '@/utils/toggleSelection';
import CityList from './CityList';
import LocationListItem from './LocationListItem';
import WardList from './WardList';

interface SelectLocationProps {
  onChange: (data: Record<string, string[]>) => void;
  defaultValue: { [key: string]: string[] } | null;
}

const SelectLocation = ({ onChange, defaultValue }: SelectLocationProps) => {
  const [focusLocation, setFocusLocation] = useState<string | null>(null);
  const [selectLocationList, setSelectLocationList] = useState<
    Record<string, string[]>
  >(defaultValue || {});

  useEffect(() => {
    setSelectLocationList(defaultValue || {});
  }, [defaultValue]);

  const selectLocation = (
    ward: string,
    isValueChecked: boolean,
    location?: string,
  ) => {
    const targetLocation = location || focusLocation;

    if (!targetLocation) {
      return;
    }

    const toggleData = {
      value: ward,
      allList: WARD_LIST[targetLocation],
      currentList: selectLocationList[targetLocation] || [],
      selectAllName: '전지역',
      isValueChecked,
    };

    setSelectLocationList({
      ...selectLocationList,
      [targetLocation]: toggleSelection(toggleData),
    });

    onChange({
      ...selectLocationList,
      [targetLocation]: toggleSelection(toggleData),
    });

    const updatedList = toggleSelection(toggleData);

    if (updatedList.length === 0) {
      const updatedSelectLocationList = { ...selectLocationList };
      delete updatedSelectLocationList[targetLocation];
      setSelectLocationList(updatedSelectLocationList);

      const updatedData = { ...selectLocationList };
      delete updatedData[targetLocation];
      onChange(updatedData);
    }
  };

  const focusLocationHandler = (city: string) => {
    if (city === '온라인') {
      setSelectLocationList({
        ...selectLocationList,
        온라인: ['온라인'],
      });

      onChange({
        ...selectLocationList,
        온라인: ['온라인'],
      });
    }
    setFocusLocation(city);
  };

  return (
    <section>
      <CityList
        focusLocation={focusLocation}
        selectLocationList={selectLocationList}
        focusLocationHandler={focusLocationHandler}
      />

      {focusLocation && focusLocation !== '온라인' && (
        <WardList
          focusLocation={focusLocation}
          selectLocationList={selectLocationList}
          selectLocation={selectLocation}
        />
      )}

      <ul className="shadow-border flex flex-wrap">
        {Object.entries(selectLocationList || {}).map(([key, value]) => (
          <LocationListItem
            key={key}
            value={value}
            selectLocation={selectLocation}
            locationKey={key}
          />
        ))}
      </ul>
    </section>
  );
};

export default SelectLocation;
