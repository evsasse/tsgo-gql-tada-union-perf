import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1390 } from "./fragment1390";
import type { FragmentToken1391 } from "./fragment1391";

export const FRAGMENT_1392 = gql(`
  fragment Fragment1392 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult1392 = ResultOf<typeof FRAGMENT_1392>;
type FragmentSelf1392 = NonNullable<FragmentResult1392>;

export type FragmentToken1392 =
  | FragmentSelf1392["__typename"]
  | FragmentSelf1392["typenameHint"] | FragmentToken1390 | FragmentToken1391;
