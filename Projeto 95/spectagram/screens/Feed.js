import React from 'react';
import { Text, View } from 'react-native';

class Feed extends Component{
    render() {
        return(
            <View>
                <Text style={styles.text}> Feed </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fonWeight: 'bold',
    }
})

export default Feed;