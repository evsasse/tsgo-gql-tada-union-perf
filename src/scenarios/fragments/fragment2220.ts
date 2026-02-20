import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2218 } from "./fragment2218";
import type { FragmentToken2219 } from "./fragment2219";

export const FRAGMENT_2220 = gql(`
  fragment Fragment2220 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult2220 = ResultOf<typeof FRAGMENT_2220>;
type FragmentSelf2220 = NonNullable<FragmentResult2220>;

export type FragmentToken2220 =
  | FragmentSelf2220["__typename"]
  | FragmentSelf2220["typenameHint"] | FragmentToken2218 | FragmentToken2219;
