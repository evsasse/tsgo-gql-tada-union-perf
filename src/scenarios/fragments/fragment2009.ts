import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2007 } from "./fragment2007";
import type { FragmentToken2008 } from "./fragment2008";

export const FRAGMENT_2009 = gql(`
  fragment Fragment2009 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult2009 = ResultOf<typeof FRAGMENT_2009>;
type FragmentSelf2009 = NonNullable<FragmentResult2009>;

export type FragmentToken2009 =
  | FragmentSelf2009["__typename"]
  | FragmentSelf2009["typenameHint"] | FragmentToken2007 | FragmentToken2008;
