import Vue, { PluginFunction } from 'vue';

export interface BrowserDetectMeta {
  name: string;
  version: string;
  ua: string;
}

export interface BrowserDetect {
  isIE: boolean;
  isChrome: boolean;
  isFirefox: boolean;
  isOpera: boolean;
  isSafari: boolean;
  isEdge: boolean;
  isChromeIOS: boolean;
  isIOS: boolean;
  meta: BrowserDetectMeta;
}

declare const plugin: PluginFunction<never>;

export default plugin;

declare module 'vue/types/vue' {
  interface Vue {
    $browserDetect: BrowserDetect;
  }
}
