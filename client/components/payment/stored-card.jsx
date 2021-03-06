/**
 * External dependencies
 */
var React = require( 'react' );

require( './stored-card.scss' );

module.exports = React.createClass( {
	displayName: 'StoredCard',

	render: function() {
		var card = this.props.card,
			expirationDate = this.moment( card.expiry ).format( 'MM/YY' ),
			cardClasses = 'stored-card ' + card.card_type.toLowerCase();

		return (
			<div className={ cardClasses }>
				<span id={ 'card-label-' + card.stored_details_id } className="stored-card__number">{ card.card_type } <span aria-hidden>****</span>{ card.card }</span>
				<span className="stored-card__name">{ card.name }</span>
				<span className="stored-card__expiration-date">{ this.translate( 'Expires %(date)s', {
					args: { date: expirationDate },
					context: 'date is of the form MM/YY'
				} ) }</span>
			</div>
		);
	}
} );
