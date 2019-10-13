import Counter from 'domain/entities/Counter';

export default class CounterRepository implements ICounterRepository {
    counter: Counter;

    increment(): void {
        this.counter.value += 1;
    }

    decrement(): void {
        this.counter.value -= 1;
    }
}

interface ICounterRepository {
    increment(): void;
    decrement(): void;
}
