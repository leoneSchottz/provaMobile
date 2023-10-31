import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* Background Image */}
			<Image source={require('../images/capa.jpg')} style={styles.backgroundImage} />
			<Text style={styles.burgerJointName}>Pizza Já</Text>
			<TouchableOpacity style={styles.nextButton}>
				<Link href="/home">
					<Text style={styles.buttonText}>Acesse o App</Text>
				</Link>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	backgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%',
		position: 'absolute',
	},
	burgerIcon: {
		position: 'absolute',
		top: '10%',
	},
	burgerJointName: {
		fontSize: 45,
		fontWeight: 'bold',
		color: '#FE5F00',
		position: 'absolute',
		top: '10%',
	},
	nextButton: {
		backgroundColor: '#FE5F00',
		padding: 15,
		borderRadius: 10,
		position: 'absolute',
		bottom: '10%',
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
	},
});

export default HomeScreen;
