import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

const EscolhaScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			

			<Text style={styles.sectionTitle}>Bebidas Disponiveis</Text>
			<ScrollView showsHorizontalScrollIndicator={false}>
				<Image source={require('../../images/coca.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/guarana.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/agua.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/mate.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/pepsi.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/suco.jpg')} style={styles.carouselItem2} />
				<Image source={require('../../images/milkshake.jpg')} style={styles.carouselItem2} />
			</ScrollView>

			<View style={styles.bottomIcons}>
				<Link href="/home">
					<TouchableOpacity>
						<FontAwesome5 name="home" size={24} />
					</TouchableOpacity>
				</Link>
				<Link href="/drinks">
					<TouchableOpacity>
						<FontAwesome5 name="wine-bottle" size={24} />
					</TouchableOpacity>
				</Link>
				<Link href="/pizzas">
					<TouchableOpacity>
						<FontAwesome5 name="pizza-slice" size={24} />
					</TouchableOpacity>
				</Link>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
	},
	carouselItem2: {
		width: 300,
		height: 250,
		margin: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'black',
	},
	bottomIcons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#FE5F00',
		paddingVertical: 10,
		color: 'black',
		alignItems: 'center',
		position: 'relative',
		bottom : '0',
		left: '0'
	},
	sectionTitle: {
		fontSize: 30,
		fontWeight: 'bold',
		margin: 10,
		color: 'white',
	},
});

export default EscolhaScreen;
