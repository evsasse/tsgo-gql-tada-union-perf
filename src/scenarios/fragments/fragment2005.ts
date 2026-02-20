import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2003 } from "./fragment2003";
import type { FragmentToken2004 } from "./fragment2004";

export const FRAGMENT_2005 = gql(`
  fragment Fragment2005 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult2005 = ResultOf<typeof FRAGMENT_2005>;
type FragmentSelf2005 = NonNullable<FragmentResult2005>;

export type FragmentToken2005 =
  | FragmentSelf2005["__typename"]
  | FragmentSelf2005["typenameHint"] | FragmentToken2003 | FragmentToken2004;
