import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2282 } from "./fragment2282";
import type { FragmentToken2283 } from "./fragment2283";

export const FRAGMENT_2284 = gql(`
  fragment Fragment2284 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult2284 = ResultOf<typeof FRAGMENT_2284>;
type FragmentSelf2284 = NonNullable<FragmentResult2284>;

export type FragmentToken2284 =
  | FragmentSelf2284["__typename"]
  | FragmentSelf2284["typenameHint"] | FragmentToken2282 | FragmentToken2283;
