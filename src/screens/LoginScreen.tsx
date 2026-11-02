import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [tipoUsuario, setTipoUsuario] = useState('Cliente');
  const [email, setEmail] = useState('girleide@email.com');
  const [senha, setSenha] = useState('********');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DescarteTech</Text>
      <Text style={styles.subtitle}>Descarte eletrônicos com responsabilidade e ganhe recompensas</Text>

      <View style={styles.tabContainer}>
        {['Cliente', 'Cooperativa', 'Parceiro'].map((tipo) => (
          <TouchableOpacity
            key={tipo}
            style={[styles.tabButton, tipoUsuario === tipo && styles.tabActive]}
            onPress={() => setTipoUsuario(tipo)}
          >
            <Text style={[styles.tabText, tipoUsuario === tipo && styles.textActive]}>{tipo}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>E-MAIL</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>SENHA</Text>
      <TextInput style={styles.input} value={senha} secureTextEntry onChangeText={setSenha} />

      {}
      <TouchableOpacity 
        style={styles.btnEntrar}
        onPress={() => navigation.replace('MainTabs')}
      >
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 24, justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#111' },
  subtitle: { fontSize: 12, color: '#666', textAlign: 'center', marginBottom: 24 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 20, padding: 4 },
  tabButton: { flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 6 },
  tabActive: { backgroundColor: '#2e7d32' },
  tabText: { fontSize: 14, color: '#444' },
  textActive: { color: '#fff', fontWeight: 'bold' },
  label: { fontSize: 12, fontWeight: 'bold', color: '#555', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 16, backgroundColor: '#fafafa' },
  btnEntrar: { backgroundColor: '#2e7d32', padding: 14, borderRadius: 8, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});