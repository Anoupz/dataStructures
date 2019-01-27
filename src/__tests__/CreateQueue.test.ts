import CreateQueue from "../CreateQueue";

describe("Testing CreateQueue", () => {
  const queue = new CreateQueue();
  test("Queue is initially empty", () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  test("Add to the queue", () => {
    queue.enqueue("Item 1");
    queue.enqueue("Item 2");

    expect(queue.length).toBe(2);
  });

  test("Remove from the queue", () => {
    queue.dequeue();
    expect(queue.length).toBe(1);
  });
});
