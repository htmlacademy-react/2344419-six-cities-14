
import { TypeReview } from '../types/types-data';
import { memo } from 'react';


type OfferCardProps = {
reviews: TypeReview[];
}

function OfferReviews({reviews}:OfferCardProps):JSX.Element{

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">{
        reviews.length === 1 ? 'Review' : 'Reviews'
      } &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review)=> {
          const {rating, comment,date, user} = review;

          return(
            <li key={user?.id} className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={user?.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">
                  {user?.name}
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: `${Math.round(rating * 20)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {comment}
                </p>
                <time className="reviews__time" dateTime={date}>{date}</time>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default memo(OfferReviews);
