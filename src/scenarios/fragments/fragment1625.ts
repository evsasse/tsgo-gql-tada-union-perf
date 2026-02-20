import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1623 } from "./fragment1623";
import type { FragmentToken1624 } from "./fragment1624";

export const FRAGMENT_1625 = gql(`
  fragment Fragment1625 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult1625 = ResultOf<typeof FRAGMENT_1625>;
type FragmentSelf1625 = NonNullable<FragmentResult1625>;

export type FragmentToken1625 =
  | FragmentSelf1625["__typename"]
  | FragmentSelf1625["typenameHint"] | FragmentToken1623 | FragmentToken1624;
