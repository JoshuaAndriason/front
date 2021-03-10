import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Linking } from "react-native";
import { ListItem, Avatar, Card, Image, Button } from "react-native-elements";

import { connect } from "react-redux";

function ArticleNews(props) {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const findArticles = async () => {
      const data = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=${props.idArticle}&apiKey=9d7ad6e83eb74e199011b19e8d8f2ec8`
      );
      const body = await data.json();
      console.log(body);
      setArticleList(body.articles);
    };

    findArticles();
  }, []);
  console.log(articleList);
  return (
    // Display list of articles from the API
    <ScrollView style={{ marginTop: 25 }}>
      {articleList.map((u, i) => {
        return (
          <Card key={i}>
            <Card.Title>{u.title}</Card.Title>
            <Card.Divider />
            <Card.Image source={{ uri: u.urlToImage }}></Card.Image>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>{u.content}</Text>
            <Card.Divider />
            <Button
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                backgroundColor: "#AADEC0",
              }}
              title="Voir Détail"
              onPress={() => Linking.openURL(u.url)}
            />
          </Card>
        );
      })}
    </ScrollView>
  );
}

function mapStateToProps(state) {
  return { idArticle: state.idArticle };
}
export default connect(mapStateToProps)(ArticleNews);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
