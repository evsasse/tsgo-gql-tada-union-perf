import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2556 } from "./fragment2556";
import type { FragmentToken2557 } from "./fragment2557";

export const FRAGMENT_2558 = gql(`
  fragment Fragment2558 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult2558 = ResultOf<typeof FRAGMENT_2558>;
type FragmentSelf2558 = NonNullable<FragmentResult2558>;

export type FragmentToken2558 =
  | FragmentSelf2558["__typename"]
  | FragmentSelf2558["typenameHint"] | FragmentToken2556 | FragmentToken2557;
