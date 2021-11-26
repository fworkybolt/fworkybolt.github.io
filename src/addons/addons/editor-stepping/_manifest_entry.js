/* generated by pull.js */
const manifest = {
  "noCompiler": true,
  "name": "Running block border",
  "description": "Adds a colored highlight to the blocks that are currently being executed in a project.",
  "dynamicEnable": true,
  "dynamicDisable": true,
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "settings": [
    {
      "dynamic": true,
      "name": "Highlight color",
      "id": "highlight-color",
      "type": "color",
      "default": "#0000ff"
    }
  ],
  "tags": [
    "editor",
    "codeEditor",
    "featured"
  ],
  "enabledByDefault": false
};
export default manifest;
