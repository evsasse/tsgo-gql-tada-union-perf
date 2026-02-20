import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2011 } from "./fragment2011";
import type { FragmentToken2012 } from "./fragment2012";

export const FRAGMENT_2013 = gql(`
  fragment Fragment2013 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult2013 = ResultOf<typeof FRAGMENT_2013>;
type FragmentSelf2013 = NonNullable<FragmentResult2013>;

export type FragmentToken2013 =
  | FragmentSelf2013["__typename"]
  | FragmentSelf2013["typenameHint"] | FragmentToken2011 | FragmentToken2012;
