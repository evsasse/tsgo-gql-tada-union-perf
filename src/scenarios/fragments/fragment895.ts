import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken893 } from "./fragment893";
import type { FragmentToken894 } from "./fragment894";

export const FRAGMENT_895 = gql(`
  fragment Fragment895 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult895 = ResultOf<typeof FRAGMENT_895>;
type FragmentSelf895 = NonNullable<FragmentResult895>;

export type FragmentToken895 =
  | FragmentSelf895["__typename"]
  | FragmentSelf895["typenameHint"] | FragmentToken893 | FragmentToken894;
