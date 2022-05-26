import { BucketTestItem } from './bucket-test-item';

export class BucketTest {
  constructor(
    public id = 0,
    public engineers = '',
    public supervisors = '',
    public consultants = '',
    public tests: BucketTestItem[] = []
  ) {}
}
