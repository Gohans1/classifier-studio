# Classifier.dev Studio

Giao diện trực quan hoá phân loại văn bản thời gian thực (Zero-shot NLP & Calibrated Probability) được deploy trên Cloudflare Workers.

## Tính năng
- ⚡ **Realtime Classification**: Phân loại trực tiếp ngay khi gõ bằng mô hình fast (jev).
- 🏷️ **Custom Labels**: Thêm, xoá nhãn tuỳ ý với tính năng lưu tự động (localStorage).
- 📊 **Calibrated Probability**: Hiển thị phân bổ xác suất chính xác từng nhãn.
- 🚀 **Cloudflare Worker**: Triển khai tốc độ cao qua Edge network của Cloudflare.

## Chạy thử nghiệm Local
```bash
npm run dev
```

## Triển khai lên Cloudflare Workers
```bash
npx wrangler login
npm run deploy
```
