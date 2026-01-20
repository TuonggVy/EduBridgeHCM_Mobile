# EduBridge HCM - Mobile App

Ứng dụng mobile tư vấn tuyển sinh vào Trường Trung Học Phổ Thông Tư Thục tại TPHCM dành cho Phụ huynh và Học sinh.

## 🚀 Tính năng

### Role: Parent/Student

#### 1. **Trang chủ (Home)**
- Hiển thị thông tin tổng quan
- Quick actions: AI Gợi ý, Tìm kiếm, Tư vấn
- Danh sách trường nổi bật
- Tin tức và thông báo mới nhất
- Thông báo chưa đọc

#### 2. **Tìm kiếm (Search)**
- Tìm kiếm trường học theo tên
- Lọc theo quận/huyện
- Hiển thị danh sách kết quả với thông tin chi tiết:
  - Logo trường
  - Tên trường
  - Địa chỉ và quận
  - Học phí
  - Điểm chuẩn
  - Đánh giá

#### 3. **Gợi ý AI (AI Recommendation)**
- Nhập điểm số: Toán, Văn, Anh
- Tính toán tổng điểm tự động
- Nhận top 5 trường phù hợp với:
  - Tỷ lệ trúng tuyển (%)
  - Điểm phù hợp (match score)
  - Lý do gợi ý
  - Thông tin học phí
- Xếp hạng theo độ phù hợp

#### 4. **Tư vấn (Counseling)**
- Xem danh sách các buổi tư vấn
- Trạng thái: Đang chờ, Đang tư vấn, Hoàn thành, Đã hủy
- Chat trực tiếp với tư vấn viên
- Đánh giá và phản hồi sau tư vấn
- Đăng ký buổi tư vấn mới

#### 5. **Hồ sơ (Profile)**
- Thông tin cá nhân
- Kết quả học tập (Toán, Văn, Anh)
- Tổng điểm dự kiến
- Mong muốn: Khu vực ưu tiên, Ngân sách học phí
- Danh sách trường đã lưu
- Cài đặt và đăng xuất

#### 6. **Chi tiết trường (School Detail)**
- Ảnh bìa và logo trường
- Thông tin cơ bản: Tên, địa chỉ, đánh giá
- Giới thiệu về trường
- Các chương trình đào tạo
- Chi tiết học phí (min-max)
- Lịch sử điểm chuẩn qua các năm
- Thông tin liên hệ: Điện thoại, Email, Website
- Nút đăng ký tư vấn
- Lưu trường yêu thích

#### 7. **Chat với tư vấn viên**
- Giao diện chat thời gian thực
- Hiển thị lịch sử tin nhắn
- Gửi và nhận tin nhắn
- Avatar và thông tin tư vấn viên

## 📱 Công nghệ sử dụng

- **Framework**: React Native + Expo
- **Navigation**: React Navigation (Bottom Tabs + Stack)
- **Language**: TypeScript
- **UI**: Custom components với modern design
- **Mock Data**: Dữ liệu mẫu cho development

## 🎨 Design System

### Color Palette
- Primary: `#2563eb` (Blue)
- Secondary: `#10b981` (Green)
- Accent: `#f59e0b` (Orange)
- Background: `#f8fafc`
- Text: `#1e293b`

### Components
- SchoolCard: Thẻ hiển thị trường học
- SearchBar: Thanh tìm kiếm
- RecommendationCard: Thẻ gợi ý từ AI

## 📂 Cấu trúc dự án

```
/src
  /components        # Các component tái sử dụng
    - SchoolCard.tsx
    - SearchBar.tsx
    - RecommendationCard.tsx
  
  /screens          # Các màn hình chính
    - HomeScreen.tsx
    - SearchScreen.tsx
    - AIRecommendationScreen.tsx
    - CounselingScreen.tsx
    - ProfileScreen.tsx
    - SchoolDetailScreen.tsx
    - ChatScreen.tsx
  
  /navigation       # Cấu hình navigation
    - AppNavigator.tsx
  
  /types           # TypeScript types
    - index.ts
  
  /utils           # Mock data và utilities
    - mockData.ts
```

## 🛠 Cài đặt và chạy

### Yêu cầu
- Node.js >= 16
- npm hoặc yarn
- Expo CLI

### Các bước cài đặt

1. **Cài đặt dependencies:**
```bash
npm install
```

2. **Chạy ứng dụng:**
```bash
# Chạy trên iOS
npm run ios

# Chạy trên Android
npm run android

# Chạy trên web
npm run web

# Hoặc chỉ start Expo
npm start
```

3. **Quét QR code** bằng ứng dụng Expo Go trên điện thoại để xem trên thiết bị thật.

## 📊 Mock Data

Ứng dụng sử dụng mock data bao gồm:
- 5 trường học mẫu
- Thông tin học sinh mẫu
- 3 buổi tư vấn mẫu
- 4 thông báo mẫu
- 5 gợi ý AI mẫu

## 🔄 Tích hợp API (Tương lai)

Khi Backend API sẵn sàng, cần thay thế mock data bằng API calls:

```typescript
// src/services/api.ts
import axios from 'axios';

const API_BASE_URL = 'https://your-api.com';

export const schoolService = {
  getAll: () => axios.get(`${API_BASE_URL}/schools`),
  getById: (id: string) => axios.get(`${API_BASE_URL}/schools/${id}`),
  search: (query: string) => axios.get(`${API_BASE_URL}/schools/search?q=${query}`),
};

export const aiService = {
  getRecommendations: (data) => 
    axios.post(`${API_BASE_URL}/ai/recommendations`, data),
};

export const counselingService = {
  getSessions: () => axios.get(`${API_BASE_URL}/counseling/sessions`),
  sendMessage: (sessionId, message) => 
    axios.post(`${API_BASE_URL}/counseling/${sessionId}/messages`, message),
};
```

## 🎯 Tính năng sắp tới

- [ ] Xác thực người dùng (OAuth2.0 với Gmail)
- [ ] Push notifications
- [ ] Lưu trữ offline với AsyncStorage
- [ ] Thêm bộ lọc nâng cao (học phí, chương trình học)
- [ ] Tích hợp real-time chat với WebSocket
- [ ] Thêm biểu đồ thống kê điểm chuẩn
- [ ] Upload ảnh và tài liệu
- [ ] Chia sẻ thông tin trường lên mạng xã hội

## 📝 Notes

- Hiện tại app đang sử dụng mock data để development
- UI được thiết kế mobile-first, responsive
- Hỗ trợ cả iOS và Android
- Có thể chạy trên web browser thông qua Expo

## 👥 Team

Dự án được phát triển bởi nhóm SEP - Capstone Project

## 📄 License

Private - Educational Purpose Only
