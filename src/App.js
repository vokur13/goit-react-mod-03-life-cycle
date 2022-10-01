import React, { Component } from 'react';
// import shortid from 'shortid';
import Container from 'components/Container';
import { Modal } from 'components/Modal';
// import IconButton from './components/IconButton';
// import { ReactComponent as AddIcon } from './icons/add.svg';
// import { Clock } from 'components/Clock';
import { Tabs } from 'components/Tabs';
import tabs from './json/tabs.json';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        {/* <Clock /> */}
        <Tabs items={tabs} />

        {/* <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton> */}

        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello, this is modal content as chilcdren</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium natus neque quas beatae consequuntur fuga in
              inventore, illo magni pariatur. Eaque officia facere, temporibus
              similique voluptates magni vel soluta assumenda!
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
