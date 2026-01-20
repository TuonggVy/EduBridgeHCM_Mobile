import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockSchools } from '../utils/mockData';

const { width } = Dimensions.get('window');

export const SchoolDetailScreen = ({ route, navigation }: any) => {
  const { schoolId } = route.params;
  const school = mockSchools.find((s) => s.id === schoolId);
  const [isSaved, setIsSaved] = useState(false);

  if (!school) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Không tìm thấy trường học</Text>
      </SafeAreaView>
    );
  }

  const handleContact = (type: 'phone' | 'email' | 'website') => {
    if (type === 'phone') {
      Linking.openURL(`tel:${school.phone}`);
    } else if (type === 'email') {
      Linking.openURL(`mailto:${school.email}`);
    } else if (type === 'website') {
      Linking.openURL(school.website);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
          <Text style={styles.saveButton}>{isSaved ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* School Image */}
        <Image source={{ uri: school.images[0] }} style={styles.coverImage} />

        {/* School Info */}
        <View style={styles.content}>
          <View style={styles.schoolHeader}>
            <Image source={{ uri: school.logo }} style={styles.logo} />
            <View style={styles.headerInfo}>
              <Text style={styles.schoolName}>{school.name}</Text>
              <Text style={styles.rating}>⭐ {school.rating}/5.0</Text>
            </View>
          </View>

          <Text style={styles.address}>📍 {school.address}</Text>

          {/* Quick Info */}
          <View style={styles.quickInfoContainer}>
            <View style={styles.quickInfoCard}>
              <Text style={styles.quickInfoLabel}>Điểm chuẩn</Text>
              <Text style={styles.quickInfoValue}>
                {school.cutoffScores[school.cutoffScores.length - 1].score}
              </Text>
            </View>
            <View style={styles.quickInfoCard}>
              <Text style={styles.quickInfoLabel}>Học phí</Text>
              <Text style={styles.quickInfoValue}>
                {(school.tuition.min / 1000000).toFixed(0)}-{(school.tuition.max / 1000000).toFixed(0)}tr
              </Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Giới thiệu</Text>
            <Text style={styles.description}>{school.description}</Text>
          </View>

          {/* Programs */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Chương trình đào tạo</Text>
            {school.programs.map((program, index) => (
              <View key={index} style={styles.programItem}>
                <Text style={styles.programIcon}>✓</Text>
                <Text style={styles.programText}>{program}</Text>
              </View>
            ))}
          </View>

          {/* Tuition Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Học phí</Text>
            <View style={styles.tuitionCard}>
              <View style={styles.tuitionRow}>
                <Text style={styles.tuitionLabel}>Mức thấp nhất:</Text>
                <Text style={styles.tuitionValue}>
                  {(school.tuition.min / 1000000).toFixed(1)} triệu/năm
                </Text>
              </View>
              <View style={styles.tuitionRow}>
                <Text style={styles.tuitionLabel}>Mức cao nhất:</Text>
                <Text style={styles.tuitionValue}>
                  {(school.tuition.max / 1000000).toFixed(1)} triệu/năm
                </Text>
              </View>
            </View>
          </View>

          {/* Cut-off Scores History */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Điểm chuẩn qua các năm</Text>
            {school.cutoffScores.map((item) => (
              <View key={item.year} style={styles.cutoffRow}>
                <Text style={styles.cutoffYear}>Năm {item.year}</Text>
                <Text style={styles.cutoffScore}>{item.score} điểm</Text>
              </View>
            ))}
          </View>

          {/* Contact */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Liên hệ</Text>
            <TouchableOpacity
              style={styles.contactButton}
              onPress={() => handleContact('phone')}
            >
              <Text style={styles.contactIcon}>📞</Text>
              <Text style={styles.contactText}>{school.phone}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactButton}
              onPress={() => handleContact('email')}
            >
              <Text style={styles.contactIcon}>✉️</Text>
              <Text style={styles.contactText}>{school.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.contactButton}
              onPress={() => handleContact('website')}
            >
              <Text style={styles.contactIcon}>🌐</Text>
              <Text style={styles.contactText}>{school.website}</Text>
            </TouchableOpacity>
          </View>

          {/* CTA Buttons */}
          <TouchableOpacity
            style={styles.counselingButton}
            onPress={() => navigation.navigate('Counseling')}
          >
            <Text style={styles.counselingButtonText}>Đăng ký tư vấn</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    zIndex: 10,
  },
  backButton: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  saveButton: {
    fontSize: 28,
  },
  coverImage: {
    width: width,
    height: 250,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 20,
  },
  schoolHeader: {
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: -40,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#fff',
  },
  headerInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'flex-end',
  },
  schoolName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#f59e0b',
    fontWeight: '600',
  },
  address: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 20,
  },
  quickInfoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  quickInfoCard: {
    flex: 1,
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  quickInfoLabel: {
    fontSize: 12,
    color: '#1e40af',
    marginBottom: 4,
  },
  quickInfoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#475569',
    lineHeight: 22,
  },
  programItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  programIcon: {
    fontSize: 16,
    color: '#10b981',
    marginRight: 8,
  },
  programText: {
    fontSize: 15,
    color: '#1e293b',
  },
  tuitionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  tuitionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  tuitionLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  tuitionValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#10b981',
  },
  cutoffRow: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cutoffYear: {
    fontSize: 14,
    color: '#64748b',
  },
  cutoffScore: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  contactButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  contactText: {
    fontSize: 15,
    color: '#1e293b',
  },
  counselingButton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  counselingButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
