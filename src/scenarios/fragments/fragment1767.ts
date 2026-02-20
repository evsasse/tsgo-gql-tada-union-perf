import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1765 } from "./fragment1765";
import type { FragmentToken1766 } from "./fragment1766";

export const FRAGMENT_1767 = gql(`
  fragment Fragment1767 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult1767 = ResultOf<typeof FRAGMENT_1767>;
type FragmentSelf1767 = NonNullable<FragmentResult1767>;

export type FragmentToken1767 =
  | FragmentSelf1767["__typename"]
  | FragmentSelf1767["typenameHint"] | FragmentToken1765 | FragmentToken1766;
