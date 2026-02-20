import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2016 } from "./fragment2016";
import type { FragmentToken2017 } from "./fragment2017";

export const FRAGMENT_2018 = gql(`
  fragment Fragment2018 on Member57 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_57
    memberCount_57
    memberMetric_57
  }
`);

type FragmentResult2018 = ResultOf<typeof FRAGMENT_2018>;
type FragmentSelf2018 = NonNullable<FragmentResult2018>;

export type FragmentToken2018 =
  | FragmentSelf2018["__typename"]
  | FragmentSelf2018["typenameHint"] | FragmentToken2016 | FragmentToken2017;
