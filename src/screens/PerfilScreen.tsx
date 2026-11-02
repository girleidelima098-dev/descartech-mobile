import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PerfilScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Perfil</Text>
      
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Girleide Araujo de Menezes</Text>
        <Text style={styles.email}>girleide@email.com</Text>
        <Text style={styles.verified}>Usuária Verificada ✓</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.row}>CPF: •••.•••.890-12</Text>
        <Text style={styles.row}>Telefone: (11) 9 8765-4321</Text>
        <Text style={styles.row}>Cidade/Estado: Mogi das Cruzes – SP</Text>
        <Text style={styles.row}>Descartes realizados: 5 descartes</Text>
      </View>

      <TouchableOpacity 
        style={styles.btnLogout}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.btnLogoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16, paddingTop: 60 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  profileInfo: { alignItems: 'center', marginBottom: 24 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  email: { fontSize: 12, color: '#666', marginVertical: 4 },
  verified: { color: '#2e7d32', fontSize: 12, fontWeight: 'bold' },
  box: { backgroundColor: '#f9f9f9', padding: 16, borderRadius: 12, marginBottom: 24 },
  row: { fontSize: 14, color: '#444', marginBottom: 12 },
  btnLogout: { borderWidth: 1, borderColor: '#d32f2f', padding: 14, borderRadius: 8, alignItems: 'center' },
  btnLogoutText: { color: '#d32f2f', fontWeight: 'bold' }
});