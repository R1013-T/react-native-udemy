import { WebView } from 'react-native-webview';
import { Text, SafeAreaView, StyleSheet } from "react-native";
import { ClipButton } from '../components/clip-button';
import { useDispatch, useSelector } from 'react-redux'
import { addClip, deleteClip } from '../store/userSlice';

export default function ArticleScreen({ route, navigation }) {
  const { article } = route.params;
  const dispatch = useDispatch();
  const clips = useSelector((state) => state.user.clips);
  const isClipped = clips.some((clip) => clip.url === article.url);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <ClipButton
        onPress={() => {
          if (isClipped) {
            dispatch(deleteClip(article));
          } else {
            dispatch(addClip(article));
          }
        }}
        enabled={isClipped} />
      <WebView
        source={{ uri: article.url }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
