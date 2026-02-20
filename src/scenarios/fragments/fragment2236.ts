import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2234 } from "./fragment2234";
import type { FragmentToken2235 } from "./fragment2235";

export const FRAGMENT_2236 = gql(`
  fragment Fragment2236 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult2236 = ResultOf<typeof FRAGMENT_2236>;
type FragmentSelf2236 = NonNullable<FragmentResult2236>;

export type FragmentToken2236 =
  | FragmentSelf2236["__typename"]
  | FragmentSelf2236["typenameHint"] | FragmentToken2234 | FragmentToken2235;
