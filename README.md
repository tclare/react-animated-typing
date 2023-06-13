## 🎉 Welcome to Animated Typer!

![demo gif](https://github.com/tclare/react-animated-typing/blob/main/public/demo.gif)

## 🔨 Installation

`npm install @tclare/react-animated-typer`

## 📋 Background

React Animated Typer is a highly customizable yet super simple, one-component
library, used to create the notion of one or more users typing text on a shared doc, like you would see on Google Docs. It works very well on a React website's landing page, to create the effect of one multiple "users" co-editing one or more
applications a product has to offer.

## 🧑‍💻 Usage

To use, simply invoke the `AnimatedTyper` component inside a 
React application. This component accepts the following props:


| Prop      | Type | Description | Required | Default
| ----------- | ----------- | ----- | -------- | --------
| text      | `string[]`       | An array of messages to be typed out | yes | n/a
| contributors   | `string[]`  | An array of "users" who type out the messages in text | no | `["John", "Mary"]`
| loopForever | `boolean` | If true, once the last message in `text` is typed out, this component will return to the start. Otherwise, nothing more will be typed out. | no | `true`
| spelloutDuration | `number` | Time (in milliseconds) to spell out (and also backspace through) each phrase in `text`. | no | `1000`
| waitingDuration | `number` | Time (in milliseconds) to wait, from when a phrase was finished being spelled out, to when it will start being erased. | no | `2000`
| blinkDuration | `number` | Time (in milliseconds) to wait between cursor blinks. | no | `500`
| textStyles | `AnimatedTyperStyle`* | Custom styles to apply to the messages being typed out. | no | `{}`
| cursorLineStyles | `AnimatedTyperStyle`* | Custom styles to apply to the vertical line portion of the cursor. | no | `{}`
| cursorBoxStyles | `AnimatedTyperStyle`* | Custom styles to apply to the horizontal box portion of the cursor, usually containing the name of the current "editing user." | no | `{}`

*`AnimatedTyperStyle`: `React.CSSProperties` | `React.CSSProperties[]` | `function`. <br>

When used as a simple object of `CSSProperties`, these styles are applied directly to the affected element. When an array of `CSSProperties` is passed, styles are applied in looping order to the affected element. Finally, when a function of type (i: number) => React.CSSProperties is passed, it will be executed at the index of the current `text` phrase, or `cursor` contributor.

## 🤝 Contributing

Contributions are more than welcome! If you notice a bug or see a feature
you want implemented, feel free to open an issue or raise a PR and
write a solution yourself. 

## 📜 License

This repository uses the MIT License and is fine to use for both personal
and commercial applications.
