import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1784 } from "./fragment1784";
import type { FragmentToken1785 } from "./fragment1785";

export const FRAGMENT_1786 = gql(`
  fragment Fragment1786 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult1786 = ResultOf<typeof FRAGMENT_1786>;
type FragmentSelf1786 = NonNullable<FragmentResult1786>;

export type FragmentToken1786 =
  | FragmentSelf1786["__typename"]
  | FragmentSelf1786["typenameHint"] | FragmentToken1784 | FragmentToken1785;
