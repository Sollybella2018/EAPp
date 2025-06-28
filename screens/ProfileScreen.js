import { View, Text, StyleSheet, Image, ScrollView ,SafeAreaView} from 'react-native';
import { useLayoutEffect } from 'react';
import { mockUser } from '../data/mockData';

function ProfileScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile 👤',
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
    });
  }, [navigation]);

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
       
      <Image source={{ uri: mockUser.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{mockUser.name}</Text>
      <Text style={styles.email}>{mockUser.email}</Text>

      <View style={styles.details}>
        <Text style={styles.label}>📍 Location:</Text>
        <Text style={styles.value}>{mockUser.location}</Text>

        <Text style={styles.label}>🛍 Orders:</Text>
        <Text style={styles.value}>{mockUser.totalOrders}</Text>

        <Text style={styles.label}>🌟 Membership:</Text>
        <Text style={styles.value}>{mockUser.membershipLevel}</Text>

        <Text style={styles.label}>📅 Joined:</Text>
        <Text style={styles.value}>{mockUser.joinDate}</Text>
      </View>

      <View style={styles.logoutButton}>
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </View>
    
    
    </ScrollView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3f2f25',
    flex: 1,
    justifyContent:'center'
    
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
  },
  email: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 20,
  },
  details: {
    width: '100%',
    paddingHorizontal: 16,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    color: '#ddd',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#5e3928',
    borderRadius: 8,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

