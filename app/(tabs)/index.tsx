import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from './indexStyle';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#E5BF3C' }}
      headerImage={
        <ThemedView style={styles.headerContainer}>
          <Image
            source={require('@/assets/images/bat-logo.png')}
            style={styles.reactLogo}
          />
          <ThemedView style={styles.caption}>
            <ThemedText style={{fontFamily: 'BlackOps', color: 'black'}}>BAT PASS GENARATOR</ThemedText>
          </ThemedView>

        </ThemedView>
      }>
    </ParallaxScrollView>
  );
}