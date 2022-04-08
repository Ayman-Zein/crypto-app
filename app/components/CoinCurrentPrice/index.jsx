import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

const index = ({ name, price, pricePerc, prices }) => {
	const percentageColor = pricePerc < 0 ? '#ea3943' : '#16c784' || 'white';

	return (
		<View style={styles.container}>
			<View style={styles.currPriceContainer}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.price}>$ {price}</Text>
			</View>
			<View style={[ styles.pricePercContainer, { backgroundColor: percentageColor } ]}>
				<AntDesign name={pricePerc < 0 ? 'caretdown' : 'caretup'} size={12} color={'white'} />
				<Text style={styles.pricePer}>{Number(pricePerc).toFixed(2)} %</Text>
			</View>
		</View>
	);
};

export default index;
