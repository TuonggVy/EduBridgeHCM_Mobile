import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '../components/SearchBar';
import { SchoolCard } from '../components/SchoolCard';
import { mockSchools, mockNotifications } from '../utils/mockData';
import { School } from '../types';
import { ArrowRight, Bell, Bot, CircleArrowRight, Megaphone, MessageCircleMore, Search } from 'lucide-react-native';

export const HomeScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredSchools = mockSchools.slice(0, 3);
  const unreadNotifications = mockNotifications.filter((n) => !n.read).length;

  const handleSchoolPress = (schoolId: string) => {
    navigation.navigate('SchoolDetail', { schoolId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      {/* Header */}
      <LinearGradient
      colors={['#7AA9EB', '#0D64DE']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
      >
        <View style={styles.searchInHeader}>
          <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Tìm kiếm trường học..."
          />
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Bell size={26} color="#fff" />
          {unreadNotifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadNotifications}</Text>
            </View>
          )}
        </TouchableOpacity>
        </LinearGradient>


      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('AIRecommendation')}
          >
            <Text style={styles.actionIcon}>
            <Bot size={48} color='#0D64DE' />
            </Text>
            <Text style={styles.actionTitle}>Gợi ý AI</Text>
            <Text style={styles.actionSubtitle}>Tìm trường phù hợp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Search')}
          >
            <Text style={styles.actionIcon}>
            <Search size={44} color='#0D64DE' />
            </Text>
            <Text style={styles.actionTitle}>Tìm kiếm</Text>
            <Text style={styles.actionSubtitle}>Khám phá trường</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => navigation.navigate('Counseling')}
          >
            <Text style={styles.actionIcon}>
            <MessageCircleMore size={44} color='#0D64DE' />
            </Text>
            <Text style={styles.actionTitle}>Tư vấn</Text>
            <Text style={styles.actionSubtitle}>Chat với counselor</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Schools */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trường nổi bật</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <View style={styles.iconCircle}>
              <ArrowRight size={20} color="#000000" />
            </View>
            </TouchableOpacity>
          </View>

          {featuredSchools.map((school) => (
            <SchoolCard
              key={school.id}
              school={school}
              onPress={() => handleSchoolPress(school.id)}
            />
          ))}
        </View>

        {/* Latest News */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tin tức mới nhất</Text>
          <View style={styles.newsCard}>
            <Text style={styles.newsTitle}>Thông báo tuyển sinh 2026</Text>
            <Text style={styles.newsContent}>
              Các trường THPT tư thục tại TP.HCM đã chính thức công bố lịch tuyển sinh năm 2026.
              Hạn cuối nộp hồ sơ là 15/03/2026.
            </Text>
            <Text style={styles.newsTime}>2 giờ trước</Text>
          </View>

          <View style={styles.newsCard}>
            <Text style={styles.newsTitle}>Mẹo ôn thi hiệu quả</Text>
            <Text style={styles.newsContent}>
              5 phương pháp ôn thi được các thầy cô giàu kinh nghiệm khuyên dùng để đạt điểm cao.
            </Text>
            <Text style={styles.newsTime}>1 ngày trước</Text>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  notificationButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchInHeader: {
    flex: 1,
    marginRight: 12,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 24,
  },
  actionCard: {
    flex: 1,
    marginHorizontal: 4,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#EBF7FA'
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 2,
  },
  actionSubtitle: {
    fontSize: 11,
    color: '#64748b',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 18,   
    borderWidth: 1,
    backgroundColor: '#F2F2F2',
    borderColor: "#F2F2F2",
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  newsContent: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 8,
  },
  newsTime: {
    fontSize: 12,
    color: '#94a3b8',
  },
});
