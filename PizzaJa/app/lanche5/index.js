import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const AppNavigation = ({ navigation }) => {
	// State variables
	const [quantidade, setQuantidade] = useState(1);
	const [selectedBebida, setSelectedBebida] = useState(null);
	const [produto, setProduto] = useState(null);
	const [bebidas, setBebidas] = useState([]);

	useEffect(() => {
		const produtoId = 2;
		if (produtoId) {
			const produtoUrl = `http://localhost:3000/produtos/${produtoId}`;
			axios
				.get(produtoUrl)
				.then((response) => {
					setProduto(response.data);
				})
				.catch((error) => {
					console.error('Erro ao buscar informações do produto:', error);
				});
		}

		const bebidasUrl = 'http://localhost:3000/produtos/';
		axios
			.get(bebidasUrl)
			.then((response) => {
					setBebidas(response.data.filter(val => val.categoria_id == 2));
			})
			.catch((error) => {
				console.error('Erro ao buscar informações das bebidas:', error);
			});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Link href="/home">
					<FontAwesome5 name="arrow-left" size={24} color="white" />
				</Link>
				<Text style={styles.headerText}>Detalhes</Text>
			</View>

			<Image source={require('../../images/pizza1.jpg')} style={styles.pizzaImage} />

			<View style={styles.pizzaDetails}>
				{produto && (
					<View>
						<Text style={styles.pizzaName}>{produto.nome}</Text>
						<Text style={styles.pizzaPrice}>{`R$${produto.preco}`}</Text>
						<Text style={styles.pizzaDescriprition}>{produto.descricao}</Text>
					</View>
				)}

				<Picker
					selectedValue={selectedBebida ? selectedBebida.id : null}
					onValueChange={(value) => setSelectedBebida(bebidas.find((bebida) => bebida.id === value))}
					style={styles.picker}>
					<Picker.Item label="Selecione uma bebida" value={null} />
					{bebidas.map((bebida) => (
						<Picker.Item key={bebida.id} label={bebida.nome} value={bebida.id} />
					))}
				</Picker>
			</View>

			<TouchableOpacity style={styles.confirmButton}>
				<Text style={styles.confirmButtonText}>Confirmar Pedido</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginTop: 20,
		marginBottom: 10,
	},
	headerText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
	pizzaImage: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
	},
	pizzaDetails: {
		padding: 20,
		color: 'white',
	},
	pizzaName: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
		color: 'white',
	},
	pizzaPrice: {
		fontSize: 18,
		color: 'green',
		marginBottom: 10,
	},
	quantityControl: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	quantityButton: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: 'white',
		color: 'white',
	},
	quantityText: {
		fontSize: 18,
		marginHorizontal: 10,
		color: 'white',
	},
	pizzaDescriprition: {
		fontSize: 16,
		marginBottom: 20,
		color: 'white',
	},
	confirmButton: {
		backgroundColor: '#FE5F00',
		alignItems: 'center',
		padding: 15,
	},
	confirmButtonText: {
		color: 'white',
		fontWeight: 'bold',
	},
	picker: {
		marginTop: 10,
		marginBottom: 20,
	},
});

export default AppNavigation;
