import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoCustomImagePicker.web.ts
// and on native platforms to ExpoCustomImagePicker.ts
import ExpoCustomImagePickerModule from './ExpoCustomImagePickerModule';
import ExpoCustomImagePickerView from './ExpoCustomImagePickerView';
import { ChangeEventPayload, ExpoCustomImagePickerViewProps } from './ExpoCustomImagePicker.types';

// Get the native constant value.
export const PI = ExpoCustomImagePickerModule.PI;

export function hello(): string {
  return ExpoCustomImagePickerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoCustomImagePickerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoCustomImagePickerModule ?? NativeModulesProxy.ExpoCustomImagePicker);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoCustomImagePickerView, ExpoCustomImagePickerViewProps, ChangeEventPayload };
