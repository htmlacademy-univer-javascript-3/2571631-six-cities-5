import React, { useState, useCallback } from 'react';

type FormData = {
  review: string;
  rating: number;
};

export function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    review: '',
    rating: 1,
  });

  const handleFieldChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = evt.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    },
    []
  );

  const isFormValid = formData.review.length >= 50 && formData.rating > 0;

  const ratingStars = (value: number, title: string) => (
    <>
      <input
        className="form__rating-input visually-hidden"
        onChange={handleFieldChange}
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={formData.rating === value}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[
          { value: 5, title: 'perfect' },
          { value: 4, title: 'good' },
          { value: 3, title: 'not bad' },
          { value: 2, title: 'badly' },
          { value: 1, title: 'terribly' },
        ].map(({ value, title }) => ratingStars(value, title))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        onChange={handleFieldChange}
        value={formData.review}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
}
