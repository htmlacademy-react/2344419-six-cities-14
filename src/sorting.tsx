import cn from 'classnames';
import { useState, KeyboardEvent } from 'react';
import { TypeSorting } from './types/sorting';
import { Sorting } from './const';


type SortingProps = {
  onChange: (newSorting:TypeSorting) =>void;
}

function SortingTypePoint({onChange}: SortingProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const [changedType, setChangedType] = useState<TypeSorting>(Sorting.Popular);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`,
  };

  function handleKeydown (evt:KeyboardEvent) {
    if(evt.key === 'Escape' && isOpened){
      evt.preventDefault();
      setIsOpened(false);
    }
  }
  function handleTypeClick(){
    setIsOpened((previsOpened) => !previsOpened);
  }

  function handleSortingItemClick(type:TypeSorting){
    onChange(type);
    setChangedType(type);
    setIsOpened(false);
  }

  return(
    <form className="places__sorting" action="#" method="get" onKeyDown={handleKeydown}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleTypeClick}>
        {Sorting[changedType]}
        <svg className="places__sorting-arrow" width="7" height="4" style={iconStyle}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className= {cn('places__options', 'places__options--custom', {'places__options--opened': isOpened,})}>

        {(
        Object.entries(Sorting) as [
        TypeSorting,
        (typeof Sorting)[TypeSorting]
      ][]
        ).map(([type,label])=> (
          <li
            key={type}
            className={cn('places__option',{'places__option--active':changedType === type,})} tabIndex={0}
            onClick={()=> handleSortingItemClick(type)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}
export {SortingTypePoint};
