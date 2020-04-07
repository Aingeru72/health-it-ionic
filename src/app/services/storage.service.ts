import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export enum StorageKey {
  FOOD_LIST = 'foodList',
  DARK_MODE = 'dark',
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(key: string, object: any) {
    await Storage.set({
      key,
      value: JSON.stringify(object)
    });
  }

  async getObject(key: string) {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  async setItem(key: StorageKey, value: string) {
    await Storage.set({
      key,
      value
    });
  }

  async getItem(key: string) {
    return await Storage.get({ key });
  }

  async removeItem(key: string) {
    await Storage.remove({ key });
  }

  async keys() {
    return await Storage.keys();
  }

  async clear() {
    await Storage.clear();
  }
}
