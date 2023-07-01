# Only Allow ESM

Force ES Modules to be used on a project.

## Usage

Add a postinstall script to your package's `package.json`.

```json
{
  "scripts": {
    "postinstall": "npx only-allow-esm"
  }
}
```

If the user's `package.json` does not have `"type": "module"` in it, it will report an error and exit.

## License

WTFPL
