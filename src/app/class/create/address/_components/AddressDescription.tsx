import { Fragment } from 'react';
import { ADDRESS_DESCRIPTION } from '@/constants/constants';

const AddressDescription = () => {
  return (
    <>
      <h2 className="mb-4 mt-7 text-lg font-semibold">검색 예시</h2>
      <dl className="text-sm">
        {ADDRESS_DESCRIPTION.map(({ term, description }) => (
          <Fragment key={term}>
            <dt className="pb-1 text-gray-300">{term}</dt>
            <dd className="mb-4 text-sub-color1">{description}</dd>
          </Fragment>
        ))}
      </dl>
    </>
  );
};

export default AddressDescription;
