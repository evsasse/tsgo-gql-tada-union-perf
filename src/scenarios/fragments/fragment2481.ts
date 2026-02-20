import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2479 } from "./fragment2479";
import type { FragmentToken2480 } from "./fragment2480";

export const FRAGMENT_2481 = gql(`
  fragment Fragment2481 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult2481 = ResultOf<typeof FRAGMENT_2481>;
type FragmentSelf2481 = NonNullable<FragmentResult2481>;

export type FragmentToken2481 =
  | FragmentSelf2481["__typename"]
  | FragmentSelf2481["typenameHint"] | FragmentToken2479 | FragmentToken2480;
