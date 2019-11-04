(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{677:function(n,e,t){"use strict";t.r(e),e.default="# Tag \u6807\u7b7e\n\u7528\u4e8e\u6807\u8bb0\u548c\u5206\u7c7b\u3002\n\n\n\n## \u989c\u8272\u7c7b\u578b\n\u4ee5\u4e0b\u63d0\u4f9b\u5728\u4e0d\u540c\u573a\u666f\u4e2d\u53ef\u9009\u62e9\u4e0d\u540c\u989c\u8272\u4e3a\u7279\u5b9a\u529f\u80fd\u6240\u4f7f\u7528\n\n```jsx\nimport { Tag } from 'zarm-web';\n\nReactDOM.render(\n  <>\n    <div className=\"rows\">\n      <Tag>default</Tag>\n      <h3>\u56db\u79cd\u9884\u7f6e\u989c\u8272</h3>\n      <Tag color=\"green\">green</Tag>\n      <Tag color=\"blue\">blue</Tag>\n      <Tag color=\"orange\">orange</Tag>\n      <Tag color=\"red\">red</Tag>\n    </div>\n    <div className=\"rows\">\n      <h3>\u81ea\u5b9a\u4e49\u989c\u8272</h3>\n      <Tag color=\"#00bc70\">#00bc70</Tag>\n      <Tag color=\"#54c0e8\">#54c0e8</Tag>\n      <Tag color=\"#ec9131\">#ec9131</Tag>\n      <Tag color=\"#ff5050\">#ff5050</Tag>\n      <Tag color=\"#616161\">#616161</Tag>\n    </div>\n  </>\n, mountNode);\n```\n\n\n\n## \u8fb9\u6846\n\u53ef\u4ee5\u8bbe\u7f6e\u8fb9\u6846\u5c5e\u6027\n\n```jsx\nimport { Tag } from 'zarm-web';\n\nReactDOM.render(\n  <>\n    <Tag bordered={false}>default</Tag>\n    <Tag bordered={false} color=\"green\">green</Tag>\n    <Tag bordered={false} color=\"blue\">blue</Tag>\n    <Tag bordered={false} color=\"orange\">orange</Tag>\n    <Tag bordered={false} color=\"red\">red</Tag>\n  </>\n, mountNode);\n```\n\n\n\n## \u5706\u89d2\n\u53ef\u4ee5\u8bbe\u7f6e\u5706\u89d2\u5927\u5c0f\n\n```jsx\nimport { Tag } from 'zarm-web';\n\nReactDOM.render(\n  <>\n    <Tag>radius</Tag>\n    <Tag shape=\"rect\">rect</Tag>\n    <Tag shape=\"round\">round</Tag>\n  </>\n, mountNode);\n```\n\n\n\n## \u5c3a\u5bf8\n\u53ef\u4ee5\u8bbe\u7f6e\u5c3a\u5bf8\u5927\u5c0f\n\n```jsx\nimport { Tag } from 'zarm-web';\n\nReactDOM.render(\n  <>\n    <Tag size=\"lg\">lg</Tag>\n    <Tag>md</Tag>\n    <Tag size=\"sm\">sm</Tag>\n    <Tag size=\"xs\">xs</Tag>\n  </>\n, mountNode);\n```\n\n\n\n## \u53ef\u5220\u9664\n\u7528\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\n\n```jsx\nimport { Tag, Icon } from 'zarm-web';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      tags: ['Tag1', 'Tag2'],\n      inputValue: '',\n      inputVisible: false\n    };\n  }\n\n  closeTag = (index) => {\n    const tags = this.state.tags\n    tags.splice(index, 1)\n    this.setState({\n      tags\n    })\n  }\n\n  showInput = () => {\n    this.setState({\n      inputVisible: true,\n    }, () => {\n      this.input.focus();\n    });\n  }\n\n  saveInputVal = () => {\n    const { inputValue, tags } = this.state;\n\n    if (inputValue.trim()) {\n      const temp = [...tags, inputValue];\n      this.setState({\n        tags: temp,\n        inputVisible: false,\n        inputValue: '',\n      });\n    } else {\n      this.setState({\n        inputVisible: false,\n        inputValue: ''\n      });\n    }\n  }\n\n  changeValue = (e) => {\n    this.setState({ inputValue: e.target.value });\n  }\n\n  handleKeydown = (e) => {\n    if (e.keyCode === 13) {\n      this.saveInputVal();\n    }\n  }\n\n  clearTags = () => {\n    this.setState({\n      tags: [],\n    });\n  }\n\n  render() {\n    const { tags, inputValue, inputVisible } = this.state;\n\n    return (\n      <>\n        {\n          tags.map((t, index) => {\n            const overlong = t.length > 16\n            return (\n              <Tag closable key={t + index} onClose={e => this.closeTag(index)}>\n                {overlong ? t.slice(0, 16) + '...' : t}\n              </Tag>\n            );\n          })\n        }\n        {\n          inputVisible\n            ? <input // Input\u7ec4\u4ef6\u5c1a\u672a\u63d0\u4ea4\uff0c\u6682\u7528\u539f\u751finput\n              ref={input => this.input = input }\n              size=\"sm\"\n              value={inputValue}\n              onChange={this.changeValue}\n              onBlur={this.saveInputVal}\n              onKeyDown={this.handleKeydown}\n              style={{\n                width: '80px',\n                height: '26px',\n                display: 'inline-block',\n                verticalAlign: 'text-bottom',\n                borderRadius: '4px',\n                lineHeight: '26px',\n                fontSize: '12px',\n                border: '1px solid #CECECE',\n                padding: '4px 8px',\n              }}\n            />\n            : <Tag\n                style={{ borderStyle: 'dashed', background: '#fff' }}\n                onClick={this.showInput}\n              >+ new tag</Tag>\n        }\n        <Icon\n          type=\"empty\"\n          theme=\"success\"\n          style={{ marginLeft: '40px', fontSize: '24px', cursor: 'pointer' }}\n          onClick={this.clearTags}\n        />\n      </>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## \u53ef\u9009\u62e9\n\u53ef\u901a\u8fc7 `CheckableTag` \u5b9e\u73b0\u7c7b\u4f3c Checkbox \u7684\u6548\u679c\uff0c\u70b9\u51fb\u5207\u6362\u9009\u4e2d\u6548\u679c\n\n```jsx\nimport { Tag } from 'zarm-web';\n\nconst CheckableTag = Tag.CheckableTag;\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      cities: [\n        {\n          name: '\u4e0a\u6d77',\n          checked: false,\n        },\n        {\n          name: '\u5317\u4eac',\n          checked: true,\n        },\n        {\n          name: '\u6df1\u5733',\n          checked: false,\n        },\n        {\n          name: '\u53f0\u6e7e',\n          checked: false,\n          disabled: true,\n        }\n      ]\n    }\n  }\n\n  selectItem = (nextStatus, index) => {\n    const { cities } = this.state\n    const item = cities[index];\n    item.checked = nextStatus;\n    cities.splice(index, 1, item);\n\n    this.setState({\n      cities: cities,\n    }, console.log('\u5f53\u524d\u9009\u4e2d\u7684\u57ce\u5e02:', this.state.cities.filter(c => c.checked)))\n  }\n\n  render() {\n    const { cities } = this.state;\n\n    return (\n      <>\n        {\n          cities.map((city, index) => {\n            return (\n              <CheckableTag\n                disabled={city.disabled}\n                checked={city.checked}\n                onChange={checked => this.selectItem(checked, index)}\n                key={index + city.name}\n              >\n                {city.name}\n              </CheckableTag>\n            );\n          })\n        }\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| size | string | 'md' | \u8bbe\u7f6e\u5927\u5c0f\uff0c\u53ef\u9009\u503c\u4e3a `lg`\u3001`md`\u3001`sm`\u3001`xs` |\n| shape | string | 'radius' | \u8bbe\u7f6e\u5f62\u72b6\uff0c\u53ef\u9009\u503c\u4e3a `rect`\u3001`radius`\u3001`round` |\n| color | string | - | \u8bbe\u7f6e\u989c\u8272\uff0c\u53ef\u9009\u503c\u4e3a `green`\u3001`blue`\u3001 `red`\u3001 `orange` \u6216\u8005\u81ea\u5b9a\u4e49\u989c\u8272\u503c |\n| bordered | boolean | true | \u662f\u5426\u8fb9\u6846\u6837\u5f0f |\n| closable | boolean | false | \u662f\u5426\u53ef\u5173\u95ed |\n| onClose | (e) => void | - | \u5173\u95ed\u56de\u8c03\u4e8b\u4ef6\uff0cclosable \u4e3a `true` \u65f6\u751f\u6548 |\n\n# Tag.CheckableTag\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| size | string | 'md' | \u8bbe\u7f6e\u5927\u5c0f\uff0c\u53ef\u9009\u503c\u4e3a `lg`\u3001`md`\u3001`sm`\u3001`xs` |\n| shape | string | 'radius' | \u8bbe\u7f6e\u5f62\u72b6\uff0c\u53ef\u9009\u503c\u4e3a `radius`\u3001`rect`\u3001`round` |\n| disabled | boolean | false | \u8bbe\u7f6e\u662f\u5426\u53ef\u5207\u6362 |\n| onChange | (checked: boolean) => void | - | \u9009\u4e2d\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\uff0c\u53c2\u6570\u4e3a\u5207\u6362\u540e\u7684\u72b6\u6001 |\n"}}]);
//# sourceMappingURL=42.81282c78.js.map