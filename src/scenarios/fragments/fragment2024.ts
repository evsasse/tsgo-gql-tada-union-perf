import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2022 } from "./fragment2022";
import type { FragmentToken2023 } from "./fragment2023";

export const FRAGMENT_2024 = gql(`
  fragment Fragment2024 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult2024 = ResultOf<typeof FRAGMENT_2024>;
type FragmentSelf2024 = NonNullable<FragmentResult2024>;

export type FragmentToken2024 =
  | FragmentSelf2024["__typename"]
  | FragmentSelf2024["typenameHint"] | FragmentToken2022 | FragmentToken2023;
