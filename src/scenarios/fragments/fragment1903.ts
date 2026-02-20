import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1901 } from "./fragment1901";
import type { FragmentToken1902 } from "./fragment1902";

export const FRAGMENT_1903 = gql(`
  fragment Fragment1903 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult1903 = ResultOf<typeof FRAGMENT_1903>;
type FragmentSelf1903 = NonNullable<FragmentResult1903>;

export type FragmentToken1903 =
  | FragmentSelf1903["__typename"]
  | FragmentSelf1903["typenameHint"] | FragmentToken1901 | FragmentToken1902;
