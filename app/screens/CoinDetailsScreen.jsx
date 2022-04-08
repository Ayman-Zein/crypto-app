import React from 'react';
import { StyleSheet, View } from 'react-native';

import CoinDetailsHeader from '../components/CoinDetailsHeader';
import CoinCurrentPrice from '../components/CoinCurrentPrice';
import coin from '../../assets/data/crypto.json';

const CoinDetailsScreen = () => {
	const {
		id,
		image: { small },
		name,
		symbol,
		prices,
		market_data: { market_cap_rank, current_price, price_change_percentage_24h }
	} = coin;

	return (
		<View style={styles.container}>
			<CoinDetailsHeader coinId={id} image={small} symbol={symbol} marketCapRank={market_cap_rank} />
			<CoinCurrentPrice
				name={name}
				price={current_price.usd}
				pricePerc={price_change_percentage_24h}
				prices={prices}
			/>
		</View>
	);
};

export default CoinDetailsScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10
	}
});
