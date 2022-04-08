import React from 'react';
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

const index = ({ coinItem }) => {
	const { name, symbol, image, current_price, price_change_percentage_24h, market_cap, market_cap_rank } = coinItem;

	const formatMarketCap = (marketCap) => {
		//const mac = Number(marketCap)
		if (marketCap > 1e12) {
			return `${(marketCap / 1e12).toFixed(3)} T`;
		}
		if (marketCap > 1e9) {
			return `${(marketCap / 1e9).toFixed(3)} B`;
		}
		if (marketCap > 1e6) {
			return `${(marketCap / 1e6).toFixed(3)} M`;
		}
		if (marketCap > 1e3) {
			return `${(marketCap / 1e3).toFixed(3)} K`;
		}
		return marketCap;
	};
	const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784' || 'white';
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: image }} />
			<View style={styles.infoContainer}>
				<Text style={styles.head}>{name}</Text>
				<View style={styles.info}>
					<View style={styles.rankContainer}>
						<Text style={styles.rank}>{market_cap_rank}</Text>
					</View>
					<Text style={[ styles.text, { textTransform: 'uppercase' } ]}>{symbol}</Text>
					<AntDesign
						style={styles.icon}
						name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
						size={14}
						color={percentageColor}
					/>
					<Text style={[ styles.text, { color: percentageColor } ]}>
						{Number(price_change_percentage_24h).toFixed(2)} %
					</Text>
				</View>
			</View>
			<View style={styles.valuesContainer}>
				<Text style={styles.head}>{current_price}</Text>
				<Text style={styles.text}> MCap {formatMarketCap(market_cap)} </Text>
			</View>
		</View>
	);
};

export default index;
