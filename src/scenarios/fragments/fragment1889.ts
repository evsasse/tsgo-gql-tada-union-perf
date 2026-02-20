import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1887 } from "./fragment1887";
import type { FragmentToken1888 } from "./fragment1888";

export const FRAGMENT_1889 = gql(`
  fragment Fragment1889 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult1889 = ResultOf<typeof FRAGMENT_1889>;
type FragmentSelf1889 = NonNullable<FragmentResult1889>;

export type FragmentToken1889 =
  | FragmentSelf1889["__typename"]
  | FragmentSelf1889["typenameHint"] | FragmentToken1887 | FragmentToken1888;
