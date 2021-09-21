#PWA sharing

Pwa allows you to share text, link or document from a webpage on a phone.

## How is it working (link and text)?

```js 
navigator.share()
```

This function is the only needed thing for sharing
it is a promise which success if the user well shared and, throw an error if user abort the sharing.

example:
```js
navigator.share({
  title: 'the title for this shaeing', // I can't yet figure out where can we see it in the sharing process
  text: 'the text you want to share',
  url: 'https://www.superherocheesecake.com/'
})
  .then(() => {/*the user well shared*/})
  .catch(() => {/*the user abort the sharing*/})

```


## Some constraints:

#### HTTPS
For some security reasons, browsers do not allow this function if the website isn't secured by SSL (HTTPS)


#### browser compatibility
There is the browser compatibility from MDN documentation:

![](images/Untitled.png)

It doesn't work for chrome on MAC
firefox mobile can't share file or text

When sharing isn't possible on the browser the method ```navigator.share()``` do not exist.
So for testing if sharing is possible, the easiest method is the following:
```js
if(navigator.share) {
  // sharing is possible here
} else {
  // sharing is  ot possible
}


```


