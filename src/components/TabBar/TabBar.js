import React from "react";
import {View, Text} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./TabBar.style";

const TabBar = ({tabs, activeTab, iconName}) => {
  return (
    <View style={styles.tabBar}>
      {iconName && (
        <Icon name={iconName} size={22} color="white" style={styles.icon} />
      )}
      {tabs.map((item, index) =>
        item === activeTab ? (
          <View key={String(index)} style={styles.activeTab}>
            <Text style={styles.activeTabText}>{item}</Text>
            <View style={styles.tabLine} />
          </View>
        ) : (
          <Text key={String(index)} style={styles.tabText}>
            {item}
          </Text>
        ),
      )}
    </View>
  );
};

export default TabBar;
