import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2010 } from "./fragment2010";
import type { FragmentToken2011 } from "./fragment2011";

export const FRAGMENT_2012 = gql(`
  fragment Fragment2012 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult2012 = ResultOf<typeof FRAGMENT_2012>;
type FragmentSelf2012 = NonNullable<FragmentResult2012>;

export type FragmentToken2012 =
  | FragmentSelf2012["__typename"]
  | FragmentSelf2012["typenameHint"] | FragmentToken2010 | FragmentToken2011;
