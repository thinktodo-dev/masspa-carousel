# masspa-carousel

> 

[![NPM](https://img.shields.io/npm/v/masspa-carousel.svg)](https://www.npmjs.com/package/masspa-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save masspa-carousel
```

## Usage

```jsx
import React, { Component } from 'react'
import MasspaCarousel from 'masspa-carousel'

class Example extends Component {
  render () {
    return (
      <MasspaCarousel />
    )
  }
}
```

## Properties

| Prop                      | Description                                                                                                                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`listBranches`**               | List branch                                                                                                                                                                                                                                         |
| **`type`**               | Type of carousel. Enum `[slideThree, slideOne, default]`                                                                                                                                                                                                                                |


## Example

Check full example in the `Example` folder.

```js
import React, { Component } from 'react';
import MasspaCarousel from 'masspa-carousel';
import branch1 from './images/branch_01.jpg'
import branch2 from './images/branch_02.jpg'
import branch3 from './images/branch_03.jpg'
import branch4 from './images/branch_04.jpg'

const listBranches = [
  {
    branchName: 'Chi nhánh Gia Lai',
    imageUrl: branch1,
  },
  {
    branchName: 'Chi nhánh Gia Lai',
    imageUrl: branch2,
  },
  {
    branchName: 'Chi nhánh Gia Lai',
    imageUrl: branch3,
  },
  {
    branchName: 'Chi nhánh Gia Lai',
    imageUrl: branch4,
  },
]

class Example extends Component {
  render() {
    return (
        <MasspaCarousel 
          type="slideThree"
          listBranches={listBranches}
        />
    );
  }
}
```

## Demo
Default

![demo](https://raw.githubusercontent.com/thinktodo-dev/Carousel/master/example/default.gif)

slideOne

![demo](https://raw.githubusercontent.com/thinktodo-dev/Carousel/master/example/slideOne.gif)

slideThree

![demo](https://raw.githubusercontent.com/thinktodo-dev/Carousel/master/example/slideThree.gif)
## License

MIT © [Masspa](https://github.com/thinktodo-dev)
