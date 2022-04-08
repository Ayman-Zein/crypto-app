import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import styles from './styles';
const index = (props) => {
	const { coinId, image, symbol, marketCapRank } = props;
	return (
		<View style={styles.container}>
			<Ionicons name='chevron-back-sharp' size={30} color='white' />
			<View style={styles.wrapper}>
				<Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
				<Text style={styles.text}>{String(symbol).toUpperCase()}</Text>
				<View style={styles.rankContainer}>
					<Text style={styles.rank}># {marketCapRank}</Text>
				</View>
			</View>
			<FontAwesome name={'star-o'} size={25} color={'white'} />
		</View>
	);
};

export default index;
