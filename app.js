class SharingImageButton extends React.Component {
  constructor (props) {
    super(props)
    this._bind()
  }

  _bind () {
    this._clickShareHandle = this._clickShareHandle.bind(this)
  }

  async _clickShareHandle () {
    if (navigator.canShare && navigator.canShare({ files: this.props.fileArray })) {
      try {
        await navigator.share({
          title: this.props.title,
          text: this.props.text,
          files: this.props.fileArray
        })
        alert('successfully shared')
      } catch (e) {
        alert('user aborted')
      }
    } else {
      alert("navigator can't share")
    }
  }

  render () {
    return (
      <button disabled={false} className="share-button" onClick={this._clickShareHandle}>
        {this.props.content}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share-fill"
             viewBox="0 0 16 16">
          <path
            d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
        </svg>
      </button>
    )
  }
}

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
      try {
        await navigator.share({
          title: this.props.title,
          text: this.props.text,
          url: this.props.url
        })
        alert('successfully shared')
      } catch (e){
        alert('user aborted')
      }
    } else {
      alert("navigator can't share")
    }
  }

  render () {
    return (
      <button className="share-button" onClick={this._clickShareHandle}>
        {this.props.content}
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
    this.state = {
      fileArray: []
    }
    this.getTheFile().then()
  }

  async getTheFile() {
    try {
      const response = await fetch("images/cat.webp")
      const blob = await response.blob()

      const file = new File([blob], "cat.webp", {type: "image/webp"})
      this.setState({
        fileArray: [file]
      })
    } catch (e) {
      console.error(e)
    }


  }

  render() {
    return (
      <main className="container">
        <SharingButton
          content="share this page"
          title="share this cute cat"
          text="choose the way you want to share this cute cat"
          url={document.location.href}
        />
        <SharingImageButton
          content="share just the cat file"
          title="share this cute cat"
          text="choose the way you want to share this cute cat"
          fileArray={this.state.fileArray}
        />
        <img src="images/cat.webp" alt="this is a cat cute af"/>
      </main>
    )
  }

}

ReactDOM.render(<Main/>, document.getElementById('root'))