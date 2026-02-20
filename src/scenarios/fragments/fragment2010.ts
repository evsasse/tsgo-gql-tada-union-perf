import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2008 } from "./fragment2008";
import type { FragmentToken2009 } from "./fragment2009";

export const FRAGMENT_2010 = gql(`
  fragment Fragment2010 on Member49 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_49
    memberCount_49
    memberMetric_49
  }
`);

type FragmentResult2010 = ResultOf<typeof FRAGMENT_2010>;
type FragmentSelf2010 = NonNullable<FragmentResult2010>;

export type FragmentToken2010 =
  | FragmentSelf2010["__typename"]
  | FragmentSelf2010["typenameHint"] | FragmentToken2008 | FragmentToken2009;
