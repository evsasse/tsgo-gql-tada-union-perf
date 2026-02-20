import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2024 } from "./fragment2024";
import type { FragmentToken2025 } from "./fragment2025";

export const FRAGMENT_2026 = gql(`
  fragment Fragment2026 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult2026 = ResultOf<typeof FRAGMENT_2026>;
type FragmentSelf2026 = NonNullable<FragmentResult2026>;

export type FragmentToken2026 =
  | FragmentSelf2026["__typename"]
  | FragmentSelf2026["typenameHint"] | FragmentToken2024 | FragmentToken2025;
