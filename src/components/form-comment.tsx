
type FormComentProps ={
  reviewComment: string;
  fieldChangeHandle: (value: string)=> void;
  ratingStars: boolean[];
  ratingChangeHandle: (value: boolean[])=> void;
  handleSubmit:()=>void;
}

function FormComment({reviewComment, fieldChangeHandle, ratingStars, ratingChangeHandle, handleSubmit}: FormComentProps):JSX.Element{

  return (
    <form
      onSubmit={(evt) =>{
        evt.preventDefault();
        handleSubmit();

      }}
      className="reviews__form form" action="#" method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {['perfect','good','not bad','badly','terribly'].map((e, index)=> {
          const keyValue = `${index}-${e}`;
          return (
            <>
              <input key={keyValue} onChange={({target}) => {

                ratingChangeHandle([...ratingStars.slice(0, Number(target.value)), target.checked, ...ratingStars.slice(Number(target.value) + 1)]);
              }} className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio" checked={ratingStars[index]}
              />
              <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={e}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>);
        })}
      </div>
      <textarea onChange={(e) => fieldChangeHandle(e.target.value)} className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewComment}
      >

      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button" type="submit"
        >Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
