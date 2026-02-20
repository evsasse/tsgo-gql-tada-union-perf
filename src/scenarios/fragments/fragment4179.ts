import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4177 } from "./fragment4177";
import type { FragmentToken4178 } from "./fragment4178";

export const FRAGMENT_4179 = gql(`
  fragment Fragment4179 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult4179 = ResultOf<typeof FRAGMENT_4179>;
type FragmentSelf4179 = NonNullable<FragmentResult4179>;

export type FragmentToken4179 =
  | FragmentSelf4179["__typename"]
  | FragmentSelf4179["typenameHint"] | FragmentToken4177 | FragmentToken4178;
