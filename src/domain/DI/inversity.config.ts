import { Container } from 'inversify';
import ICounterRepository from 'domain/repositories/ICounterRepository';
import CounterRepository from 'domain/repositories/CounterRepository';

const DIContainer = new Container();
DIContainer.bind<ICounterRepository>(CounterRepository).toSelf();

export default Container;
