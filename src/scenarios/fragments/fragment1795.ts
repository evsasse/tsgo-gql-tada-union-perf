import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1793 } from "./fragment1793";
import type { FragmentToken1794 } from "./fragment1794";

export const FRAGMENT_1795 = gql(`
  fragment Fragment1795 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult1795 = ResultOf<typeof FRAGMENT_1795>;
type FragmentSelf1795 = NonNullable<FragmentResult1795>;

export type FragmentToken1795 =
  | FragmentSelf1795["__typename"]
  | FragmentSelf1795["typenameHint"] | FragmentToken1793 | FragmentToken1794;
