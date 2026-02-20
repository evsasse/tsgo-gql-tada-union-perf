import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4394 } from "./fragment4394";
import type { FragmentToken4395 } from "./fragment4395";

export const FRAGMENT_4396 = gql(`
  fragment Fragment4396 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult4396 = ResultOf<typeof FRAGMENT_4396>;
type FragmentSelf4396 = NonNullable<FragmentResult4396>;

export type FragmentToken4396 =
  | FragmentSelf4396["__typename"]
  | FragmentSelf4396["typenameHint"] | FragmentToken4394 | FragmentToken4395;
