import { useState, useEffect, useRef } from 'react';

import { useRequest } from 'hooks';
import { Dropdown, Button } from '../shared';
import { ISet } from 'types';

interface SetFilterProps {
  setSet(set: ISet['name']): void;
}

const SetFilter = ({ setSet }: SetFilterProps) => {
  const [sets, setSets] = useState<ISet[]>([]);
  const dropDownRef = useRef<HTMLSelectElement>(null);
  const { doRequest } = useRequest();

  useEffect(() => {
    doRequest({
      method: 'get',
      url: '/sets',
      onSuccess: ({ sets }) => setSets(sets),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGatherSetCards = () => {
    const value = dropDownRef.current?.value;
    if (!value) return;

    setSet(value);
  };

  return (
    <div
      data-testid="test-set-filter"
      className="flex flex-col md:flex-row space-y-3 md:space-x-4 md:items-end"
    >
      <Dropdown
        name="sets"
        label="Select a set"
        elRef={dropDownRef}
        options={[
          { title: 'Available card sets', value: '' },
          ...sets.map((set) => ({ title: set.name, value: set.name })),
        ]}
      />
      <Button title="Gather" onClick={onGatherSetCards} />
    </div>
  );
};

export default SetFilter;
