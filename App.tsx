import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import TodoInput from './components/TodoInput';
import { useState } from 'react';
import SingleTodo from './components/SingleTodo';

interface Todo {
  id: string;
  data: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputIsVisible, setInputIsVisible] = useState<boolean>(false);

  const startTodoHandler = () => {
    setInputIsVisible(true);
  };
  const exitAddTodoHandler = () => {
    setInputIsVisible(false);
  };

  const onAddTodo = (enteredData: string) => {
    setTodos((current) => [
      ...current,
      { data: enteredData, id: Math.random().toString() },
    ]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <TodoInput
          isVisible={inputIsVisible}
          onAddTodo={onAddTodo}
          exitAddTodo={exitAddTodoHandler}
        />
        <View style={styles.todoContainer}>
          <Text style={styles.listTitle}>Your Todo List</Text>
          <FlatList
            data={todos}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={(itemData) => {
              return (
                <SingleTodo todoData={itemData} onDelete={deleteTodoHandler} />
              );
            }}
          ></FlatList>
        </View>
        <View style={styles.addTodoBtn}>
          <Button
            title="Add New Todo"
            color="#9be0e0"
            onPress={startTodoHandler}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#20759a',
    paddingTop: 53,
  },
  todoContainer: {
    flex: 5,
  },
  addTodoBtn: {
    width: '20%',
    position: 'absolute',
    bottom: '20%',
    left: '40%',
  },
  listTitle: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    marginTop: 30,
    marginBottom: 20,
  },
});
