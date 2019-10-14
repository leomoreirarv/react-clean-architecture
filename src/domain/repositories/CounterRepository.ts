import Counter from 'domain/entities/Counter';
import ICounterRepository from './ICounterRepository';
import { injectable } from 'inversify'

@injectable()
export default class CounterRepository implements ICounterRepository {
    counter: Counter;

    increment(): void {
        this.counter.value += 1;
    }

    decrement(): void {
        this.counter.value -= 1;
    }
}
