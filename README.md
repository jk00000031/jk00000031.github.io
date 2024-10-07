# Learn Once Project

### 问题汇总

- 在 `config` 文件设置了本地搜索，但是按钮文本不生效

```typescript
export default defineConfig({
  ...,
  themeConfig: {
    ...,
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '站内搜索',
                buttonAriaLabel: '站内搜索'
              }
            }
          }
        },
        // or
        translations: {
          button: {
            buttonText: '站内搜索',
            buttonAriaLabel: '站内搜索'
          }
        }
      }
    },
  }
})
```
