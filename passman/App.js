import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>
            A Simple Password manager to save all your passwords saftely and
            securely
          </Text>
        </View>
        <View>
          <Text>Actions</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Retrive Passwords</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Add New Passwords</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
