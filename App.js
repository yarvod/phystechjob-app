import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import NewsItem from "./News";
import news_service from "./api/news_service";

export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [newsItems, setNewsItems] = React.useState();

  React.useEffect(() => {
    news_service.getNews().then(response => {
      setNewsItems(response.data.results);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>News</Text>
        <Text>Loading ...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>News</Text>
          <View style={styles.items}>
            {newsItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {}}
                >
                  <NewsItem text={item.preview_text} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});