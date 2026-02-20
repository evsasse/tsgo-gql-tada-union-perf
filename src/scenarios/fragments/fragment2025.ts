import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2023 } from "./fragment2023";
import type { FragmentToken2024 } from "./fragment2024";

export const FRAGMENT_2025 = gql(`
  fragment Fragment2025 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult2025 = ResultOf<typeof FRAGMENT_2025>;
type FragmentSelf2025 = NonNullable<FragmentResult2025>;

export type FragmentToken2025 =
  | FragmentSelf2025["__typename"]
  | FragmentSelf2025["typenameHint"] | FragmentToken2023 | FragmentToken2024;
