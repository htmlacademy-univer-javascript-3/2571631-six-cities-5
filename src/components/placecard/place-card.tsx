export type SimpleCard = {
    isPremium : boolean,
    imageLink : string,
    price : number,
    isFavourite : boolean,
    rating : number,
    description : string,
    placeType : string;
}

export function PlaceCard({isPremium, imageLink, price, isFavourite, rating, description, placeType} : SimpleCard): JSX.Element {
    return (
        <article className="cities__card place-card">
            {(isPremium) && 
                <div className="place-card__mark">
                    <span>Premium</span>
                </div> 
            }
            <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                    <img className="place-card__image" src={imageLink} width={260} height={200} alt="Place image" />
                </a>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className={`place-card__bookmark-button button ${isFavourite && "place-card__bookmark-button--active"} button`}
                        type="button">
                        <svg className="place-card__bookmark-icon" width={18} height={19}>
                            <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">{isFavourite && "In bookmarks" || !(isFavourite) && "To bookmarks"}</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{ width: `${rating}%` }}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <a href="#">{description}</a>
                </h2>
                <p className="place-card__type">{placeType}</p>
            </div>
        </article>
    );
}