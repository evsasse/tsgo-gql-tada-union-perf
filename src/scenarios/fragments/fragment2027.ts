import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2025 } from "./fragment2025";
import type { FragmentToken2026 } from "./fragment2026";

export const FRAGMENT_2027 = gql(`
  fragment Fragment2027 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult2027 = ResultOf<typeof FRAGMENT_2027>;
type FragmentSelf2027 = NonNullable<FragmentResult2027>;

export type FragmentToken2027 =
  | FragmentSelf2027["__typename"]
  | FragmentSelf2027["typenameHint"] | FragmentToken2025 | FragmentToken2026;
