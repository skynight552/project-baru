import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

type InfoCardProps = {
  title: string;
  status: 'selesai' | 'proses';
  description: string;
  taskNumber: string;
  onPress: () => void;
};

function InfoCard({
  title,
  status,
  description,
  taskNumber,
  onPress,
}: InfoCardProps) {
  const selesai = status === 'selesai';

  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <Text style={styles.taskNumber}>
          TASK {taskNumber}
        </Text>

        <View
          style={[
            styles.badge,
            selesai ? styles.badgeSelesai : styles.badgeProses,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              selesai ? styles.textSelesai : styles.textProses,
            ]}
          >
            {selesai ? 'Selesai' : 'Proses'}
          </Text>
        </View>
      </View>

      <Text style={styles.cardTitle}>{title}</Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.75}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          Lihat Detail  ↗
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function InfoCardScreen() {
  const handleDetail = (
    title: string,
    status: string,
    description: string
  ) => {
    const message =
      `Judul: ${title}\n` +
      `Status: ${status}\n` +
      `Keterangan: ${description}`;

    if (typeof window !== 'undefined') {
      window.alert(message);
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.eyebrow}>
            jesmin
          </Text>

          <Text style={styles.heading}>
            NPM: 2431056
          </Text>

          <Text style={styles.subtitle}>
           Tugas aku
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Text style={styles.iconText}>JS</Text>
        </View>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryIcon}>✓</Text>
          <Text style={styles.summaryNumber}>01</Text>
          <Text style={styles.summaryLabel}>
            Tugas selesai
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryIconOrange}>◷</Text>
          <Text style={styles.summaryNumber}>01</Text>
          <Text style={styles.summaryLabel}>
            Sedang proses
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Daftar Tugas
      </Text>

      <InfoCard
        taskNumber="001"
        title="Membuat UI Mobile"
        description="Menyelesaikan desain antarmuka aplikasi."
        status="selesai"
        onPress={() =>
          handleDetail(
            'Membuat UI Mobile',
            'selesai',
            'Menyelesaikan desain antarmuka aplikasi.'
          )
        }
      />

      <InfoCard
        taskNumber="002"
        title="Belajar Expo Router"
        description="Memahami navigasi dan struktur project."
        status="proses"
        onPress={() =>
          handleDetail(
            'Belajar Expo Router',
            'proses',
            'Memahami navigasi dan struktur project.'
          )
        }
      />

      <Text style={styles.footer}>
        ACTIVITY DASHBOARD
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F3F1FA',
  },

  container: {
    padding: 22,
    paddingTop: 48,
    paddingBottom: 36,
    width: '100%',
    maxWidth: 680,
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  headerText: {
    flex: 1,
  },

  eyebrow: {
    color: '#6D5BD0',
    fontSize: 35,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 9,
  },

  heading: {
    color: '#241C42',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 6,
  },

  subtitle: {
    color: '#79738B',
    fontSize: 14,
  },

  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#6D5BD0',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },

  iconText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 17,
  },

  summaryIcon: {
    color: '#29966B',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  summaryIconOrange: {
    color: '#D78A25',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  summaryNumber: {
    color: '#241C42',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 4,
  },

  summaryLabel: {
    color: '#79738B',
    fontSize: 12,
  },

  sectionTitle: {
    color: '#241C42',
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 14,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#EAE6F4',
    boxShadow: '0px 4px 14px rgba(48, 35, 90, 0.06)',
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  taskNumber: {
    color: '#8B83A3',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },

  badge: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },

  badgeSelesai: {
    backgroundColor: '#DDF5E9',
  },

  badgeProses: {
    backgroundColor: '#FFF0D9',
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '800',
  },

  textSelesai: {
    color: '#23845B',
  },

  textProses: {
    color: '#B96B12',
  },

  cardTitle: {
    color: '#241C42',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },

  description: {
    color: '#79738B',
    fontSize: 14,
    lineHeight: 21,
  },

  divider: {
    height: 1,
    backgroundColor: '#EAE6F4',
    marginVertical: 18,
  },

  button: {
    backgroundColor: '#6D5BD0',
    paddingVertical: 14,
    borderRadius: 11,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  footer: {
    textAlign: 'center',
    color: '#9790AA',
    fontSize: 10,
    letterSpacing: 1,
    marginTop: 12,
  },
});