import { View, Text, Pressable, StyleSheet } from 'react-native';

interface SingleTodoProps {
  todoData: { item: { id: string; data: string } };
  onDelete: (id: string) => void;
}

const SingleTodo = ({ todoData, onDelete }: SingleTodoProps) => {
  return (
    <Pressable
      android_ripple={{ color: '#26adb2' }}
      onPress={onDelete.bind(null, todoData.item.id)}
    >
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{todoData.item.data}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fffbe3',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  todoText: {
    fontSize: 18,
  },
});

export default SingleTodo;
