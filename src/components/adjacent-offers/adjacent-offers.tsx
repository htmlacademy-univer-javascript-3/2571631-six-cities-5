import { OfferList } from '../list-of-offers/list-of-offers';
import { OfferType } from '../../mocks/offer';

type NearbyOffersListProps = {
  offers: OfferType[];
};

const NearbyOffersList: React.FC<NearbyOffersListProps> = ({ offers }) => {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighborhood
        </h2>
        <OfferList offers={offers} />
      </section>
    </div>
  );
};

export default NearbyOffersList;
