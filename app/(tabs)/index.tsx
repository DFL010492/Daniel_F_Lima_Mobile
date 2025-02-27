import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from './indexStyle';
import ParallaxScrollView from '@/components/ParallaxScrollView';



interface Character {
  name: string;
  image: any;
  details: string[];
}

export default function HomeScreen() {
  const [visibleInfo, setVisibleInfo] = useState<{ [key: string]: boolean }>({});

  const toggleInfo = (characterName: string) => {
    setVisibleInfo((prevState) => ({
      ...prevState,
      [characterName]: !prevState[characterName],
    }));
  };

  const characters: Character[] = [
    {
      name: 'BATMAN',
      image: require('@/assets/images/batman.png'),
      details: [
        'Real name: Bruce Thomas Wayne',
        'First Appearance: Detective Comics #27 (May, 1939)',
        'Created by: Bill Finger (writer), Bob Kane (artist)',
        'Affiliations: Bat-Family, Justice League',
        'Abilities: Genius-level intelligence, Master detective, Master escapologist, Peak human physical condition, Master martial artist, Access to high tech equipment',
      ],
    },
    {
      name: 'ALFRED',
      image: require('@/assets/images/alfred.png'),
      details: [
        'Real Name: Alfred Beagle',
        'First Appearance: Batman #16 (April–May 1943)',
        'Created by: Don C. Cameron (writer), Jerry Robinson (artist)',
        'Affiliations: Bat-Family',
        'Abilities: Medical training',
      ],
    },
    {
      name: 'NIGHTWING',
      image: require('@/assets/images/nightwing.png'),
      details: [
        'Real Name: Richard John Grayson',
        'First Appearance: Detective Comics #38 (April 1940)',
        'Created by: Bill Finger (writer), Bob Kane (editor), Jerry Robinson (illustrator)',
        'Affiliations: Flying Graysons (formerly), Haly’s Circus, Bat-Family, Justice League of America, Teen Titans, Titans, Outsiders, Justice League of Arkham',
        'Abilities: World Class Gymnast, Master Martial Artist',
      ],
    },
    {
      name: 'BATGIRL',
      image: require('@/assets/images/batgirl.png'),
      details: [
        'Real Name: Barbara Gordon',
        'First Appearance: As Batgirl: Detective Comics #359 (January 1967), As Oracle: Suicide Squad #23 (January 1989)',
        'Created by: William Dozier (idea), Julius Schwartz (concept), Gardner Fox (writer), Carmine Infantino (artist)',
        'Affiliations: Bat-Family, Birds of Prey, Justice League',
        'Abilities: Skilled martial artist, Genius-level intellect, Superb hacker, Skilled detective, Photographic memory',
      ],
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#E5BF3C' }}
      headerImage={
        <ThemedView style={styles.headerContainer}>
          <Image source={require('@/assets/images/bat-logo.png')} style={styles.reactLogo} />
          <ThemedView style={styles.caption}>
            <ThemedText style={{ fontFamily: 'BlackOps', color: 'black' }}>BAT-FAMILY</ThemedText>
          </ThemedView>
        </ThemedView>
      }
    >
      {characters.map((character) => (
        <ThemedView key={character.name} style={styles.informacao}>
          <TouchableOpacity onPress={() => toggleInfo(character.name)}>
            <ThemedText style={{ fontFamily: 'BlackOps', color: 'black', padding: 5, textAlign: 'center', fontSize: 20 }}>
              {character.name}
            </ThemedText>
            <Image source={character.image} style={styles.reactLogo} />
          </TouchableOpacity>
          {visibleInfo[character.name] &&
            character.details.map((detail, index) => (
              <ThemedText key={index} style={{ fontFamily: 'BlackOps', color: 'black', padding: 5 }}>
                {detail}
              </ThemedText>
            ))}
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}
