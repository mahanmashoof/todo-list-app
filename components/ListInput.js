import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const ListInput = (props) => {
  const [itemToBuy, setItemToBuy] = useState("");

  const inputHandler = (enteredText) => {
    setItemToBuy(enteredText);
  };

  const addItemHandler = () => {
    props.onAddItem(itemToBuy);
    setItemToBuy("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item to buy"
          style={styles.input}
          onChangeText={inputHandler}
          value={itemToBuy}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.actionButton}>
            <Button title="ADD" onPress={addItemHandler} />
          </View>
          <View style={styles.actionButton}>
            <Button title="Cancel" color="red" onPress={props.onCancelAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "60%",
  },
  actionButton: {
    width: "40%",
  },
});

export default ListInput;
