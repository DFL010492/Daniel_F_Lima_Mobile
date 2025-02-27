import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: 'transparent', // Mantém a cor definida em headerBackgroundColor
      },
      reactLogo: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 180,
      },
      caption: {
        backgroundColor:'#E5BF3C',
      },
      informacao: {
        backgroundColor: '#E5BF3C',
        padding: 20,
        margin: 20,
        borderRadius: 20,
      },
});