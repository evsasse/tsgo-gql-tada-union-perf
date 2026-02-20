import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1055 } from "./fragment1055";
import type { FragmentToken1056 } from "./fragment1056";

export const FRAGMENT_1057 = gql(`
  fragment Fragment1057 on Member216 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_216
    memberCount_216
    memberMetric_216
  }
`);

type FragmentResult1057 = ResultOf<typeof FRAGMENT_1057>;
type FragmentSelf1057 = NonNullable<FragmentResult1057>;

export type FragmentToken1057 =
  | FragmentSelf1057["__typename"]
  | FragmentSelf1057["typenameHint"] | FragmentToken1055 | FragmentToken1056;
