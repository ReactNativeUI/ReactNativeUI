import { SafeAreaView, ScrollView } from 'react-native';
import {
  H1,
  H2,
  Image,
  ImageGallery,
  ImageThumbnail,
  Text,
  View,
} from 'reactnativeui';

import { ExampleView } from '../components';

export default function Images() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <H1>Images</H1>

          <H2>Responsive images</H2>
          <Text>
            Images automatically scale to fit the width of their container.
          </Text>
          <ExampleView>
            <Image height={300} source={require('../../assets/icon.png')} />
          </ExampleView>

          <H2>Image thumbnails</H2>
          <Text>Provides an image a rounded 1px border appearance.</Text>
          <ExampleView>
            <ImageThumbnail
              height={100}
              source={require('../../assets/icon.png')}
              width={100}
            />
          </ExampleView>

          <H2>Image Gallery</H2>
          <Text>A gallery of images.</Text>
          <ExampleView>
            <ImageGallery>
              <ImageThumbnail
                height={100}
                source={require('../../assets/icon.png')}
                width={100}
              />
              <ImageThumbnail
                height={100}
                source={require('../../assets/icon.png')}
                width={100}
              />
              <ImageThumbnail
                height={100}
                source={require('../../assets/icon.png')}
                width={100}
              />
            </ImageGallery>
          </ExampleView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
