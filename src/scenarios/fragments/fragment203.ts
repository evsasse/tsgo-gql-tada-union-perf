import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken201 } from "./fragment201";
import type { FragmentToken202 } from "./fragment202";

export const FRAGMENT_203 = gql(`
  fragment Fragment203 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult203 = ResultOf<typeof FRAGMENT_203>;
type FragmentSelf203 = NonNullable<FragmentResult203>;

export type FragmentToken203 =
  | FragmentSelf203["__typename"]
  | FragmentSelf203["typenameHint"] | FragmentToken201 | FragmentToken202;
