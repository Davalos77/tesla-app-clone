import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Menu from "../Menu/index";

const CarItem = () => {
  const [locked, setLocked] = useState(false);

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="cog" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Giant Duracell</Text>
        <TouchableOpacity>
          <FontAwesome6 name="toolbox" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* Mileage */}
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <ScrollView>
        {/* Control Icons */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesome5 name="fan" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesome6 name="key" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesome name="lock" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        {/* Menu */}
        <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;
