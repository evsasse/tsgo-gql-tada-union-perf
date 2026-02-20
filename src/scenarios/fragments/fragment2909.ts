import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2907 } from "./fragment2907";
import type { FragmentToken2908 } from "./fragment2908";

export const FRAGMENT_2909 = gql(`
  fragment Fragment2909 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult2909 = ResultOf<typeof FRAGMENT_2909>;
type FragmentSelf2909 = NonNullable<FragmentResult2909>;

export type FragmentToken2909 =
  | FragmentSelf2909["__typename"]
  | FragmentSelf2909["typenameHint"] | FragmentToken2907 | FragmentToken2908;
