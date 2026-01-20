import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '../components/SearchBar';
import { SchoolCard } from '../components/SchoolCard';
import { mockSchools, districts } from '../utils/mockData';
import { CircleX } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const SearchScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('Tất cả');
  const [showDistrictModal, setShowDistrictModal] = useState(false);

  const filteredSchools = mockSchools.filter((school) => {
    const matchesSearch = school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          school.district.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDistrict = selectedDistrict === 'Tất cả' || school.district === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });

  const handleSchoolPress = (schoolId: string) => {
    navigation.navigate('SchoolDetail', { schoolId });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
      colors={['#7AA9EB', '#0D64DE']} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
      >
        <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Tìm theo tên trường hoặc quận..."
        onPressFilter={() => setShowDistrictModal(true)}
        />
      </LinearGradient>

      <View style={styles.content}>
        {/* Results */}
        <Text style={styles.resultCount}>
          Tìm thấy {filteredSchools.length} trường học
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredSchools.map((school) => (
            <SchoolCard
              key={school.id}
              school={school}
              onPress={() => handleSchoolPress(school.id)}
            />
          ))}
        </ScrollView>
      </View>

      {/* District Filter Modal */}
      <Modal
        visible={showDistrictModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowDistrictModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Chọn quận</Text>
              <TouchableOpacity onPress={() => setShowDistrictModal(false)}>
                <Text style={styles.modalClose}><CircleX /></Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              <TouchableOpacity
                style={[
                  styles.districtItem,
                  selectedDistrict === 'Tất cả' && styles.districtItemSelected,
                ]}
                onPress={() => {
                  setSelectedDistrict('Tất cả');
                  setShowDistrictModal(false);
                }}
              >
                <Text
                  style={[
                    styles.districtText,
                    selectedDistrict === 'Tất cả' && styles.districtTextSelected,
                  ]}
                >
                  Tất cả
                </Text>
              </TouchableOpacity>

              {districts.map((district) => (
                <TouchableOpacity
                  key={district}
                  style={[
                    styles.districtItem,
                    selectedDistrict === district && styles.districtItemSelected,
                  ]}
                  onPress={() => {
                    setSelectedDistrict(district);
                    setShowDistrictModal(false);
                  }}
                >
                  <Text
                    style={[
                      styles.districtText,
                      selectedDistrict === district && styles.districtTextSelected,
                    ]}
                  >
                    {district}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
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
  filterSection: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterText: {
    fontSize: 14,
    color: '#1e293b',
    fontWeight: '600',
    marginRight: 8,
  },
  filterIcon: {
    fontSize: 10,
    color: '#64748b',
  },
  resultCount: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  modalClose: {
    fontSize: 24,
    color: '#64748b',
  },
  districtItem: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  districtItemSelected: {
    backgroundColor: '#dbeafe',
  },
  districtText: {
    fontSize: 16,
    color: '#1e293b',
  },
  districtTextSelected: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
});
