import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

const EscolhaScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.Icons}>
				<TouchableOpacity>
					<FontAwesome5 name="home" size={24} />
				</TouchableOpacity>
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

			<Text style={styles.sectionTitle}>Nossos Combos do Dia</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Link href="/lanche1">
					<View style={styles.carouselItemContainer}>
						<Image source={require('../../images/pizza1.jpg')} style={styles.carouselItem} />
						<Image source={require('../../images/coca.jpg')} style={styles.carouselItem2} />
					</View>
				</Link>
				<Link href="/lanche3">
					<View style={styles.carouselItemContainer}>
						<Image source={require('../../images/pizza3.jpg')} style={styles.carouselItem} />
						<Image source={require('../../images/agua.jpg')} style={styles.carouselItem2} />
					</View>
				</Link>
				<Link href="/lanche2">
					<View style={styles.carouselItemContainer}>
						<Image source={require('../../images/pizza2.jpg')} style={styles.carouselItem} />
						<Image source={require('../../images/suco.jpg')} style={styles.carouselItem2} />
					</View>
				</Link>
				<Link href="/lanche4">
					<View style={styles.carouselItemContainer}>
						<Image source={require('../../images/pizza4.jpg')} style={styles.carouselItem} />
						<Image source={require('../../images/suco.jpg')} style={styles.carouselItem2} />
					</View>
				</Link>
				<Link href="/lanche5">
					<View style={styles.carouselItemContainer}>
						<Image source={require('../../images/pizza5.jpg')} style={styles.carouselItem} />
						<Image source={require('../../images/coca.jpg')} style={styles.carouselItem2} />
					</View>
				</Link>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
	},
	carouselItemContainer: {
		flexDirection: 'row',
		width: '350',
		height: '350',
	},
	carouselItem: {
		width: 225,
		height: 350,
		margin: 10,
		borderRadius: 10,
	},
	carouselItem2: {
		width: 100,
		height: 350,
		margin: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'black',
	},
	Icons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: '#FE5F00',
		paddingVertical: 10,
		color: 'white',
	},
	apMarkerAlt: {
		color: 'black',
		padding: 10,
	},
	sectionTitle: {
		fontSize: 30,
		fontWeight: 'bold',
		margin: 10,
		color: 'white',
	},
});

export default EscolhaScreen;
