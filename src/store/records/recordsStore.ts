import {TUser, TUserStore} from '@typings';
import {action, computed, makeObservable, observable} from 'mobx';

export function createRecStore(): any {
  return makeObservable(
    {
      records: [] as any,
      addRecords(record: any) {
        this.records.push(record);
      },
      deleteRecord(id: number) {
        this.records.filter((record: any) => record.id === id);
      },
    },
    {
      records: observable,
      addRecords: action.bound,
      deleteRecord: action.bound,
    },
  );
}
