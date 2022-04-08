import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	text: {
		color: 'white',
		marginHorizontal: 5
	},
	rankContainer: {
		paddingHorizontal: 2,
		paddingVertical: 2,
		backgroundColor: colors.medium,
		borderRadius: 4
	},
	rank: {
		color: 'white',
		fontWeight: 'bold'
	},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export default styles;
