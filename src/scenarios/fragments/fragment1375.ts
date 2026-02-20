import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1373 } from "./fragment1373";
import type { FragmentToken1374 } from "./fragment1374";

export const FRAGMENT_1375 = gql(`
  fragment Fragment1375 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult1375 = ResultOf<typeof FRAGMENT_1375>;
type FragmentSelf1375 = NonNullable<FragmentResult1375>;

export type FragmentToken1375 =
  | FragmentSelf1375["__typename"]
  | FragmentSelf1375["typenameHint"] | FragmentToken1373 | FragmentToken1374;
