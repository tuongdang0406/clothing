import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsMap } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview";

import "./collections-overview";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsMap,
});

export default connect(mapStateToProps)(CollectionsOverview);
