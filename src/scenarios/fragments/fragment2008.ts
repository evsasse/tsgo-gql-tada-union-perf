import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2006 } from "./fragment2006";
import type { FragmentToken2007 } from "./fragment2007";

export const FRAGMENT_2008 = gql(`
  fragment Fragment2008 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult2008 = ResultOf<typeof FRAGMENT_2008>;
type FragmentSelf2008 = NonNullable<FragmentResult2008>;

export type FragmentToken2008 =
  | FragmentSelf2008["__typename"]
  | FragmentSelf2008["typenameHint"] | FragmentToken2006 | FragmentToken2007;
