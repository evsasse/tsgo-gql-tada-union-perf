import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4198 } from "./fragment4198";
import type { FragmentToken4199 } from "./fragment4199";

export const FRAGMENT_4200 = gql(`
  fragment Fragment4200 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult4200 = ResultOf<typeof FRAGMENT_4200>;
type FragmentSelf4200 = NonNullable<FragmentResult4200>;

export type FragmentToken4200 =
  | FragmentSelf4200["__typename"]
  | FragmentSelf4200["typenameHint"] | FragmentToken4198 | FragmentToken4199;
