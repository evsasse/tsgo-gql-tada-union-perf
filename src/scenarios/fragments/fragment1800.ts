import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1798 } from "./fragment1798";
import type { FragmentToken1799 } from "./fragment1799";

export const FRAGMENT_1800 = gql(`
  fragment Fragment1800 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult1800 = ResultOf<typeof FRAGMENT_1800>;
type FragmentSelf1800 = NonNullable<FragmentResult1800>;

export type FragmentToken1800 =
  | FragmentSelf1800["__typename"]
  | FragmentSelf1800["typenameHint"] | FragmentToken1798 | FragmentToken1799;
