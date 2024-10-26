let KHAO_UI_VERSION = "";

const initKhaoUi = (version) => {
  KHAO_UI_VERSION = version;
};

const loadKhaoUi = (id) => {
  const scriptPath = `/js/khao-ui-${id}-${KHAO_UI_VERSION}.js`;
  const scriptId = `js-khao-ui-${id}`;

  if (!document.getElementById(scriptId)) {
    var tag = document.createElement("script");
    tag.type = "module";
    tag.id = scriptId;
    tag.src = scriptPath;
    document.getElementsByTagName("body")[0].appendChild(tag);

    console.info(`loaded module khao-ui-${id}`);
  }
};
