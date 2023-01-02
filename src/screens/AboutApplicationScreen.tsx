import { VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '~/style';
import { Style } from '~/utils';

export default function AboutApplication() {
  return (
    <VStack flex={1} px='3'>
      <Text style={styles.text}>سفارش اینترنتی غذا در ایران هنوز یک فرهنگ نوپا و مفهومی نسبتا تازه است که با وجود علاقه رو به رشد مردم به استفاده از آن، این روش خرید هنوز به خوبی در کشور ما در حال اجرا می لاشد و کاربران می توانند از مزایای آن به طور کامل بهره ببرند.
      </Text>
      <Text style={styles.text}>
        هدف ما از توسعه نرم افزار فودینو ایجاد تجربه ای خوب و لذت بخش از سفارش آنلاین غذا می باشد.
      </Text>
    </VStack>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: Style.scale(16),
    fontWeight: Style.fontWeight.bold,
    marginTop: 10,
    lineHeight: 35,
    color: Colors.GARY_1
  }
})
