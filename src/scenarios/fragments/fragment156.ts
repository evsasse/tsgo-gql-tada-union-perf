import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken154 } from "./fragment154";
import type { FragmentToken155 } from "./fragment155";

export const FRAGMENT_156 = gql(`
  fragment Fragment156 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult156 = ResultOf<typeof FRAGMENT_156>;
type FragmentSelf156 = NonNullable<FragmentResult156>;

export type FragmentToken156 =
  | FragmentSelf156["__typename"]
  | FragmentSelf156["typenameHint"] | FragmentToken154 | FragmentToken155;
