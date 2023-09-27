import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoCustomImagePickerViewProps } from './ExpoCustomImagePicker.types';

const NativeView: React.ComponentType<ExpoCustomImagePickerViewProps> =
  requireNativeViewManager('ExpoCustomImagePicker');

export default function ExpoCustomImagePickerView(props: ExpoCustomImagePickerViewProps) {
  return <NativeView {...props} />;
}
