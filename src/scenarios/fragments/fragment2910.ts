import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2908 } from "./fragment2908";
import type { FragmentToken2909 } from "./fragment2909";

export const FRAGMENT_2910 = gql(`
  fragment Fragment2910 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult2910 = ResultOf<typeof FRAGMENT_2910>;
type FragmentSelf2910 = NonNullable<FragmentResult2910>;

export type FragmentToken2910 =
  | FragmentSelf2910["__typename"]
  | FragmentSelf2910["typenameHint"] | FragmentToken2908 | FragmentToken2909;
