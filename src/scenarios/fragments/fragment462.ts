import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken460 } from "./fragment460";
import type { FragmentToken461 } from "./fragment461";

export const FRAGMENT_462 = gql(`
  fragment Fragment462 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult462 = ResultOf<typeof FRAGMENT_462>;
type FragmentSelf462 = NonNullable<FragmentResult462>;

export type FragmentToken462 =
  | FragmentSelf462["__typename"]
  | FragmentSelf462["typenameHint"] | FragmentToken460 | FragmentToken461;
