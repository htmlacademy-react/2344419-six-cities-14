
import { TypeReviewMock } from '../types/types-mock';

type OfferCardProps = {
reviews: TypeReviewMock[];
}

function OfferReviews({ reviews}:OfferCardProps):JSX.Element{

  return(
    <>
      {reviews.map((review,index)=> {
        const {rating, comment,date, user:{avatarUrl, name,id}} = review;
        return(
          <section key={id} className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{index + 1}</span></h2>
            <ul className="reviews__list">
              <li className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
                  </div>
                  <span className="reviews__user-name">
                    {name}
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{width: `${rating * 20}%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    {comment}
                  </p>
                  <time className="reviews__time" dateTime={date}>{date}</time>
                </div>
              </li>
            </ul>
          </section>
        );
      })}
    </>
  );
}
export default OfferReviews;
