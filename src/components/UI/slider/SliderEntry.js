import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ParallaxImage } from "react-native-snap-carousel";
import styles from "./styles/SliderEntry.style";
import { Icon, Text } from "native-base";

export default class SliderEntry extends Component {
  get image() {
    const {
      data: { imgUrl },
      parallax,
      parallaxProps,
      even
    } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: imgUrl }}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {}
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.25)"}
        {...parallaxProps}
      />
    ) : (
      <Image source={{ uri: imgUrl }} style={styles.image} />
    );
  }

  render() {
    const {
      data: { id, title, cards },
      even,
      navigation,
      openItem
    } = this.props;

    const cardsLength = cards.length;

    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}
      >
        {title.toUpperCase()}
      </Text>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => {
          openItem(id);
        }}
      >
        <View style={styles.shadow} />
        <View
          style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        >
          {this.image}
          <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          />
        </View>
        <View
          style={[styles.textContainer, even ? styles.textContainerEven : {}]}
        >
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}
          >
            <Icon
              name="albums"
              style={[
                styles.subtitle,
                styles.textIcon,
                even ? styles.subtitleEven : {}
              ]}
            />
            {cardsLength} Cards
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
