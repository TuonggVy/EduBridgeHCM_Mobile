import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AIRecommendation } from '../types';

interface RecommendationCardProps {
  recommendation: AIRecommendation;
  rank: number;
  onPress: () => void;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  recommendation,
  rank,
  onPress,
}) => {
  const getRankColor = (rank: number) => {
    if (rank === 1) return '#f59e0b';
    if (rank === 2) return '#94a3b8';
    if (rank === 3) return '#cd7f32';
    return '#64748b';
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return '#10b981';
    if (probability >= 60) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.rankBadge, { backgroundColor: getRankColor(rank) }]}>
        <Text style={styles.rankText}>#{rank}</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.schoolName} numberOfLines={2}>
          {recommendation.schoolName}
        </Text>
        <Text style={styles.district}>📍 {recommendation.district}</Text>
        
        <View style={styles.probabilityContainer}>
          <Text style={styles.probabilityLabel}>Tỷ lệ trúng tuyển:</Text>
          <Text style={[styles.probability, { color: getProbabilityColor(recommendation.probability) }]}>
            {recommendation.probability}%
          </Text>
        </View>

        <View style={styles.matchContainer}>
          <View style={styles.matchBar}>
            <View 
              style={[styles.matchFill, { width: `${recommendation.matchScore}%` }]} 
            />
          </View>
          <Text style={styles.matchText}>{recommendation.matchScore}% phù hợp</Text>
        </View>

        <View style={styles.reasonsContainer}>
          <Text style={styles.reasonsTitle}>Lý do:</Text>
          {recommendation.reasons.slice(0, 2).map((reason, index) => (
            <Text key={index} style={styles.reason}>
              • {reason}
            </Text>
          ))}
        </View>

        <Text style={styles.tuition}>
          💰 {(recommendation.tuition / 1000000).toFixed(1)} triệu/năm
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  rankBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    paddingRight: 50,
  },
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 6,
  },
  district: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  probabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  probabilityLabel: {
    fontSize: 14,
    color: '#475569',
    marginRight: 8,
  },
  probability: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  matchContainer: {
    marginBottom: 12,
  },
  matchBar: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  matchFill: {
    height: '100%',
    backgroundColor: '#2563eb',
  },
  matchText: {
    fontSize: 12,
    color: '#64748b',
  },
  reasonsContainer: {
    marginBottom: 12,
  },
  reasonsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  reason: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 2,
  },
  tuition: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '600',
  },
});
