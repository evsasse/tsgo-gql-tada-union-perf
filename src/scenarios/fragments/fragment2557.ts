import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2555 } from "./fragment2555";
import type { FragmentToken2556 } from "./fragment2556";

export const FRAGMENT_2557 = gql(`
  fragment Fragment2557 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult2557 = ResultOf<typeof FRAGMENT_2557>;
type FragmentSelf2557 = NonNullable<FragmentResult2557>;

export type FragmentToken2557 =
  | FragmentSelf2557["__typename"]
  | FragmentSelf2557["typenameHint"] | FragmentToken2555 | FragmentToken2556;
