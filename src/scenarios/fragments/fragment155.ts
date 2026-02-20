import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken153 } from "./fragment153";
import type { FragmentToken154 } from "./fragment154";

export const FRAGMENT_155 = gql(`
  fragment Fragment155 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult155 = ResultOf<typeof FRAGMENT_155>;
type FragmentSelf155 = NonNullable<FragmentResult155>;

export type FragmentToken155 =
  | FragmentSelf155["__typename"]
  | FragmentSelf155["typenameHint"] | FragmentToken153 | FragmentToken154;
