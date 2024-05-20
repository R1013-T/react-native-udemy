import { Image, StyleSheet, Text, View } from "react-native";

/**
 * ListItem component
 * 
 * @param {
 *  image: string,
 *  title: string,
 *  author: string,
 * } props
 * 
 */
export default function ListItem(props) {
  return <View
    className="flex-row mb-1.5"
  >
    <Image
      style={{ width: 100, height: 100 }}
      source={
        {
          uri: props.image,
        }
      }
    />
    <View
      className="flex-1 flex-col justify-between gap-2 h-[100px] p-2 py-1.5"
    >
      <Text
        numberOfLines={3}
        className="text-lg"
      >
        {props.title}
      </Text>
      <Text
        className="text-sm"
      >
        {props.author}
      </Text>
    </View>
  </View>;
}