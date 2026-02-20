import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken813 } from "./fragment813";
import type { FragmentToken814 } from "./fragment814";

export const FRAGMENT_815 = gql(`
  fragment Fragment815 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult815 = ResultOf<typeof FRAGMENT_815>;
type FragmentSelf815 = NonNullable<FragmentResult815>;

export type FragmentToken815 =
  | FragmentSelf815["__typename"]
  | FragmentSelf815["typenameHint"] | FragmentToken813 | FragmentToken814;
