import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2018 } from "./fragment2018";
import type { FragmentToken2019 } from "./fragment2019";

export const FRAGMENT_2020 = gql(`
  fragment Fragment2020 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult2020 = ResultOf<typeof FRAGMENT_2020>;
type FragmentSelf2020 = NonNullable<FragmentResult2020>;

export type FragmentToken2020 =
  | FragmentSelf2020["__typename"]
  | FragmentSelf2020["typenameHint"] | FragmentToken2018 | FragmentToken2019;
