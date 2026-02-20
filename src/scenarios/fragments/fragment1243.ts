import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1241 } from "./fragment1241";
import type { FragmentToken1242 } from "./fragment1242";

export const FRAGMENT_1243 = gql(`
  fragment Fragment1243 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult1243 = ResultOf<typeof FRAGMENT_1243>;
type FragmentSelf1243 = NonNullable<FragmentResult1243>;

export type FragmentToken1243 =
  | FragmentSelf1243["__typename"]
  | FragmentSelf1243["typenameHint"] | FragmentToken1241 | FragmentToken1242;
