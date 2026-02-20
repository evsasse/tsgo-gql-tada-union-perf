import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2020 } from "./fragment2020";
import type { FragmentToken2021 } from "./fragment2021";

export const FRAGMENT_2022 = gql(`
  fragment Fragment2022 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult2022 = ResultOf<typeof FRAGMENT_2022>;
type FragmentSelf2022 = NonNullable<FragmentResult2022>;

export type FragmentToken2022 =
  | FragmentSelf2022["__typename"]
  | FragmentSelf2022["typenameHint"] | FragmentToken2020 | FragmentToken2021;
