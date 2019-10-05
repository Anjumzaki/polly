import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown direction="up" className="btn" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle tag="span" className="nav-link btn btn-primary btn-outline" caret>
          Male Voice 1
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}