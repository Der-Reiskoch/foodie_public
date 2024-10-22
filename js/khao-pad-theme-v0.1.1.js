let KHAO_UI_VERSION = "";

const initKhaoUi = (version) => {
  KHAO_UI_VERSION = version;
};

const loadKhaoUi = (id) => {
  const scripts = Array.from(document.querySelectorAll("script")).map(
    (scr) => scr.src
  );

  const scriptPath = `/js/khao-ui-${id}-${KHAO_UI_VERSION}.js`;

  if (!scripts.includes(scriptPath)) {
    var tag = document.createElement("script");
    tag.type = "module";
    tag.src = scriptPath;
    document.getElementsByTagName("head")[0].appendChild(tag);
    console.log(`added module ${scriptPath}`);
  }
};
