import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from 'react-redux'
import ListItem from "../components/list-item";

export default function ClipScreen({ navigation }) {
  const clips = useSelector((state) => state.user.clips);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <FlatList
        data={clips}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            title={item.title}
            author={item.author}
            image={item.urlToImage}
            onPress={() => {
              navigation.navigate('Article', {
                article: item,
              })
            }}
          />
        )}
        className="bg-gray-100"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
