import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

export default function App() {
  const [itemList, setItemList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addItemHandler = (itemTitle) => {
    setItemList((currentItems) => [
      ...currentItems,
      { key: Math.random().toString(), value: itemTitle },
    ]);
    setIsAddMode(false);
  };

  const removeItemHandler = (itemId) => {
    setItemList((currentItems) => {
      return currentItems.filter((item) => item.key !== itemId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new Item" onPress={() => setIsAddMode(true)} />
      <ListInput
        onAddItem={addItemHandler}
        visible={isAddMode}
        onCancelAdd={() => setIsAddMode(false)}
      />
      <FlatList
        data={itemList}
        renderItem={(itemData) => (
          <ListItem
            item={itemData.item.value}
            id={itemData.item.key}
            onDelete={removeItemHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
