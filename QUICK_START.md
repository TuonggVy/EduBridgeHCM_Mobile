# 🚀 Quick Start Guide - EduBridge HCM Mobile

## Chạy ứng dụng ngay

```bash
# Bắt đầu Expo development server
npm start
```

Sau đó:
- Nhấn `i` để chạy trên iOS simulator
- Nhấn `a` để chạy trên Android emulator  
- Quét QR code bằng Expo Go app trên điện thoại

## 📱 Tính năng đã implement

### ✅ Bottom Tab Navigation với 5 tabs:
1. **🏠 Trang chủ** - Dashboard với quick actions
2. **🔍 Tìm kiếm** - Tìm và lọc trường học
3. **🤖 AI** - Nhận gợi ý trường phù hợp
4. **💬 Tư vấn** - Chat với tư vấn viên
5. **👤 Cá nhân** - Profile và settings

### ✅ Stack Navigation:
- **School Detail** - Chi tiết trường học
- **Chat** - Phòng chat với tư vấn viên

### ✅ Chức năng Parent/Student Role:

#### Tìm kiếm & Khám phá
- ✅ Tìm kiếm trường theo tên
- ✅ Lọc theo quận/huyện
- ✅ Xem chi tiết trường học
- ✅ Lưu trường yêu thích

#### AI Recommendations
- ✅ Nhập điểm số (Toán, Văn, Anh)
- ✅ Tính tổng điểm tự động
- ✅ Nhận top 5 trường gợi ý
- ✅ Xem tỷ lệ trúng tuyển
- ✅ Xem độ phù hợp (match score)
- ✅ Xem lý do gợi ý

#### Dịch vụ tư vấn
- ✅ Xem danh sách buổi tư vấn
- ✅ Chat trực tiếp với tư vấn viên
- ✅ Theo dõi trạng thái tư vấn
- ✅ Đánh giá sau tư vấn

#### Profile & Settings
- ✅ Xem thông tin cá nhân
- ✅ Xem kết quả học tập
- ✅ Quản lý trường đã lưu
- ✅ Cài đặt ứng dụng

### ✅ Mock Data có sẵn:
- 5 trường học mẫu (với đầy đủ thông tin)
- 1 profile học sinh mẫu
- 3 buổi tư vấn mẫu
- 4 thông báo mẫu
- 5 gợi ý AI mẫu

## 🎨 UI/UX Features

- ✅ Modern, clean design
- ✅ Smooth navigation animations
- ✅ Responsive layout
- ✅ Beautiful color scheme
- ✅ Emoji icons for visual appeal
- ✅ Shadow and elevation effects
- ✅ Interactive touch feedback

## 📸 Screenshots Locations

Các màn hình chính bạn sẽ thấy:

1. **Home Screen**
   - Search bar
   - 3 Quick action cards (AI, Search, Counseling)
   - Featured schools
   - Latest news

2. **Search Screen**
   - Search bar
   - District filter button
   - List of schools with details
   - Modal for district selection

3. **AI Recommendation Screen**
   - Input form (3 score fields)
   - Summary card with total score
   - Results page with top 5 schools
   - Detailed recommendation cards

4. **Counseling Screen**
   - Info card
   - List of counseling sessions
   - Status badges
   - Rating stars
   - New session button

5. **Profile Screen**
   - Avatar and user info
   - Academic scores card
   - Preferences
   - Saved schools list
   - Settings menu

6. **School Detail Screen**
   - Cover image
   - School logo and name
   - Quick info cards
   - Programs list
   - Tuition details
   - Cut-off scores history
   - Contact buttons
   - Register counseling button

7. **Chat Screen**
   - Header with counselor info
   - Message list
   - Input field with send button
   - Message bubbles (own/other)

## 🔧 Customization

### Thay đổi màu sắc chủ đạo:
Tìm và thay thế trong tất cả các file:
- `#2563eb` → Màu xanh primary của bạn
- `#10b981` → Màu xanh lá secondary của bạn
- `#f59e0b` → Màu cam accent của bạn

### Cập nhật mock data:
Chỉnh sửa file: `src/utils/mockData.ts`

### Thêm tính năng mới:
1. Tạo screen mới trong `src/screens/`
2. Thêm route trong `src/navigation/AppNavigator.tsx`
3. Update types trong `src/types/index.ts` nếu cần

## 📦 Dependencies đã cài

- ✅ React Navigation (Native, Bottom Tabs, Stack)
- ✅ React Native Screens
- ✅ React Native Safe Area Context
- ✅ Async Storage
- ✅ Axios

## 🐛 Troubleshooting

### Lỗi khi chạy:
```bash
# Clear cache
npm start -- --reset-cache

# Hoặc
expo start -c
```

### Lỗi navigation:
```bash
# Reinstall navigation packages
npx expo install react-native-screens react-native-safe-area-context
```

### Lỗi TypeScript:
```bash
# Restart TypeScript server trong VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

## 🎯 Next Steps

1. **Test ứng dụng**: Chạy và test tất cả các màn hình
2. **Tùy chỉnh**: Thay đổi colors, fonts theo ý thích
3. **Thêm tính năng**: Authentication, real-time chat, etc.
4. **Tích hợp API**: Thay mock data bằng API calls thật
5. **Testing**: Viết unit tests và integration tests

## 💡 Tips

- Sử dụng React DevTools để debug
- Dùng Expo Go app để test trên thiết bị thật
- Hot reload tự động khi save file
- Console.log để debug trong terminal

## 📞 Support

Nếu gặp vấn đề, check:
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Docs](https://reactnavigation.org/)
- [React Native Docs](https://reactnative.dev/)

---

**Chúc bạn code vui vẻ! 🎉**
