import { FlatList } from 'react-native';
import ListItem from '../components/list-item';
import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { NEWS_API_KEY } from '@env';

export default function Home({ navigation }) {
  const [newsItems, setNewsItems] = useState([]);

  const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${NEWS_API_KEY}`;

  const fetchNews = async () => {
    try {
      const res = await fetch(URL)
      const newsItems = await res.json()

      setNewsItems(newsItems.articles)
    } catch (error) {
      console.error('Error fetching news', error)
    }
  }


  useEffect(() => {
    fetchNews()
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className="flex-1"
        forceInset={{ top: 'never' }}
      >
        <FlatList
          data={newsItems}
          keyExtractor={item => item.id}
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
    </SafeAreaProvider>
  );
}