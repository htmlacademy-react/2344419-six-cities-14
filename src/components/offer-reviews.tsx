
import { DEFAULT_VALUE_NULL, MAX_LENGTH_REVIEW, MONTH_NAMES } from '../const';
import { TypeReview } from '../types/types-data';


type OfferCardProps = {
reviews: TypeReview[];
}


function OfferReviews({reviews}:OfferCardProps):JSX.Element{

  function compareDates(a: TypeReview, b: TypeReview): number {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  }
  const sortedComments = reviews ? [...reviews].sort(compareDates) : [];
  const slicedComments = sortedComments.slice(DEFAULT_VALUE_NULL, MAX_LENGTH_REVIEW);

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">{

        reviews.length === 1 ? 'Review' : 'Reviews'
      } &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          slicedComments.map((review)=> {
            const {rating, comment, date, user, id} = review;
            const inputDate = new Date(date);
            const month = MONTH_NAMES[inputDate.getMonth()];
            const year = inputDate.getFullYear();
            const formattedDate = `${month} ${year}`;


            return(
              <li key={id} className="reviews__item">
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
                  <time className="reviews__time" dateTime={date}>{formattedDate}</time>
                </div>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}
export default OfferReviews;
