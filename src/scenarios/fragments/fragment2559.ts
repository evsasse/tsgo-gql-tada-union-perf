import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2557 } from "./fragment2557";
import type { FragmentToken2558 } from "./fragment2558";

export const FRAGMENT_2559 = gql(`
  fragment Fragment2559 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult2559 = ResultOf<typeof FRAGMENT_2559>;
type FragmentSelf2559 = NonNullable<FragmentResult2559>;

export type FragmentToken2559 =
  | FragmentSelf2559["__typename"]
  | FragmentSelf2559["typenameHint"] | FragmentToken2557 | FragmentToken2558;
