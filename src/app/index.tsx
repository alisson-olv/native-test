import { useState } from 'react';
import { Button, Text, TextBase, View } from 'react-native';

export default function Index() {
  const [view, setView] = useState(false);

  const onPress = () => setView(!view);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        padding: 20,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
