import * as React from 'react';

import { ExpoCustomImagePickerViewProps } from './ExpoCustomImagePicker.types';

export default function ExpoCustomImagePickerView(props: ExpoCustomImagePickerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
