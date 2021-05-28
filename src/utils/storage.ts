export default class LocalStorage {

  static $inject = ['$window'];

  constructor($window: { localStorage: any; }) {
    if ($window.localStorage) {
      this.storage = $window.localStorage;
    } else {
      this.storage = {
        items: [],
        getItem (key: string | number) {
          return this.items[key];
        },
        setItem (key: string | number, value: string) {
          this.items[key] = value;
        }
      };
    }
  }

  storage: any;

  get(key: string | number) {
    return this.storage.getItem(key);
  }

  set(key: string | number, value: string) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}
