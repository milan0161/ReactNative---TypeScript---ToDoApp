import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Modal } from 'react-native';

interface TodoInputProps {
  isVisible: boolean;
  onAddTodo: (enteredData: string) => void;
  exitAddTodo: () => void;
}
const TodoInput = ({ isVisible, exitAddTodo, onAddTodo }: TodoInputProps) => {
  const [todoText, setTodoText] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const todoTextHandler = (enteredText: string) => {
    setTodoText(enteredText);
  };

  const onAddTodoHandler = () => {
    if (todoText.trim().length === 0) {
      setIsError(true);
      setError('You can not set empty todo');
      return;
    }
    onAddTodo(todoText);
    setTodoText('');
    setIsError(false);
    exitAddTodo();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.todoText}>Add new Todo</Text>

          <TextInput
            value={todoText}
            style={styles.textInput}
            onChangeText={todoTextHandler}
          />
          {isError && <Text style={styles.errorText}>{error}</Text>}
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Cancel" color={'#ed5045'} onPress={exitAddTodo} />
          </View>
          <View style={styles.btn}>
            <Button onPress={onAddTodoHandler} title="Save" color={'#cdeaec'} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    padding: 16,
    backgroundColor: '#20759a',
  },
  inputContainer: {
    marginTop: 50,
    alignItems: 'center',
    gap: 20,
  },
  todoText: {
    color: '#fff',
    fontSize: 25,
  },
  textInput: {
    borderWidth: 1,
    width: '90%',
    paddingHorizontal: 16,
    paddingVertical: 5,
    color: '#fff',
    fontSize: 20,
    borderColor: '#cdeaec',
    backgroundColor: '#26adb2',
  },
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    width: 100,
    marginHorizontal: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default TodoInput;
