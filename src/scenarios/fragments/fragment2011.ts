import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2009 } from "./fragment2009";
import type { FragmentToken2010 } from "./fragment2010";

export const FRAGMENT_2011 = gql(`
  fragment Fragment2011 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult2011 = ResultOf<typeof FRAGMENT_2011>;
type FragmentSelf2011 = NonNullable<FragmentResult2011>;

export type FragmentToken2011 =
  | FragmentSelf2011["__typename"]
  | FragmentSelf2011["typenameHint"] | FragmentToken2009 | FragmentToken2010;
