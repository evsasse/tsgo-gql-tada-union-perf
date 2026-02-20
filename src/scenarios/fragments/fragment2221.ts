import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2219 } from "./fragment2219";
import type { FragmentToken2220 } from "./fragment2220";

export const FRAGMENT_2221 = gql(`
  fragment Fragment2221 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult2221 = ResultOf<typeof FRAGMENT_2221>;
type FragmentSelf2221 = NonNullable<FragmentResult2221>;

export type FragmentToken2221 =
  | FragmentSelf2221["__typename"]
  | FragmentSelf2221["typenameHint"] | FragmentToken2219 | FragmentToken2220;
