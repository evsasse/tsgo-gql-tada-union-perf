import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2015 } from "./fragment2015";
import type { FragmentToken2016 } from "./fragment2016";

export const FRAGMENT_2017 = gql(`
  fragment Fragment2017 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult2017 = ResultOf<typeof FRAGMENT_2017>;
type FragmentSelf2017 = NonNullable<FragmentResult2017>;

export type FragmentToken2017 =
  | FragmentSelf2017["__typename"]
  | FragmentSelf2017["typenameHint"] | FragmentToken2015 | FragmentToken2016;
