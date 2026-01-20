import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockStudentProfile, mockSchools } from '../utils/mockData';
import { Bell, ChevronRight, Info, Lock, LogOut, MapPin, MoveRight, Pen, Wallet } from 'lucide-react-native';

export const ProfileScreen = ({ navigation }: any) => {
  const savedSchools = mockSchools.filter((school) =>
    mockStudentProfile.savedSchools.includes(school.id)
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hồ sơ của tôi</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: mockStudentProfile.avatar }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{mockStudentProfile.name}</Text>
          <Text style={styles.email}>{mockStudentProfile.email}</Text>
          <Text style={styles.grade}>Học sinh lớp {mockStudentProfile.grade}</Text>
        </View>

        {/* Academic Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kết quả học tập</Text>
          <View style={styles.scoreCard}>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreLabel}>Toán</Text>
              <Text style={styles.scoreValue}>{mockStudentProfile.mathScore}</Text>
            </View>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreLabel}>Văn</Text>
              <Text style={styles.scoreValue}>{mockStudentProfile.literatureScore}</Text>
            </View>
            <View style={styles.scoreItem}>
              <Text style={styles.scoreLabel}>Anh</Text>
              <Text style={styles.scoreValue}>{mockStudentProfile.englishScore}</Text>
            </View>
          </View>
          
          <View style={styles.totalScoreCard}>
            <Text style={styles.totalScoreLabel}>Tổng điểm dự kiến</Text>
            <Text style={styles.totalScoreValue}>
              {(mockStudentProfile.mathScore + 
                mockStudentProfile.literatureScore + 
                mockStudentProfile.englishScore).toFixed(1)}
            </Text>
          </View>
        </View>

        {/* Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mong muốn</Text>
          <View style={styles.preferenceCard}>
          <View style={styles.preferenceRow}>
  <View style={styles.preferenceLabelRow}>
    <MapPin size={16} color="#64748b" />
    <Text style={styles.preferenceLabel}>Khu vực ưu tiên:</Text>
  </View>
  <Text style={styles.preferenceValue}>
    {mockStudentProfile.preferredDistricts.join(', ')}
  </Text>
</View>
<View style={styles.preferenceRow}>
  <View style={styles.preferenceLabelRow}>
    <Wallet size={16} color="#64748b" />
    <Text style={styles.preferenceLabel}>Ngân sách học phí:</Text>
  </View>
  <Text style={styles.preferenceValue}>
    {(mockStudentProfile.tuitionBudget / 1000000).toFixed(0)} triệu/năm
  </Text>
</View>
          </View>
        </View>

        {/* Saved Schools */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trường đã lưu ({savedSchools.length})</Text>
          {savedSchools.map((school) => (
            <TouchableOpacity
              key={school.id}
              style={styles.savedSchoolCard}
              onPress={() => navigation.navigate('SchoolDetail', { schoolId: school.id })}
            >
              <Image source={{ uri: school.logo }} style={styles.schoolLogo} />
              <View style={styles.schoolInfo}>
                <Text style={styles.schoolName} numberOfLines={2}>
                  {school.name}
                </Text>
                <Text style={styles.schoolDistrict}>{school.district}</Text>
              </View>
              <Text style={styles.arrowIcon}><ChevronRight size={14} color='#ABA9A9' /></Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cài đặt</Text>
          
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingIcon}><Pen size={18} /></Text>
            <Text style={styles.settingText}>Chỉnh sửa thông tin</Text>
            <Text style={styles.arrowIcon}><ChevronRight size={14} color='#ABA9A9' /></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingIcon}><Bell size={20} /></Text>
            <Text style={styles.settingText}>Thông báo</Text>
            <Text style={styles.arrowIcon}><ChevronRight size={14} color='#ABA9A9' /></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingIcon}><Lock size={20} /></Text>
            <Text style={styles.settingText}>Bảo mật</Text>
            <Text style={styles.arrowIcon}><ChevronRight size={14} color='#ABA9A9' /></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingIcon}><Info size={22} /></Text>
            <Text style={styles.settingText}>Về ứng dụng</Text>
            <Text style={styles.arrowIcon}><ChevronRight size={14} color='#ABA9A9' /></Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.settingItem, styles.logoutItem]}>
            <Text style={styles.settingIcon}><LogOut size={22} /></Text>
            <Text style={[styles.settingText, styles.logoutText]}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  grade: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  scoreCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  scoreItem: {
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  scoreValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  totalScoreCard: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  totalScoreLabel: {
    fontSize: 14,
    color: '#1e40af',
    marginBottom: 4,
  },
  totalScoreValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  preferenceCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
  },
  preferenceRow: {
    marginBottom: 12,
  },
  preferenceLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  preferenceLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  preferenceValue: {
    fontSize: 15,
    color: '#1e293b',
    fontWeight: '600',
  },
  savedSchoolCard: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  schoolLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  schoolInfo: {
    flex: 1,
    marginLeft: 12,
  },
  schoolName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 4,
  },
  schoolDistrict: {
    fontSize: 13,
    color: '#64748b',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#94a3b8',
  },
  settingItem: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: '#1e293b',
  },
  logoutItem: {
    marginTop: 8,
  },
  logoutText: {
    color: '#ef4444',
  },
});
