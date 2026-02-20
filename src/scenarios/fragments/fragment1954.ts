import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1952 } from "./fragment1952";
import type { FragmentToken1953 } from "./fragment1953";

export const FRAGMENT_1954 = gql(`
  fragment Fragment1954 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult1954 = ResultOf<typeof FRAGMENT_1954>;
type FragmentSelf1954 = NonNullable<FragmentResult1954>;

export type FragmentToken1954 =
  | FragmentSelf1954["__typename"]
  | FragmentSelf1954["typenameHint"] | FragmentToken1952 | FragmentToken1953;
