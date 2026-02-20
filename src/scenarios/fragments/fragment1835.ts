import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1833 } from "./fragment1833";
import type { FragmentToken1834 } from "./fragment1834";

export const FRAGMENT_1835 = gql(`
  fragment Fragment1835 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult1835 = ResultOf<typeof FRAGMENT_1835>;
type FragmentSelf1835 = NonNullable<FragmentResult1835>;

export type FragmentToken1835 =
  | FragmentSelf1835["__typename"]
  | FragmentSelf1835["typenameHint"] | FragmentToken1833 | FragmentToken1834;
