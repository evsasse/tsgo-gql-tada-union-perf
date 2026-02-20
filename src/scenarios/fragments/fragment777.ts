import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken775 } from "./fragment775";
import type { FragmentToken776 } from "./fragment776";

export const FRAGMENT_777 = gql(`
  fragment Fragment777 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult777 = ResultOf<typeof FRAGMENT_777>;
type FragmentSelf777 = NonNullable<FragmentResult777>;

export type FragmentToken777 =
  | FragmentSelf777["__typename"]
  | FragmentSelf777["typenameHint"] | FragmentToken775 | FragmentToken776;
