import { DataModel } from './data.model';
import { data } from '../../assets/mock/data.js';

describe('Data', () => {
  it('should create an instance', () => {
    expect(new DataModel(data)).toBeTruthy();
  });
});
