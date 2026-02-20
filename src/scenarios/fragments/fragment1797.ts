import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1795 } from "./fragment1795";
import type { FragmentToken1796 } from "./fragment1796";

export const FRAGMENT_1797 = gql(`
  fragment Fragment1797 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult1797 = ResultOf<typeof FRAGMENT_1797>;
type FragmentSelf1797 = NonNullable<FragmentResult1797>;

export type FragmentToken1797 =
  | FragmentSelf1797["__typename"]
  | FragmentSelf1797["typenameHint"] | FragmentToken1795 | FragmentToken1796;
