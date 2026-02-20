import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4059 } from "./fragment4059";
import type { FragmentToken4060 } from "./fragment4060";

export const FRAGMENT_4061 = gql(`
  fragment Fragment4061 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult4061 = ResultOf<typeof FRAGMENT_4061>;
type FragmentSelf4061 = NonNullable<FragmentResult4061>;

export type FragmentToken4061 =
  | FragmentSelf4061["__typename"]
  | FragmentSelf4061["typenameHint"] | FragmentToken4059 | FragmentToken4060;
