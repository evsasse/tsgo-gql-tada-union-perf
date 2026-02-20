import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken412 } from "./fragment412";
import type { FragmentToken413 } from "./fragment413";

export const FRAGMENT_414 = gql(`
  fragment Fragment414 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult414 = ResultOf<typeof FRAGMENT_414>;
type FragmentSelf414 = NonNullable<FragmentResult414>;

export type FragmentToken414 =
  | FragmentSelf414["__typename"]
  | FragmentSelf414["typenameHint"] | FragmentToken412 | FragmentToken413;
