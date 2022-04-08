import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	currPriceContainer: {
		paddingHorizontal: 10,
		paddingTop: 20
	},
	price: { color: 'white', fontSize: 30, fontWeight: 'bold', letterSpacing: 1 },
	name: { color: 'white', fontWeight: '600', fontSize: 16 },
	pricePercContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 4,
		paddingVertical: 5,
		borderRadius: 5
	},
	pricePer: { color: 'white', marginLeft: 4, fontWeight: '600' }
});

export default styles;
