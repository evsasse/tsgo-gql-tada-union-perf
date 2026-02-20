import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1731 } from "./fragment1731";
import type { FragmentToken1732 } from "./fragment1732";

export const FRAGMENT_1733 = gql(`
  fragment Fragment1733 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult1733 = ResultOf<typeof FRAGMENT_1733>;
type FragmentSelf1733 = NonNullable<FragmentResult1733>;

export type FragmentToken1733 =
  | FragmentSelf1733["__typename"]
  | FragmentSelf1733["typenameHint"] | FragmentToken1731 | FragmentToken1732;
