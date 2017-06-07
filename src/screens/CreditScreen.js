import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';

const { height, width } = Dimensions.get('window');

const styles = {
  viewStyle: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 90,
    marginRight: 90,
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 90,
    marginRight: 90,
  },
};

export default class CreditScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Image
          source={require('../images/backgrounds/creditBackground.png')}
          style={{ position: 'absolute', height, width, zIndex: -100 }}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
          style={{ zIndex: 20 }}
        >
          <Image source={require('../images/exitButton.png')} style={{ height: 50, width: 50, position: 'absolute', right: 80, top: 80 }} />
        </TouchableOpacity>
        <Text style={[styles.headerStyle, { marginTop: 70, marginBottom: 20 }]}>
          CREDITS
        </Text>
        <Text style={styles.textStyle}>
          Artwork & Sound Design: Lynne Heller, http://lynnehellerprojects.com/{"\n"}
          Programming: Connor Dear, Kenneth Faria commitlabs.github.io {"\n"}
          Music: Tony Smith, http://tonysmithguitar.com/{"\n"}
        </Text>
        <Text style={styles.headerStyle}>
          PROJECT STATEMENT{"\n"}
        </Text>
        <Text style={styles.textStyle}>
          Pillflower World is a multi-part project (2004 - ongoing) consisting of medicinal pills and tablets assembled into miniature flower images and sculptures. These two and three dimensional pillflowers are used to decorate both functional and sculptural objects, through analogue and digital processes. The pieces that make up this ongoing series have been as diverse as a flower-filled toilet, martini glasses, wallpaper, window coverings, tiles, bedding and bouquets—a veritable pillflower world.
          {"\n"}
          {"\n"}
          Happiness can seemingly be produced through the use of modern pharmaceuticals; not only by taking them, but also by the magnetism of their colourful and candy-like appeal. The Pillflower Project emphasizes dynamic oppositions in contemporary culture: notions of happiness and sadness, self-remedy and self-sabotage, nostalgia and stark reality, intoxication and sobriety.
          {"\n"}
          {"\n"}
          The omni-presence of pills and drugs in our culture is augmented by practices of self-medication and pill swapping, evidence of a pill-popping society that is continually fed ubiquitous promotion and marketing advertisements that legitimate and foster our induced dependencies. In our culture, there is no space for slow enlightenment, we need revelation instantly. We search for quick-fixes that are often also accompanied by harmful effects.
          {"\n"}
          {"\n"}
          The pillflower compositions accentuate the range of soft, baby-like tints pills are coloured: pale pinks, blues, purples and greens. Brought together these sentimental colours signal a nostalgia for what we often refer to as a simpler time and domestic comforts. Within the context of the private sphere, they invite the viewer to think further about secrets of pill-taking that occur behind closed doors. The clean aesthetic and sterilized presentation of the Pillflower Project, alluded to by the hospital-green often used as border or background, references the site of illness as much as it does the decorative.{"\n"}
        </Text>
        <Text style={styles.headerStyle}>
          ARTIST'S BIOGRAPHY{"\n"}
        </Text>
        <Text style={styles.textStyle}>
          Lynne Heller is a post-disciplinary artist, an educator and academic. Her interests encompass material culture, new media performative interaction, graphic novels and sculptural installation. Heller completed her MFA at the School of the Art Institute of Chicago in 2004 and her PhD in 2016 at University College Dublin, Ireland from the department of Gender, Culture and Identity in the School of Humanities and Arts, with a research focus on feminist practice in online culture. Her research was practice-based, with a specialty in Digital Media Arts.  She is an Assistant Professor at OCAD University in the Faculty of Design and the Graduate Faculty, as well as being co-director of the Data Materialization Lab. She is also an adjunct faculty member of SMARTlab, Ireland.
        </Text>
      </View>
    );
  }
}
