import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2004 } from "./fragment2004";
import type { FragmentToken2005 } from "./fragment2005";

export const FRAGMENT_2006 = gql(`
  fragment Fragment2006 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult2006 = ResultOf<typeof FRAGMENT_2006>;
type FragmentSelf2006 = NonNullable<FragmentResult2006>;

export type FragmentToken2006 =
  | FragmentSelf2006["__typename"]
  | FragmentSelf2006["typenameHint"] | FragmentToken2004 | FragmentToken2005;
