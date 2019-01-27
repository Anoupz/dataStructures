export default class CreateQueue {
  queue: String[] = [];

  enqueue(item: string) {
    this.queue.unshift(item);
  }

  dequeue() {
    return this.queue.pop();
  }

  peek() {
    return this.queue[this.queue.length - 1];
  }

  get length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
