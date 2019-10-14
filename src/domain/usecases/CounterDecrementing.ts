import ICounterRepository from 'domain/repositories/ICounterRepository';
import CounterRepository from 'domain/repositories/CounterRepository';
import { inject } from 'inversify';

export default class CounterDecrementing {
    repository: ICounterRepository;

    constructor(
        @inject(CounterRepository) _repository: ICounterRepository
    ) {
        this.repository = _repository;
    }

    build() {
       return this.repository.decrement();
    }
}
