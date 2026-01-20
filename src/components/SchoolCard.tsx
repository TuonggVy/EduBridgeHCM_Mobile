import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { School } from '../types';
import { ChartColumn, MapPin, Star, Wallet } from 'lucide-react-native';

interface SchoolCardProps {
  school: School;
  onPress: () => void;
}

export const SchoolCard: React.FC<SchoolCardProps> = ({ school, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: school.logo }} style={styles.logo} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {school.name}
        </Text>
        {/* Địa chỉ */}
        <View style={styles.iconText}>
          <MapPin size={12} color="#64748b" />
          <Text style={styles.addressText}>{school.district}</Text>
        </View>
        {/* Điểm chuẩn */}
        <View style={styles.iconText}>
          <ChartColumn size={12} color="#2563eb" />
          <Text style={styles.cutoffText}>
            Điểm chuẩn: {school.cutoffScores.at(-1)?.score}
            </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',   
    gap: 4,              
  },
  addressText: {
    fontSize: 13,
    color: '#64748b',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  cutoffText: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '600',
  },
});
