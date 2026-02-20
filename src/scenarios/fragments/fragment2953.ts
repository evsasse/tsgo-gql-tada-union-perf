import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2951 } from "./fragment2951";
import type { FragmentToken2952 } from "./fragment2952";

export const FRAGMENT_2953 = gql(`
  fragment Fragment2953 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult2953 = ResultOf<typeof FRAGMENT_2953>;
type FragmentSelf2953 = NonNullable<FragmentResult2953>;

export type FragmentToken2953 =
  | FragmentSelf2953["__typename"]
  | FragmentSelf2953["typenameHint"] | FragmentToken2951 | FragmentToken2952;
