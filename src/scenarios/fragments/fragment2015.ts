import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2013 } from "./fragment2013";
import type { FragmentToken2014 } from "./fragment2014";

export const FRAGMENT_2015 = gql(`
  fragment Fragment2015 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult2015 = ResultOf<typeof FRAGMENT_2015>;
type FragmentSelf2015 = NonNullable<FragmentResult2015>;

export type FragmentToken2015 =
  | FragmentSelf2015["__typename"]
  | FragmentSelf2015["typenameHint"] | FragmentToken2013 | FragmentToken2014;
