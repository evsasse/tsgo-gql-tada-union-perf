import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1788 } from "./fragment1788";
import type { FragmentToken1789 } from "./fragment1789";

export const FRAGMENT_1790 = gql(`
  fragment Fragment1790 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult1790 = ResultOf<typeof FRAGMENT_1790>;
type FragmentSelf1790 = NonNullable<FragmentResult1790>;

export type FragmentToken1790 =
  | FragmentSelf1790["__typename"]
  | FragmentSelf1790["typenameHint"] | FragmentToken1788 | FragmentToken1789;
