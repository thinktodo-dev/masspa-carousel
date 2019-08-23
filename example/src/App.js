import React, { Component } from 'react'
import branch1 from './images/branch_01.jpg'
import branch2 from './images/branch_02.jpg'
import branch3 from './images/branch_03.jpg'
import branch4 from './images/branch_04.jpg'
import ExampleComponent from 'masspa-carousel'
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
  // {
  //   branchName: 'Chi nhánh Gia Lai',
  //   imageUrl: branch4,
  // },
]
export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent
          type="slideThree"
          listBranches={listBranches}
        />
      </div>
    )
  }
}
