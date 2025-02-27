import { Image, Text } from 'react-native';

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
            <ThemedText style={{fontFamily: 'BlackOps', color: 'black'}}>BAT-FAMILY</ThemedText>
          </ThemedView>
        </ThemedView>
      }>
        <ThemedView style={styles.informacao}>
        <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5, textAlign: 'center', fontSize: 20}}>BATMAN</ThemedText>
          <Image
            source={require('@/assets/images/batman.png')}
            style={styles.reactLogo}
          />
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Real name: Bruce Thomas Wayne</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>First Appearance: Detective Comics #27(May, 1939)</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Created by: Bill Finger (writer), Bob Kane (artist)</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Affiliations: Bat-Family, Justice League</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Abilities: Genius-level intelligence, Master detective, Master escapologist, Peak human physical condition, Master martial artist, Access to high tech equipment</ThemedText>
        </ThemedView>

        <ThemedView style={styles.informacao}>
        <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5, textAlign: 'center', fontSize: 20}}>ALFRED</ThemedText>
          <Image
            source={require('@/assets/images/alfred.png')}
            style={styles.reactLogo}
          />
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Real Name: Alfred Beagle</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>First Appearance: Batman #16 (April–May 1943)</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Created by: Don C. Cameron (writer), Jerry Robinson (artist)</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Affiliations: Bat-Family</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Abilities: Medical training</ThemedText>
        </ThemedView>

        <ThemedView style={styles.informacao}>
        <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5, textAlign: 'center', fontSize: 20}}>NIGHTWING (FORMER ROBIN)</ThemedText>
          <Image
            source={require('@/assets/images/nightwing.png')}
            style={styles.reactLogo}
          />
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Real Name: Richard John Grayson</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>First Appearance: Detective Comics #38 (April 1940)</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Created by: Bill Finger (writer), Bob Kane (editor), Jerry Robinson (illustrator)</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Affiliations: Flying Graysons (formerly), Haly's Circus, Bat-Family, Justice League of America, Teen Titans, Titans, Outsiders, Justice League of Arkham</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Abilities: World Class Gymnast, Master Martial Artist</ThemedText>
        </ThemedView>

        <ThemedView style={styles.informacao}>
        <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5, textAlign: 'center', fontSize: 20}}>BATGIRL (ALSO ORACLE)</ThemedText>
          <Image
            source={require('@/assets/images/batgirl.png')}
            style={styles.reactLogo}
          />
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Real Name: Barbara Gordon</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>First Appearance: As Batgirl: Detective Comics #359 (January 1967), As Oracle: Suicide Squad #23 (January 1989)</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Created by: William Dozier (idea) Julius Schwartz (concept), Gardner Fox (writer), Carmine Infantino (artist)</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Affiliations: Bat-Family, Birds of Prey, Justice League</ThemedText>
          <ThemedText style={{fontFamily: 'BlackOps', color: 'black', padding: 5}}>Abilities: Skilled martial artist, Genius-level intellect, Superb hacker, Skilled detective, Photographic memory</ThemedText>
        </ThemedView>
    </ParallaxScrollView>
  );
}
