import { EventEmitter } from 'events';
import { STATE_EVENTS } from '../constants/enums';

class ResponseManager extends EventEmitter {
  constructor() {
    super();
    this.actionToEmit = {
      name: '',
      data: '',
    };
  }

  create(name, data = null) {
    const defaultAction = { name, data };
    this.actionToEmit = defaultAction;
    this.emitChange();
  }


  emitChange() {
    this.emit(STATE_EVENTS.CHANGE, this.actionToEmit);
  }

  addChangeListener(callback) {
    this.addListener(STATE_EVENTS.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(STATE_EVENTS.CHANGE, callback);
  }
}

export default new ResponseManager();
