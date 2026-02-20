import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1308 } from "./fragment1308";
import type { FragmentToken1309 } from "./fragment1309";

export const FRAGMENT_1310 = gql(`
  fragment Fragment1310 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult1310 = ResultOf<typeof FRAGMENT_1310>;
type FragmentSelf1310 = NonNullable<FragmentResult1310>;

export type FragmentToken1310 =
  | FragmentSelf1310["__typename"]
  | FragmentSelf1310["typenameHint"] | FragmentToken1308 | FragmentToken1309;
