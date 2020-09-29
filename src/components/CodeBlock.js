import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";

class CodeBlock extends React.Component {
  render() {
    return (
      <Highlight {...defaultProps} code={this.props.code.trim()} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div className="line" key={i} {...getLineProps({ line, key: i })}>
                <span className="line-number">{i + 1}</span>
                <span className="line-content">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default CodeBlock