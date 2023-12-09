import { Link, useNavigate } from 'react-router-dom';
import { TypeOffer } from '../types/types-data';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { postFavorites } from '../store/api-actions';
import { getAuthorizationStatus } from '../store/selectors';
import { useCallback } from 'react';

type CitesPlacesProps = {
  offer: TypeOffer;
  onListItemHover?: (offer_id: string) => void;
  fromFavorite?: boolean;
};

function PagesCard({
  offer,
  onListItemHover,
  fromFavorite,
}: CitesPlacesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {
    price,
    previewImage,
    rating,
    isFavorite,
    type,
    isPremium,
    id,
    title,
  } = offer;
  const getRating = (Math.round(rating) / 5) * 100;

  const status = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const onClickFavoritesCard = useCallback(() => {
    if (status === AuthorizationStatus.Auth) {
      dispatch(
        postFavorites({ offer, offerId: id, status: isFavorite ? 0 : 1 })
      );
    } else {
      navigate(AppRoute.Login);
    }
  }, [dispatch, id, isFavorite, navigate, offer, status]);

  return (
    <article
      className={`${
        fromFavorite ? 'favorites__card' : 'cities__card'
      } place-card`}
      onMouseEnter={(event) => {
        event.preventDefault();
        onListItemHover?.(id);
      }}
      onMouseLeave={() => {
        onListItemHover?.('');
      }}
    >
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        <div></div>
      )}
      <div
        className={`${
          fromFavorite ? 'favorites__image-wrapper' : 'cities__image-wrapper'
        }place-card__image-wrapper`}
      >
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={`${fromFavorite ? 150 : 260}`}
            height={`${fromFavorite ? 110 : 200}`}
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={`${
          fromFavorite ? 'favorites__card-info' : ''
        } place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <button
            onClick={onClickFavoritesCard}
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active button' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default PagesCard;
