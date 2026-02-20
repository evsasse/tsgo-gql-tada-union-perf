import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2453 } from "./fragment2453";
import type { FragmentToken2454 } from "./fragment2454";

export const FRAGMENT_2455 = gql(`
  fragment Fragment2455 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult2455 = ResultOf<typeof FRAGMENT_2455>;
type FragmentSelf2455 = NonNullable<FragmentResult2455>;

export type FragmentToken2455 =
  | FragmentSelf2455["__typename"]
  | FragmentSelf2455["typenameHint"] | FragmentToken2453 | FragmentToken2454;
