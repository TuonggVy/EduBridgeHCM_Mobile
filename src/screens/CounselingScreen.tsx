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
import { mockCounselingSessions } from '../utils/mockData';
import { MessageCircleMore, Plus, Star } from 'lucide-react-native';

export const CounselingScreen = ({ navigation }: any) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#f59e0b';
      case 'in-progress':
        return '#2563eb';
      case 'completed':
        return '#10b981';
      case 'cancelled':
        return '#ef4444';
      default:
        return '#64748b';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Đang chờ';
      case 'in-progress':
        return 'Đang tư vấn';
      case 'completed':
        return 'Hoàn thành';
      case 'cancelled':
        return 'Đã hủy';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleSessionPress = (sessionId: string) => {
    navigation.navigate('Chat', { sessionId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tư vấn của tôi</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}><MessageCircleMore size={45} /></Text>
          <Text style={styles.infoTitle}>Dịch vụ tư vấn</Text>
          <Text style={styles.infoText}>
            Kết nối với các tư vấn viên chuyên nghiệp để được hỗ trợ tốt nhất trong quá trình
            chọn trường và tuyển sinh.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Các buổi tư vấn</Text>

          {mockCounselingSessions.map((session) => (
            <TouchableOpacity
              key={session.id}
              style={styles.sessionCard}
              onPress={() => handleSessionPress(session.id)}
              activeOpacity={0.7}
            >
              <View style={styles.sessionHeader}>
                <Image
                  source={{ uri: session.counselorAvatar }}
                  style={styles.counselorAvatar}
                />
                <View style={styles.sessionInfo}>
                  <Text style={styles.counselorName}>{session.counselorName}</Text>
                  <Text style={styles.schoolName}>{session.schoolName}</Text>
                </View>
              </View>

              <View style={styles.sessionDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Lịch hẹn:</Text>
                  <Text style={styles.detailValue}>{formatDate(session.scheduledDate)}</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Trạng thái:</Text>
                  <View
                    style={[
                      styles.statusBadge,
                      { backgroundColor: getStatusColor(session.status) },
                    ]}
                  >
                    <Text style={styles.statusText}>{getStatusText(session.status)}</Text>
                  </View>
                </View>

                {session.rating && (
                  <View style={styles.ratingRow}>
                    <View style={styles.starRow}>
                      {Array.from({ length: session.rating }).map((_, index) => (
                        <Star
                        key={index}
                        size={16}
                        color="#f59e0b"
                        fill="#f59e0b"
                        />
                        ))}
                    </View>
                    {session.feedback && (
                      <Text style={styles.feedback} numberOfLines={2}>
                        "{session.feedback}"
                      </Text>
                    )}
                  </View>
                )}
              </View>

              {session.status === 'in-progress' && (
                <View style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Vào phòng chat →</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.newSessionButton}>
          <View style={styles.newSessionButtonContent}>
            <Plus size={18} color="#fff" />
            <Text style={styles.newSessionButtonText}>Đăng ký tư vấn mới</Text>
          </View>
        </TouchableOpacity>

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
  infoCard: {
    backgroundColor: '#dcfce7',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
  },
  infoIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  sessionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sessionHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  counselorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
  },
  sessionInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  counselorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  schoolName: {
    fontSize: 14,
    color: '#64748b',
  },
  sessionDetails: {
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  detailValue: {
    fontSize: 14,
    color: '#1e293b',
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ratingRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  ratingStars: {
    fontSize: 16,
    marginBottom: 4,
  },
  starRow: {
    flexDirection: 'row',
    marginBottom: 4,
    gap: 4,
  },
  feedback: {
    fontSize: 13,
    color: '#64748b',
    fontStyle: 'italic',
  },
  actionButton: {
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  actionButtonText: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: 'bold',
  },
  newSessionButton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  newSessionButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8, 
  },
  newSessionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
