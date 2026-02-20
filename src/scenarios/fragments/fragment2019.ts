import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2017 } from "./fragment2017";
import type { FragmentToken2018 } from "./fragment2018";

export const FRAGMENT_2019 = gql(`
  fragment Fragment2019 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult2019 = ResultOf<typeof FRAGMENT_2019>;
type FragmentSelf2019 = NonNullable<FragmentResult2019>;

export type FragmentToken2019 =
  | FragmentSelf2019["__typename"]
  | FragmentSelf2019["typenameHint"] | FragmentToken2017 | FragmentToken2018;
