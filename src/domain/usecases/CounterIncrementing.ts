import CounterRepository from 'domain/repositories/CounterRepository';

export default class CounterIncrementing {
    repository: CounterRepository;

    constructor(_repository: CounterRepository) {
        this.repository = _repository;
    }

    build() {
       return this.repository.increment();
    }
}
