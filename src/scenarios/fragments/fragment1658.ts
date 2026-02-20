import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1656 } from "./fragment1656";
import type { FragmentToken1657 } from "./fragment1657";

export const FRAGMENT_1658 = gql(`
  fragment Fragment1658 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult1658 = ResultOf<typeof FRAGMENT_1658>;
type FragmentSelf1658 = NonNullable<FragmentResult1658>;

export type FragmentToken1658 =
  | FragmentSelf1658["__typename"]
  | FragmentSelf1658["typenameHint"] | FragmentToken1656 | FragmentToken1657;
