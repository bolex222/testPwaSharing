class SharingButton extends React.Component {
  constructor (props) {
    super(props)

    this._bind()
  }

  _bind() {
    this._clickShareHandle = this._clickShareHandle.bind(this)
  }

  async _clickShareHandle() {
    if(navigator.share) {
      await navigator.share({
        title: this.props.title,
        text: this.props.text,
        url: this.props.url
      }).catch(() => {
        alert("Ho nooo, it failed")
      })
      alert("Yeaaaaaa!!! shared successfully")
    } else {
      alert("navigator can't share")
    }
  }

  render () {
    return (
      <button onClick={this._clickShareHandle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill"
             viewBox="0 0 16 16">
          <path
            d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
        </svg>
      </button>
    )
  }
}

class Main extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <main>
        <SharingButton
          title="share this cute cat"
          text="choose the way you want to share this cute cat"
          url={document.location.href}
        />
        hello this is a test for sharing with pwa
        and a cat
        <img src="images/cat.webp" alt="this is a cat cute af"/>
      </main>
    )
  }

}

ReactDOM.render(<Main/>, document.getElementById('root'))