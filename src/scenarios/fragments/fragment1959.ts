import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1957 } from "./fragment1957";
import type { FragmentToken1958 } from "./fragment1958";

export const FRAGMENT_1959 = gql(`
  fragment Fragment1959 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult1959 = ResultOf<typeof FRAGMENT_1959>;
type FragmentSelf1959 = NonNullable<FragmentResult1959>;

export type FragmentToken1959 =
  | FragmentSelf1959["__typename"]
  | FragmentSelf1959["typenameHint"] | FragmentToken1957 | FragmentToken1958;
