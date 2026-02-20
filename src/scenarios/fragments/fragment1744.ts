import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1742 } from "./fragment1742";
import type { FragmentToken1743 } from "./fragment1743";

export const FRAGMENT_1744 = gql(`
  fragment Fragment1744 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult1744 = ResultOf<typeof FRAGMENT_1744>;
type FragmentSelf1744 = NonNullable<FragmentResult1744>;

export type FragmentToken1744 =
  | FragmentSelf1744["__typename"]
  | FragmentSelf1744["typenameHint"] | FragmentToken1742 | FragmentToken1743;
