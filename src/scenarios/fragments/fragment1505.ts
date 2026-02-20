import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1503 } from "./fragment1503";
import type { FragmentToken1504 } from "./fragment1504";

export const FRAGMENT_1505 = gql(`
  fragment Fragment1505 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult1505 = ResultOf<typeof FRAGMENT_1505>;
type FragmentSelf1505 = NonNullable<FragmentResult1505>;

export type FragmentToken1505 =
  | FragmentSelf1505["__typename"]
  | FragmentSelf1505["typenameHint"] | FragmentToken1503 | FragmentToken1504;
