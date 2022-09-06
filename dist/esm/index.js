import { registerPlugin } from "@capacitor/core";
const FileSharer = registerPlugin('FileSharer', {
    web: () => import('./web').then(m => new m.FileSharerPluginWeb()),
});
export * from './definitions';
export { FileSharer };
//# sourceMappingURL=index.js.map