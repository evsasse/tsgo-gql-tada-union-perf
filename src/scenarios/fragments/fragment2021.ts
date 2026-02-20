import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2019 } from "./fragment2019";
import type { FragmentToken2020 } from "./fragment2020";

export const FRAGMENT_2021 = gql(`
  fragment Fragment2021 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult2021 = ResultOf<typeof FRAGMENT_2021>;
type FragmentSelf2021 = NonNullable<FragmentResult2021>;

export type FragmentToken2021 =
  | FragmentSelf2021["__typename"]
  | FragmentSelf2021["typenameHint"] | FragmentToken2019 | FragmentToken2020;
