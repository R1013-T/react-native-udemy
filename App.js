import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './components/list-item';

export default function App() {

  const newsItems = [
    {
      id: 1,
      title: 'The Lean Startup',
      author: 'Eric Ries',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 2,
      title: 'The Lean Startup',
      author: 'Eric Ries',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
  ]

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      {newsItems.map((newsItem) => (
        <ListItem
          key={newsItem.id}
          title={newsItem.title}
          author={newsItem.author}
          image={newsItem.imageUrl}
        />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}