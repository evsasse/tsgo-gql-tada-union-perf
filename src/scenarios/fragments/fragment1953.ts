import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1951 } from "./fragment1951";
import type { FragmentToken1952 } from "./fragment1952";

export const FRAGMENT_1953 = gql(`
  fragment Fragment1953 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult1953 = ResultOf<typeof FRAGMENT_1953>;
type FragmentSelf1953 = NonNullable<FragmentResult1953>;

export type FragmentToken1953 =
  | FragmentSelf1953["__typename"]
  | FragmentSelf1953["typenameHint"] | FragmentToken1951 | FragmentToken1952;
