import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1488 } from "./fragment1488";
import type { FragmentToken1489 } from "./fragment1489";

export const FRAGMENT_1490 = gql(`
  fragment Fragment1490 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult1490 = ResultOf<typeof FRAGMENT_1490>;
type FragmentSelf1490 = NonNullable<FragmentResult1490>;

export type FragmentToken1490 =
  | FragmentSelf1490["__typename"]
  | FragmentSelf1490["typenameHint"] | FragmentToken1488 | FragmentToken1489;
