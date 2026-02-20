import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3308 } from "./fragment3308";
import type { FragmentToken3309 } from "./fragment3309";

export const FRAGMENT_3310 = gql(`
  fragment Fragment3310 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult3310 = ResultOf<typeof FRAGMENT_3310>;
type FragmentSelf3310 = NonNullable<FragmentResult3310>;

export type FragmentToken3310 =
  | FragmentSelf3310["__typename"]
  | FragmentSelf3310["typenameHint"] | FragmentToken3308 | FragmentToken3309;
