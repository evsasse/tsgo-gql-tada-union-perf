import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2558 } from "./fragment2558";
import type { FragmentToken2559 } from "./fragment2559";

export const FRAGMENT_2560 = gql(`
  fragment Fragment2560 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult2560 = ResultOf<typeof FRAGMENT_2560>;
type FragmentSelf2560 = NonNullable<FragmentResult2560>;

export type FragmentToken2560 =
  | FragmentSelf2560["__typename"]
  | FragmentSelf2560["typenameHint"] | FragmentToken2558 | FragmentToken2559;
