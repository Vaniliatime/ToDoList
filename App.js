import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Galllery from "./Components/Galllery";
import Todo from "./Components/Todo";
import colors from "./colors";

function Home() {
	return (
		<View style={{flexDirection: "row"}}>
		<View style={styles.divider}/>

		<Text style={styles.title}>
			Krzysztof<Text style={{fontWeight: "bold", color: colors.blue}}>&nbsp;Kaszuba</Text>
		</Text>

		<View style={styles.divider}/>
	</View>
	);
}

const Tab = createMaterialBottomTabNavigator();

export default class App extends React.Component {

	render() {
		return (
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName="Home"
					activeColor="#e91e63"
					labelStyle={{fontSize: 12}}
					style={{backgroundColor: 'gray'}}
				>
					<Tab.Screen
						name="Home"
						component={Home}
						options={{
							tabBarLabel: 'Home',
							tabBarIcon:  ({color}) => (
								<AntDesign name="home" color={color} size={26}/>
							),
						}}
					/>
					<Tab.Screen
						name="Todo"
						component={Todo}
						options={{
							tabBarLabel: 'Lists',
							tabBarIcon:  ({color}) => (
								<AntDesign name="bars" color={color} size={26}/>
							),
						}}
					/>
					<Tab.Screen
						name="Gallery"
						component={Galllery}
						options={{
							tabBarLabel: 'Gallery',
							tabBarIcon:  ({color}) => (
								<AntDesign name="picture" color={color} size={26}/>
							),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
}




const styles = StyleSheet.create(
	{
		

		divider:
			{    //line
				backgroundColor: colors.lightBlue,
				height:          1,
				flex:            1,
				alignSelf:       "center",
				marginTop:260,
			},

		title:
			{
				fontSize:          38,
				fontWeight:        "bold",
				color:             colors.lightGrey,
				paddingHorizontal:20,
				marginTop:250,
			},

		

	});
