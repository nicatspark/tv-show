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
        <div>
          <h3>{errorTitle}</h3>
          <p>{reloadTitle}</p>
        </div>
      )
    }

    return this.props.children
  }
}

Errorboundary.defaultProps = {
  errorTitle: 'Uh oh... something unexpected happened.',
  reloadTitle: 'Have you tried turning it on and off?',
}

export { Errorboundary }
