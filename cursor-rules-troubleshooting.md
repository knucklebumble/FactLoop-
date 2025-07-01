# Cursor Rules Neden Aktifleşmiyor? - Sorun Giderme Rehberi

## Mevcut Durum Analizi

Workspace'inizi inceledikten sonra, Cursor rules aktifleşmeme sorununuzun muhtemel nedenleri:

### 1. **`.cursorrules` Dosyası Yok**
- Workspace'inizde `.cursorrules` dosyası bulunamadı
- Bu dosya Cursor AI'ın kuralları okuması için gereklidir

### 2. **Olası Nedenler ve Çözümler**

#### A. Dosya Eksikliği
**Problem:** `.cursorrules` dosyası mevcut değil
**Çözüm:**
```bash
# Workspace root'unda .cursorrules dosyası oluşturun
touch .cursorrules
```

#### B. Yanlış Dosya Konumu
**Problem:** Dosya yanlış dizinde
**Çözüm:** 
- `.cursorrules` dosyası workspace root'unda olmalı
- Şu anki konum: `/workspace/.cursorrules` olmalı

#### C. Dosya İzinleri
**Problem:** Dosya okuma izinleri
**Çözüm:**
```bash
chmod 644 .cursorrules
```

#### D. Dosya Formatı Sorunları
**Problem:** Encoding veya satır sonu karakterleri
**Çözüm:**
- UTF-8 encoding kullanın
- Unix-style line endings (LF) kullanın

#### E. Cursor Sürümü
**Problem:** Eski Cursor sürümü
**Çözüm:**
- Cursor'u son sürüme güncelleyin
- Minimum sürüm gereksinimi kontrolü

### 3. **Cursor Rules Dosyası Örnek İçeriği**

Aşağıda temel bir `.cursorrules` dosyası örneği:

```
# Cursor AI Kuralları

## Genel Davranış
- Her zaman Türkçe açıklamalar yap
- Kod yazmadan önce plan açıkla
- Best practices uygula

## Kod Stili
- Camel case değişken isimleri kullan
- Açıklayıcı function isimleri
- Her function için JSDoc yorumları

## Proje Spesifik Kurallar
- Node.js projesi için ES6+ syntax kullan
- Error handling her zaman implement et
- Console.log yerine proper logging kullan
```

### 4. **Cursor Editor Ayarları**

Cursor ayarlarında kontrol edilmesi gerekenler:

#### A. Settings.json Kontrolü
```json
{
  "cursor.enableAI": true,
  "cursor.rules.enabled": true,
  "cursor.rules.file": ".cursorrules"
}
```

#### B. Workspace Settings
- `.vscode/settings.json` dosyasında çakışan ayarlar olabilir
- Cursor-specific ayarların öncelikli olduğundan emin olun

### 5. **Debug Adımları**

#### Adım 1: Dosya Varlığı Kontrolü
```bash
ls -la .cursorrules
```

#### Adım 2: İçerik Kontrolü
```bash
cat .cursorrules
```

#### Adım 3: Cursor Restart
- Cursor'u tamamen kapatıp yeniden açın
- Workspace'i reload edin

#### Adım 4: Log Kontrolü
- Cursor developer tools açın (Ctrl+Shift+I)
- Console'da error mesajlarını kontrol edin

### 6. **Alternatif Çözümler**

#### A. Global Rules
Eğer project-specific rules çalışmıyorsa:
- Global Cursor settings'den rules tanımlayın
- User settings.json'a rules ekleyin

#### B. Extension Kontrolü
- Cursor extensions ile çakışma olabilir
- Gerekirse extensions'ları disable edin

#### C. Cache Temizleme
```bash
# Cursor cache temizleme (varsa)
rm -rf ~/.cursor/cache
```

### 7. **Yaygın Hatalar**

1. **Dosya adı yanlış**: `.cursor-rules` yerine `.cursorrules` olmalı
2. **Hidden file görünmüyor**: `ls -la` kullanarak kontrol edin
3. **Syntax hatası**: Rules dosyasında geçersiz syntax
4. **Encoding problemi**: UTF-8 dışında encoding kullanımı

### 8. **Test Etme**

Rules'ların çalışıp çalışmadığını test etmek için:

1. Basit bir kod yazın
2. AI'dan yardım isteyin
3. Cursor'un rules'a uygun davranıp davranmadığını kontrol edin

### 9. **Sonraki Adımlar**

Eğer bu çözümler işe yaramazsa:

1. Cursor community forum'da benzer sorunları araştırın
2. Cursor support'a başvurun
3. GitHub issues'da bilinen problemleri kontrol edin

---

**Not:** Bu workspace'de henüz `.cursorrules` dosyası bulunmuyor. Sorununuzu çözmek için öncelikle bu dosyayı oluşturmanız gerekiyor.