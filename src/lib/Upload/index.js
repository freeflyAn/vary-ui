import Upload from "./src/Upload";
Upload.install = function (Vue, options = {}) {
  Vue.component(Upload.name, Upload);
};

export default Upload;
