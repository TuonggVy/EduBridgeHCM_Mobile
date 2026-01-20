import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecommendationCard } from '../components/RecommendationCard';
import { mockAIRecommendations, mockStudentProfile } from '../utils/mockData';
import { Bot, Rocket } from 'lucide-react-native';

export const AIRecommendationScreen = ({ navigation }: any) => {
  const [showResults, setShowResults] = useState(false);
  const [mathScore, setMathScore] = useState(mockStudentProfile.mathScore.toString());
  const [literatureScore, setLiteratureScore] = useState(mockStudentProfile.literatureScore.toString());
  const [englishScore, setEnglishScore] = useState(mockStudentProfile.englishScore.toString());

  const handleGetRecommendations = () => {
    const math = parseFloat(mathScore);
    const literature = parseFloat(literatureScore);
    const english = parseFloat(englishScore);

    if (isNaN(math) || isNaN(literature) || isNaN(english)) {
      Alert.alert('Lỗi', 'Vui lòng nhập điểm số hợp lệ');
      return;
    }

    if (math < 0 || math > 10 || literature < 0 || literature > 10 || english < 0 || english > 10) {
      Alert.alert('Lỗi', 'Điểm số phải nằm trong khoảng 0-10');
      return;
    }

    setShowResults(true);
  };

  const handleSchoolPress = (schoolId: string) => {
    navigation.navigate('SchoolDetail', { schoolId });
  };

  if (!showResults) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Gợi ý AI</Text>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.introCard}>
            <Text style={styles.introIcon}><Bot size={50} /></Text>
            <Text style={styles.introTitle}>Tìm trường phù hợp với bạn</Text>
            <Text style={styles.introText}>
              Nhập điểm số của bạn và AI sẽ gợi ý những trường học phù hợp nhất với năng lực và mong muốn của bạn.
            </Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.formTitle}>Nhập điểm số của bạn</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Điểm Toán</Text>
              <TextInput
                style={styles.input}
                value={mathScore}
                onChangeText={setMathScore}
                keyboardType="decimal-pad"
                placeholder="Nhập điểm (0-10)"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Điểm Văn</Text>
              <TextInput
                style={styles.input}
                value={literatureScore}
                onChangeText={setLiteratureScore}
                keyboardType="decimal-pad"
                placeholder="Nhập điểm (0-10)"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Điểm Tiếng Anh</Text>
              <TextInput
                style={styles.input}
                value={englishScore}
                onChangeText={setEnglishScore}
                keyboardType="decimal-pad"
                placeholder="Nhập điểm (0-10)"
              />
            </View>

            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Tổng điểm dự kiến</Text>
              <Text style={styles.summaryScore}>
                {(parseFloat(mathScore || '0') + 
                  parseFloat(literatureScore || '0') + 
                  parseFloat(englishScore || '0')).toFixed(1)}
              </Text>
              <Text style={styles.summarySubtitle}>điểm</Text>
            </View>

            <TouchableOpacity
  style={styles.submitButton}
  onPress={handleGetRecommendations}
>
  <View style={styles.submitButtonContent}>
    <Text style={styles.submitButtonText}>Nhận gợi ý từ AI</Text>
    <Rocket size={18} color="#fff" />
  </View>
</TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowResults(false)}>
          <Text style={styles.backButton}>← Quay lại</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Kết quả gợi ý</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>Top 5 trường phù hợp với bạn</Text>
          <Text style={styles.resultsSubtitle}>
            Dựa trên điểm số: Toán {mathScore}, Văn {literatureScore}, Anh {englishScore}
          </Text>
        </View>

        {mockAIRecommendations.map((recommendation, index) => (
          <RecommendationCard
            key={recommendation.schoolId}
            recommendation={recommendation}
            rank={index + 1}
            onPress={() => handleSchoolPress(recommendation.schoolId)}
          />
        ))}

        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>💡 Lưu ý</Text>
          <Text style={styles.noteText}>
            Tỷ lệ trúng tuyển được tính dựa trên điểm chuẩn các năm trước và dữ liệu học tập của bạn.
            Đây chỉ là gợi ý tham khảo, bạn nên tìm hiểu thêm về các trường và đăng ký tư vấn để có
            quyết định tốt nhất.
          </Text>
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
    // borderBottomWidth: 1,
    // borderBottomColor: '#e2e8f0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 16,
    color: '#2563eb',
    marginRight: 12,
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
  introCard: {
    backgroundColor: '#dbeafe',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  introIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  introText: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 20,
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1e293b',
  },
  summaryCard: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  summaryTitle: {
    fontSize: 14,
    color: '#1e40af',
    marginBottom: 8,
  },
  summaryScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  summarySubtitle: {
    fontSize: 14,
    color: '#1e40af',
  },
  submitButton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8, 
  },
  resultsHeader: {
    marginBottom: 20,
  },
  resultsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  resultsSubtitle: {
    fontSize: 14,
    color: '#64748b',
  },
  noteCard: {
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    marginBottom: 20,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: 8,
  },
  noteText: {
    fontSize: 14,
    color: '#78350f',
    lineHeight: 20,
  },
});
