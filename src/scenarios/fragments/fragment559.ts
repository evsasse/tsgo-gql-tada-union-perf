import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken557 } from "./fragment557";
import type { FragmentToken558 } from "./fragment558";

export const FRAGMENT_559 = gql(`
  fragment Fragment559 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult559 = ResultOf<typeof FRAGMENT_559>;
type FragmentSelf559 = NonNullable<FragmentResult559>;

export type FragmentToken559 =
  | FragmentSelf559["__typename"]
  | FragmentSelf559["typenameHint"] | FragmentToken557 | FragmentToken558;
