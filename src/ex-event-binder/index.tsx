import {
  EbEventSource,
  EbEventDestination,
} from './core';

export * from './core';

export class EbEventBinder {
  sourceMap: { [id : string]: EbEventSource };
  destinationMap: { [id : string]: EbEventDestination };

  constructor() {
    this.sourceMap = {};
    this.destinationMap = {};
  }

  addSource(id: string, source: EbEventSource) {
    this.sourceMap[id] = source;
  }

  removeSource(id: string) {
    delete this.sourceMap[id];
  }

  addDestination(id: string, destination: EbEventDestination) {
    this.destinationMap[id] = destination;
  }

  removeDestination(id: string) {
    delete this.destinationMap[id];
  }
}
