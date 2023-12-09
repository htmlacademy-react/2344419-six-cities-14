import { MAX_LENGTH_COMMENT, MIN_LENGTH_COMMENT } from '../const';
import { useState, FormEvent, ChangeEvent, Fragment } from 'react';
import { postComment } from '../store/api-actions';
import { useAppDispatch } from '../hooks/hooks';
import { TypeResponseReview } from '../types/types-data';
import { useParams } from 'react-router-dom';

const RatingMap = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

function FormComment(): JSX.Element {
  const { id: offerId } = useParams();

  const [reviewComment, setReviewComment] = useState<string>('');
  const [ratingStars, setRatingStars] = useState<string>('');
  const dispatch = useAppDispatch();

  function fieldChangeHandle(evt: ChangeEvent<HTMLTextAreaElement>) {
    setReviewComment(evt.target.value);
  }

  function ratingChangeHandle(evt: ChangeEvent<HTMLInputElement>) {
    setRatingStars(evt.target.value);
  }

  function resetForm() {
    setReviewComment('');
    setRatingStars('');
  }

  const [isDisabled, setDisableStatus] = useState(false);

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setDisableStatus(true);
    const review: TypeResponseReview = {
      rating: Number(ratingStars),
      comment: reviewComment,
    };

    dispatch(postComment({ reviewData: review, offerId: offerId! }))
      .unwrap()
      .then(() => {
        resetForm();
      })
      .catch(() => {})
      .finally(() => setDisableStatus(false));
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingMap)
          .reverse()
          .map(([key, title]) => (
            <Fragment key={key}>
              <input
                onChange={ratingChangeHandle}
                className="form__rating-input visually-hidden"
                name="rating"
                value={key}
                id={`${key}-stars`}
                checked={key === ratingStars}
                type="radio"
                disabled={isDisabled}
              />
              <label
                htmlFor={`${key}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
                data-testid="star-item"
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        onChange={fieldChangeHandle}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            reviewComment.length < MIN_LENGTH_COMMENT ||
            reviewComment.length > MAX_LENGTH_COMMENT ||
            ratingStars === '' ||
            isDisabled
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
