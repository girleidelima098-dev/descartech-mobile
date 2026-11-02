import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function CarteiraScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Minha Carteira</Text>
      <Text style={styles.subTitle}>4 cupons disponíveis</Text>

      <View style={styles.walletCard}>
        <View>
          <Text style={styles.walletLabel}>TOTAL ECONOMIZADO</Text>
          <Text style={styles.walletValue}>R$ 125,00</Text>
        </View>
        <View>
          <Text style={styles.walletLabel}>DESCARTES</Text>
          <Text style={styles.walletValueCenter}>5</Text>
        </View>
      </View>

      <View style={styles.couponCard}>
        <View>
          <Text style={styles.couponStore}>Loja Tech Mogi</Text>
          <Text style={styles.couponDesc}>Informática</Text>
        </View>
        <Text style={styles.couponDiscount}>15% OFF</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16, paddingTop: 60 },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  subTitle: { fontSize: 12, color: '#666', marginBottom: 16 },
  walletCard: { backgroundColor: '#2e7d32', borderRadius: 12, padding: 16, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  walletLabel: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  walletValue: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 4 },
  walletValueCenter: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 4, textAlign: 'center' },
  couponCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee', padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  couponStore: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  couponDesc: { fontSize: 12, color: '#666' },
  couponDiscount: { fontSize: 14, fontWeight: 'bold', color: '#1976d2' }
});