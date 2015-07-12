
import React from 'react'
import Svg from './Svg.jsx'
import Toolbar from './Toolbar.jsx'

class Canvas extends React.Component {

  render () {
    let props = this.props
    let styles = {
      container: {
        position: 'relative',
        height: '100vh',
      },
      viewport: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 72,
        left: 0,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
      },
      table: {
        display: 'table',
        width: '100%',
        height: '100%',
      },
      cell: {
        display: 'table-cell',
        verticalAlign: 'middle',
      },
      toolbar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 72,
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        backgroundColor: props.colors.darken[1]
      }
    }

    return (
      <div style={styles.container}>
        <div style={styles.viewport}>
          <div style={styles.table}>
            <div style={styles.cell}>
              <Svg {...props} />
              {/*
              <pre>{JSON.stringify(props, null, '  ')}</pre>
              */}
            </div>
          </div>
        </div>
        <div style={styles.toolbar}>
          <Toolbar {...props} />
        </div>
      </div>
    )
  }

}

export default Canvas

