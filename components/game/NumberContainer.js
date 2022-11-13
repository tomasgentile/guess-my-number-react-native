import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Colors from '../../helpers/colors';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

// este codigo solo se ejecuta una vez, con lo cual si el usuario rota el telefono mientras esta usando la app, no se actualizan las dimensiones, para esto hay que utilizar el hook useWindowDimensions
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold'
    }
});