import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import colors from './app/config/colors';
import CoinDetailsScreen from './app/screens/CoinDetailsScreen';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<HomeScreen />
			{/* <CoinDetailsScreen /> */}
			<StatusBar style='light' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black,
		paddingTop: 50
	}
});
