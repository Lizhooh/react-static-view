
### react-static-view
react-static-view is a static component container.

<a href="https://www.npmjs.com/package/react-static-view"><img src="https://img.shields.io/npm/v/react-static-view.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/react-static-view"><img src="https://img.shields.io/npm/dm/react-static-view.svg?style=flat-square"></a>

In react is default used `<div>` .
In react native is default used `<view>`.

### install

```bash
npm install --save react-static-view
```

### use

```js
import StaticView from 'react-static-view';

// render only once [default]
<StaticView rendered={1} />

// render only two
<StaticView rendered={2} />

// render only at 1, 2, 5, 9
<StaticView rendered={[1, 2, 5, 9]} />

// not render => return null
<StaticView rendered={false} />

// render forever
<StaticView rendered={true} />
```

Except for `rendered` and `element`, all else can be added. `element` default is `null`.

You can specify the container type using `element`.

```js
// react, use dom string name
<StaticView element='header' style={styles.header}>
    <span>Hello</span>
<StaticView />
/* after render ==>
<header style={styles.header}>
    <span>Hello</span>
</header>
*/

// react-native, use component object
<StaticView element={TouchableOpacity} style={styles.touch}>
    <Text>Hello</Text>
</StaticView>
/* after render ==>
<TouchableOpacity style={styles.touch}>
    <Text>Hello</Text>
</TouchableOpacity>
*/
```




