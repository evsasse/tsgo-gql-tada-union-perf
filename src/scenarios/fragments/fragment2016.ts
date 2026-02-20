import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2014 } from "./fragment2014";
import type { FragmentToken2015 } from "./fragment2015";

export const FRAGMENT_2016 = gql(`
  fragment Fragment2016 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult2016 = ResultOf<typeof FRAGMENT_2016>;
type FragmentSelf2016 = NonNullable<FragmentResult2016>;

export type FragmentToken2016 =
  | FragmentSelf2016["__typename"]
  | FragmentSelf2016["typenameHint"] | FragmentToken2014 | FragmentToken2015;
