import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2005 } from "./fragment2005";
import type { FragmentToken2006 } from "./fragment2006";

export const FRAGMENT_2007 = gql(`
  fragment Fragment2007 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult2007 = ResultOf<typeof FRAGMENT_2007>;
type FragmentSelf2007 = NonNullable<FragmentResult2007>;

export type FragmentToken2007 =
  | FragmentSelf2007["__typename"]
  | FragmentSelf2007["typenameHint"] | FragmentToken2005 | FragmentToken2006;
