import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, View } from 'react-native';
import ListItem from './components/list-item';

export default function App() {

  const newsItems = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 7,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 8,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 9,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
    {
      id: 10,
      title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti reprehenderit nam maxime iure cupiditate animi, excepturi fugiat vitae cumque vel.',
      author: 'Tokyo News',
      imageUrl: 'https://placehold.jp/100x100.png',
    },
  ]

  return (
    <SafeAreaView
      className="flex-1 bg-blue-300"

    >
      <FlatList
        data={newsItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            author={item.author}
            image={item.imageUrl}
          />
        )}
        className="bg-gray-100"
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}