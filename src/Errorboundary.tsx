import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  errorTitle?: string
  reloadTitle?: string
}

interface State {
  hasError: boolean
}

class Errorboundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }
  static defaultProps: {
    errorTitle: string
    reloadTitle: string
  }

  public static getDerivedStateFromError(/* _: Error */): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render(): React.ReactNode {
    const { errorTitle, reloadTitle } = this.props
    if (this.state.hasError) {
      return (
        <div style={{ padding: '3rem' }}>
          <h1>
            Uh oh! Something brok
            <span
              style={{
                display: 'inline-block',
                transform: 'rotate(10deg) translateY(0.3rem)',
              }}
            >
              e
            </span>
          </h1>
          <h3>{errorTitle}</h3>
          <p>{reloadTitle}</p>
        </div>
      )
    }

    return this.props.children
  }
}

Errorboundary.defaultProps = {
  errorTitle: 'Truth is, something remarkable and unexpected happened.',
  reloadTitle:
    'But hey, cheer up! It works on my computer. Have you tried turning your on and off? ¯\\_(ツ)_/¯',
}

export { Errorboundary }
