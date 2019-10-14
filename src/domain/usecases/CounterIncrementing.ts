import ICounterRepository from 'domain/repositories/ICounterRepository';
import CounterRepository from 'domain/repositories/CounterRepository';
import { inject } from 'inversify';

export default class CounterIncrementing {
    repository: ICounterRepository;

    constructor(
        @inject(CounterRepository) _repository: ICounterRepository
    ) {
        this.repository = _repository;
    }

    build() {
       return this.repository.increment();
    }
}
