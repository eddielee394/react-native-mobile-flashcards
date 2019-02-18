import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./styles/SliderEntry.style";
import SliderEntry from "./SliderEntry";
import styles from "./styles/index.style";

export default class Slider extends Component {
  state = {
    activeSlide: 1
  };

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  get pagination() {
    const { data } = this.props;
    const { activeSlide } = this.state;

    return (
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotColor={"rgba(255, 255, 255, 0.92)"}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={this._sliderRef}
        tappableDots={!!this._sliderRef}
      />
    );
  }

  render() {
    const { data } = this.props;

    const renderCarousel = (
      <Carousel
        ref={c => (this._sliderRef = c)}
        data={data}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        layout={"stack"}
        layoutCardOffset={18}
        loop={true}
        onSnapToItem={index => this.setState({ activeSlide: index })}
      />
    );

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {this.pagination}
          {renderCarousel}
        </View>
      </SafeAreaView>
    );
  }
}
