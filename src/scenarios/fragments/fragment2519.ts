import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2517 } from "./fragment2517";
import type { FragmentToken2518 } from "./fragment2518";

export const FRAGMENT_2519 = gql(`
  fragment Fragment2519 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult2519 = ResultOf<typeof FRAGMENT_2519>;
type FragmentSelf2519 = NonNullable<FragmentResult2519>;

export type FragmentToken2519 =
  | FragmentSelf2519["__typename"]
  | FragmentSelf2519["typenameHint"] | FragmentToken2517 | FragmentToken2518;
