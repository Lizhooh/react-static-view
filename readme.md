

### react-static-view
react-static-view is a static component container.


### install

```bash
npm install --save react-static-view
```

### use

```js
import StaticView from 'react-static-view';

// render only once
<StaticView render={1} />

// render only two
<StaticView render={2} />

// render only at 1, 2, 5, 9
<StaticView render={[1, 2, 5, 9]} />

// not render
<StaticView render={false} />

// render forever
<StaticView render={true} />
```

### In React Native

```js
import StaticView from 'react-static-view/react-native';
```