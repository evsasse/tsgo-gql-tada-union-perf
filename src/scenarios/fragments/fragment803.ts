import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken801 } from "./fragment801";
import type { FragmentToken802 } from "./fragment802";

export const FRAGMENT_803 = gql(`
  fragment Fragment803 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult803 = ResultOf<typeof FRAGMENT_803>;
type FragmentSelf803 = NonNullable<FragmentResult803>;

export type FragmentToken803 =
  | FragmentSelf803["__typename"]
  | FragmentSelf803["typenameHint"] | FragmentToken801 | FragmentToken802;
