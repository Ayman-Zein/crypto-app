import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		borderBottomColor: colors.light,
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginBottom: 5
	},
	image: {
		width: 30,
		height: 30,
		alignSelf: 'center'
	},
	infoContainer: { marginHorizontal: 10 },
	info: {
		flexDirection: 'row'
	},
	rankContainer: {
		backgroundColor: colors.medium,
		paddingHorizontal: 5,
		borderRadius: 4,
		marginRight: 5,
		alignItems: 'center'
	},
	rank: {
		color: colors.white
	},
	text: {
		color: colors.white,
		marginRight: 5
	},
	valuesContainer: {
		marginLeft: 'auto'
	},
	head: {
		color: colors.white,
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 4
	},
	icon: {
		alignSelf: 'center',
		marginRight: 5
	}
});

export default styles;
