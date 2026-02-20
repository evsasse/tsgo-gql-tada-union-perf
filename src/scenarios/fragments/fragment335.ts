import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken333 } from "./fragment333";
import type { FragmentToken334 } from "./fragment334";

export const FRAGMENT_335 = gql(`
  fragment Fragment335 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult335 = ResultOf<typeof FRAGMENT_335>;
type FragmentSelf335 = NonNullable<FragmentResult335>;

export type FragmentToken335 =
  | FragmentSelf335["__typename"]
  | FragmentSelf335["typenameHint"] | FragmentToken333 | FragmentToken334;
