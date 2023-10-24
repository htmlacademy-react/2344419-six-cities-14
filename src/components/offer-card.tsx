
import { TypeOfferMock, TypeReviewMock } from '../types/types-mock';
import OfferReviews from './offer-reviews';

type OfferCardProps = {
offer:TypeOfferMock;
reviews: TypeReviewMock[];
}


function OfferCard({offer, reviews}:OfferCardProps):JSX.Element{

  const{isPremium, bedrooms, description, images, title, rating, type, maxAdults, price, host, goods} = offer;

  return(
    <>
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.map((image,index)=> (
            <div key={index} className="offer__image-wrapper">
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
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{width: `${rating * 20}%`}}></span>
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
              {goods.map((good,index)=> (
                <li key={index} className="offer__inside-item"> {good}
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

        </div>
      </div>
    </>
  );
}
export default OfferCard;
