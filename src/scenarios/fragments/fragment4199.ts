import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4197 } from "./fragment4197";
import type { FragmentToken4198 } from "./fragment4198";

export const FRAGMENT_4199 = gql(`
  fragment Fragment4199 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult4199 = ResultOf<typeof FRAGMENT_4199>;
type FragmentSelf4199 = NonNullable<FragmentResult4199>;

export type FragmentToken4199 =
  | FragmentSelf4199["__typename"]
  | FragmentSelf4199["typenameHint"] | FragmentToken4197 | FragmentToken4198;
