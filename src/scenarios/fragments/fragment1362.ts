import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1360 } from "./fragment1360";
import type { FragmentToken1361 } from "./fragment1361";

export const FRAGMENT_1362 = gql(`
  fragment Fragment1362 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult1362 = ResultOf<typeof FRAGMENT_1362>;
type FragmentSelf1362 = NonNullable<FragmentResult1362>;

export type FragmentToken1362 =
  | FragmentSelf1362["__typename"]
  | FragmentSelf1362["typenameHint"] | FragmentToken1360 | FragmentToken1361;
