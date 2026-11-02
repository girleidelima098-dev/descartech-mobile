import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function MapaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Pontos de Coleta</Text>
      <TextInput style={styles.search} placeholder="Buscar por bairro (ex: Centro, Tatuapé)..." />
      
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>EcoPonto Central</Text>
          <Text style={styles.cardSub}>R. das Flores, 120 - Centro - Mogi das Cruzes</Text>
          <Text style={styles.badge}>95% cheio • 0,8 km</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>RecilaTech Tatuapé</Text>
          <Text style={styles.cardSub}>Av. Radial Leste, 554</Text>
          <Text style={styles.badgeGreen}>42% cheio • 1,4 km</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16, paddingTop: 60 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  search: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10, marginBottom: 16 },
  card: { backgroundColor: '#f9f9f9', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#eee', marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#2e7d32' },
  cardSub: { fontSize: 12, color: '#666', marginVertical: 4 },
  badge: { fontSize: 12, color: '#d32f2f', fontWeight: 'bold' },
  badgeGreen: { fontSize: 12, color: '#388e3c', fontWeight: 'bold' }
});