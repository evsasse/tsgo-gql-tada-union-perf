import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4461 } from "./fragment4461";
import type { FragmentToken4462 } from "./fragment4462";

export const FRAGMENT_4463 = gql(`
  fragment Fragment4463 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult4463 = ResultOf<typeof FRAGMENT_4463>;
type FragmentSelf4463 = NonNullable<FragmentResult4463>;

export type FragmentToken4463 =
  | FragmentSelf4463["__typename"]
  | FragmentSelf4463["typenameHint"] | FragmentToken4461 | FragmentToken4462;
