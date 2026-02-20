import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4153 } from "./fragment4153";
import type { FragmentToken4154 } from "./fragment4154";

export const FRAGMENT_4155 = gql(`
  fragment Fragment4155 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult4155 = ResultOf<typeof FRAGMENT_4155>;
type FragmentSelf4155 = NonNullable<FragmentResult4155>;

export type FragmentToken4155 =
  | FragmentSelf4155["__typename"]
  | FragmentSelf4155["typenameHint"] | FragmentToken4153 | FragmentToken4154;
