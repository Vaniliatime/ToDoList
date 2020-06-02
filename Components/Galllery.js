import React from "react";
import { StyleSheet,Image,ScrollView} from 'react-native';
import colors from "../colors";


export default class Gallery extends React.Component {
	render() {
		return (
			<ScrollView>
   <Image 
     style={styles.profileImg}
     source={require('../assets/gallery/image1.png',) }>
		 
    </Image>

	<Image
     style={styles.profileImg}
     source={require('../assets/gallery/image2.png',)}>
		 
    </Image>

	<Image
     style={styles.profileImg}
     source={require('../assets/gallery/image3.png',)}>
		 
    </Image>

	<Image
     style={styles.profileImg}
     source={require('../assets/gallery/image4.png',)}>
		 
    </Image>

	<Image
   	style={styles.profileImg}
   	source={require('../assets/gallery/image5.png',)}>
		 
    </Image>

	<Image
   	style={styles.profileImg}
   	source={require('../assets/gallery/image6.png',)}>
		 
    </Image>


	<Image
   	style={styles.profileImg}
   	source={require('../assets/gallery/image7.png',)}>
		 
    </Image>

	<Image
   	style={styles.profileImg}
   	source={require('../assets/gallery/image8.png',)}>
		 
    </Image>

	<Image
   	style={styles.profileImg}
   	source={require('../assets/gallery/image9.png',)}>
		 
    </Image>

	<Image
   	style={styles.profileImg}
   	source={require('../assets/gallery/image10.png',)}>
		 
    </Image>

</ScrollView>
		);
	}
}







const styles = StyleSheet.create(
	{
		
		  profileImg: {
			height: 120,
			width: 120,
			borderRadius: 60,
			marginTop:20,
			marginLeft:130,
		  },

		 

		

	
	});