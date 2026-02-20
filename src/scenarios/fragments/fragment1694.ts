import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1692 } from "./fragment1692";
import type { FragmentToken1693 } from "./fragment1693";

export const FRAGMENT_1694 = gql(`
  fragment Fragment1694 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult1694 = ResultOf<typeof FRAGMENT_1694>;
type FragmentSelf1694 = NonNullable<FragmentResult1694>;

export type FragmentToken1694 =
  | FragmentSelf1694["__typename"]
  | FragmentSelf1694["typenameHint"] | FragmentToken1692 | FragmentToken1693;
