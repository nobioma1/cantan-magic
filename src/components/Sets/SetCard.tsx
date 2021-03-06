import { ISetCard } from '../../types';

interface SetCardProps extends ISetCard {}

const SetCard = (props: SetCardProps) => {
  const { setName, name, rarity, type, imageUrl, releaseDate } = props;
  return (
    <div
      data-testid="test-set-card"
      className="flex flex-col shadow-md p-4 space-y-2"
    >
      <h3>
        {setName} - {name}
      </h3>
      <div className="space-y-2">
        <div className="md:w-[200px] md:h-[250px]">
          <img className="w-full h-full" src={imageUrl} alt={name} />
        </div>
        <div>
          {/* release date is not available in all card object */}
          <p>Release Date: {releaseDate ?? '-'}</p>
          <p>Rarity: {rarity}</p>
          <p>Type: {type}</p>
        </div>
      </div>
    </div>
  );
};

export default SetCard;
