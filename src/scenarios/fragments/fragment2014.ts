import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2012 } from "./fragment2012";
import type { FragmentToken2013 } from "./fragment2013";

export const FRAGMENT_2014 = gql(`
  fragment Fragment2014 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult2014 = ResultOf<typeof FRAGMENT_2014>;
type FragmentSelf2014 = NonNullable<FragmentResult2014>;

export type FragmentToken2014 =
  | FragmentSelf2014["__typename"]
  | FragmentSelf2014["typenameHint"] | FragmentToken2012 | FragmentToken2013;
