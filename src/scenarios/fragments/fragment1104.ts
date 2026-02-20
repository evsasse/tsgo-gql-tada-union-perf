import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1102 } from "./fragment1102";
import type { FragmentToken1103 } from "./fragment1103";

export const FRAGMENT_1104 = gql(`
  fragment Fragment1104 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult1104 = ResultOf<typeof FRAGMENT_1104>;
type FragmentSelf1104 = NonNullable<FragmentResult1104>;

export type FragmentToken1104 =
  | FragmentSelf1104["__typename"]
  | FragmentSelf1104["typenameHint"] | FragmentToken1102 | FragmentToken1103;
