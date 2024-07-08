import { StyleSheet, Text, TextProps, View } from 'react-native';

interface SectionTitleProps extends TextProps {}

export default function SectionTitle({
  children,
  ...props
}: SectionTitleProps) {
  return (
    <View style={styles.wrapperTitle}>
      <Text {...props} style={[styles.title, props.style]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperTitle: {
    width: '100%',
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});
