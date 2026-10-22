import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';

const DAFTAR_MAHASISWA = [
  { id: '1', nama: 'Alifia Putri', prodi: 'Sistem Informasi' },
  { id: '2', nama: 'Budi Santoso', prodi: 'Teknologi Informasi' },
  { id: '3', nama: 'Citra Dewi', prodi: 'Sistem Informasi' },
  { id: '4', nama: 'Dimas Anggara', prodi: 'Teknik Informatika' },
  { id: '5', nama: 'Eka Nur Safitri', prodi: 'Sistem Informasi' },
  { id: '6', nama: 'Fajar Ramadhan', prodi: 'Teknik Informatika' },
  { id: '7', nama: 'Gita Permata', prodi: 'Sistem Informasi' },
];

const COLORS = {
  green: '#174C3C',
  cream: '#F5F2E9',
  orange: '#D98A43',
  text: '#20372C',
  muted: '#778078',
  white: '#FFFFFF',
};

const getInitials = (nama: string) =>
  nama
    .split(' ')
    .map((kata) => kata[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export default function Question2() {
  const [keyword, setKeyword] = useState('');

  const mahasiswaFilter = DAFTAR_MAHASISWA.filter((mahasiswa) => {
    const cari = keyword.trim().toLowerCase();

    return (
      mahasiswa.nama.toLowerCase().includes(cari) ||
      mahasiswa.prodi.toLowerCase().includes(cari)
    );
  });

  const warnaAvatar = ['#DCE9D8', '#F7DDB5', '#E9D9E9', '#D6E5ED'];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.green} />

      <FlatList
        data={mahasiswaFilter}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            <View style={styles.topBar}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>K</Text>
              </View>
              <View style={styles.brandText}>
                <Text style={styles.brand}>KAMPUSKU</Text>
                <Text style={styles.brandSubtitle}>
                  STUDENT DIRECTORY
                </Text>
              </View>
            </View>

            <View style={styles.hero}>
              <Text style={styles.eyebrow}>DIREKTORI KAMPUS</Text>
              <Text style={styles.heroTitle}>
                Kenali teman{'\n'}kampusmu.
              </Text>
              <Text style={styles.heroDescription}>
                Temukan mahasiswa berdasarkan nama atau program studi.
              </Text>
            </View>

            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>⌕</Text>
              <TextInput
                style={styles.input}
                placeholder="Cari nama atau prodi..."
                placeholderTextColor="#89938B"
                value={keyword}
                onChangeText={setKeyword}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
              />
              {keyword.length > 0 && (
                <Text
                  style={styles.clearText}
                  onPress={() => setKeyword('')}
                >
                  Hapus
                </Text>
              )}
            </View>

            <View style={styles.sectionHeader}>
              <View>
                <Text style={styles.sectionTitle}>
                  Daftar Mahasiswa
                </Text>
                <Text style={styles.sectionSubtitle}>
                  Hasil pencarian direktori
                </Text>
              </View>
              <View style={styles.countBadge}>
                <Text style={styles.countText}>
                  {mahasiswaFilter.length} orang
                </Text>
              </View>
            </View>
          </View>
        }
        renderItem={({ item, index }) => (
          <View style={styles.studentCard}>
            <View
              style={[
                styles.avatar,
                { backgroundColor: warnaAvatar[index % warnaAvatar.length] },
              ]}
            >
              <Text style={styles.avatarText}>
                {getInitials(item.nama)}
              </Text>
            </View>

            <View style={styles.studentInfo}>
              <Text style={styles.studentName}>{item.nama}</Text>
              <Text style={styles.studentProdi}>{item.prodi}</Text>
            </View>

            <View style={styles.numberBadge}>
              <Text style={styles.numberText}>
                {item.id.padStart(2, '0')}
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>⌕</Text>
            <Text style={styles.emptyTitle}>
              Data tidak ditemukan!
            </Text>
            <Text style={styles.emptyDescription}>
              Coba kata kunci nama atau prodi lainnya.
            </Text>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.footer}>
            KAMPUSKU
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 32,
    maxWidth: 650,
    width: '100%',
    alignSelf: 'center',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '900',
  },
  brandText: {
    marginLeft: 12,
    flex: 1,
  },
  brand: {
    color: COLORS.green,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 1,
  },
  brandSubtitle: {
    color: COLORS.muted,
    fontSize: 10,
    letterSpacing: 1.5,
    marginTop: 3,
  },
  liveBadge: {
    backgroundColor: '#DCE9D8',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
  },
  liveText: {
    color: COLORS.green,
    fontSize: 10,
    fontWeight: '800',
  },
  hero: {
    backgroundColor: COLORS.green,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
  },
  eyebrow: {
    color: '#D5E5D4',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '900',
    marginTop: 12,
  },
  heroDescription: {
    color: '#E0E9E0',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },
  searchBox: {
    minHeight: 58,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#E3E5D9',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 26,
  },
  searchIcon: {
    color: COLORS.green,
    fontSize: 28,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    fontSize: 14,
    paddingVertical: 15,
    outlineStyle: 'none',
  } as any,
  clearText: {
    color: COLORS.green,
    fontSize: 12,
    fontWeight: '700',
    paddingLeft: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    color: COLORS.green,
    fontSize: 19,
    fontWeight: '900',
  },
  sectionSubtitle: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 4,
  },
  countBadge: {
    backgroundColor: '#DCE9D8',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  countText: {
    color: COLORS.green,
    fontSize: 12,
    fontWeight: '800',
  },
  studentCard: {
    backgroundColor: COLORS.white,
    borderRadius: 17,
    padding: 14,
    marginBottom: 11,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAE8DE',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: COLORS.green,
    fontSize: 15,
    fontWeight: '900',
  },
  studentInfo: {
    flex: 1,
    marginLeft: 13,
  },
  studentName: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '800',
  },
  studentProdi: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 5,
  },
  numberBadge: {
    backgroundColor: '#F5F2E9',
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderRadius: 9,
  },
  numberText: {
    color: COLORS.green,
    fontSize: 11,
    fontWeight: '900',
  },
  emptyCard: {
    backgroundColor: COLORS.white,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 4,
  },
  emptyIcon: {
    fontSize: 45,
    color: COLORS.orange,
    marginBottom: 12,
  },
  emptyTitle: {
    color: COLORS.green,
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
  },
  emptyDescription: {
    color: COLORS.muted,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },
  footer: {
    color: COLORS.muted,
    fontSize: 10,
    textAlign: 'center',
    letterSpacing: 1.5,
    marginTop: 22,
  },
});
