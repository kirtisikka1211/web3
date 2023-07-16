import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'addPrize' : ActorMethod<[string, bigint, string, string], undefined>,
}
