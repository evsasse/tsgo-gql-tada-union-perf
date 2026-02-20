import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4415 } from "./fragment4415";
import type { FragmentToken4416 } from "./fragment4416";

export const FRAGMENT_4417 = gql(`
  fragment Fragment4417 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult4417 = ResultOf<typeof FRAGMENT_4417>;
type FragmentSelf4417 = NonNullable<FragmentResult4417>;

export type FragmentToken4417 =
  | FragmentSelf4417["__typename"]
  | FragmentSelf4417["typenameHint"] | FragmentToken4415 | FragmentToken4416;
