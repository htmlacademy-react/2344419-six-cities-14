
import { TypeOffer, TypeReview } from '../types/types-data';
import OfferReviews from './offer-reviews';
import { useState } from 'react';
import FormComment from './form-comment';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { AppRoute, AuthorizationStatus } from '../const';
import { postComment, postFavorites } from '../store/api-actions';
import { useNavigate } from 'react-router-dom';


type OfferCardProps = {
offer:TypeOffer;
reviews: TypeReview[];
}


function OfferCard({offer, reviews}:OfferCardProps):JSX.Element{
  const status = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [reviewComment,setReviewComment] = useState<string>('');

  const [ratingStars, setRatingStars] = useState(()=>[false, false, false, false, false]);
  const fieldChangeHandle = (evt: string) => {
    setReviewComment(evt);
  };
  const ratingChangeHandle = (evt: boolean[]) => {
    setRatingStars(evt);
  };
  const handleSubmit = () => {
    dispatch(postComment({offerId: offer?.id || '1', reviewData:  {comment: reviewComment, rating: 5 - ratingStars.indexOf(true)} }));
    setReviewComment('');
    setRatingStars([false, false, false, false, false]);

  };


  const{isPremium, bedrooms, description, images, title, rating, type, maxAdults, price, host, goods, id, isFavorite} = offer;

  return(
    <>
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.map((image)=> (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt="Photo studio"/>
            </div>
          ))}

        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">

          { isPremium ? <div className="offer__mark"><span>Premium</span></div> : <div></div> }

          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <button
              onClick={
                status === AuthorizationStatus.Auth
                  ? () => {
                    dispatch(postFavorites({offer, offerId: id, status: isFavorite ? 0 : 1}));
                  } : () => {
                    navigate(AppRoute.Login);
                  }
              }

              className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button"
            >
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: `${Math.round(rating * 20)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms}
            </li>
            <li className="offer__feature offer__feature--adults">
              {maxAdults}
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((good)=> (
                <li key={good} className="offer__inside-item"> {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="offer__user-name">
                {host.name}
              </span>
              { host.isPro ?
                <span className="offer__user-status">
                Pro
                </span> : <div></div>}

            </div>
            <div className="offer__description">
              <p className="offer__text">
                {description}
              </p>
            </div>
          </div>
          <OfferReviews reviews={reviews} />

          <FormComment
            reviewComment={reviewComment}
            fieldChangeHandle={fieldChangeHandle}
            ratingStars={ratingStars}
            ratingChangeHandle={ratingChangeHandle}
            handleSubmit={handleSubmit}
          />

        </div>
      </div>
    </>
  );
}

export default OfferCard;
