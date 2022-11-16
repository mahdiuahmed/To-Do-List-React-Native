import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import Tasks from './components/Tasks';


const text = ['1', '2', '3', '4', '5'];

const completeTask = (index) => {
  let itemsCopy = [...text];
  itemsCopy.splice(index, 1);
  text(itemsCopy)
}


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>TO-DO</Text>
        <View style={styles.items}>
        {
            text.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Tasks text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  tasksWrapper: {
paddingTop: 80,
paddingHorizontal: 20,
  },
  sectionTitle: {
fontSize: 24,
fontWeight: 'bold'
},
  items: {

  },
});
