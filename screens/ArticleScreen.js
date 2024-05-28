import { WebView } from 'react-native-webview';
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function ArticleScreen({ route, navigation }) {
  const { article } = route.params;

  return (
    // <SafeAreaView
    // >
      <WebView
      style={styles.container}
        source={{ uri: article.url }}
      />
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
