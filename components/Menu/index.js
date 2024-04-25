import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../Menu/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Menu = () => {
  return (
    <View style={styles.menuItems}>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <MaterialCommunityIcons name="music" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Media</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <MaterialCommunityIcons name="music" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Software Update</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome6 name="temperature-quarter" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Climate</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name="car" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>controls</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome6 name="bolt-lightning" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Charging</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <Entypo name="location-pin" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Location</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name="shopping-bag" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Upgrades</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <FontAwesome5 name="key" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Phone Key</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <MaterialCommunityIcons name="wrench" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Services</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.menuRow}>
          <Feather name="alert-triangle" size={24} color="white" />
          <View style={styles.menuTextBox}>
            <Text style={styles.menuText}>Roadside Assistance</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color="#4D4D4E" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
