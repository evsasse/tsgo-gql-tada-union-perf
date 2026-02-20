import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2554 } from "./fragment2554";
import type { FragmentToken2555 } from "./fragment2555";

export const FRAGMENT_2556 = gql(`
  fragment Fragment2556 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult2556 = ResultOf<typeof FRAGMENT_2556>;
type FragmentSelf2556 = NonNullable<FragmentResult2556>;

export type FragmentToken2556 =
  | FragmentSelf2556["__typename"]
  | FragmentSelf2556["typenameHint"] | FragmentToken2554 | FragmentToken2555;
