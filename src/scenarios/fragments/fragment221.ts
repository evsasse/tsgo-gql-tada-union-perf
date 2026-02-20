import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken219 } from "./fragment219";
import type { FragmentToken220 } from "./fragment220";

export const FRAGMENT_221 = gql(`
  fragment Fragment221 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult221 = ResultOf<typeof FRAGMENT_221>;
type FragmentSelf221 = NonNullable<FragmentResult221>;

export type FragmentToken221 =
  | FragmentSelf221["__typename"]
  | FragmentSelf221["typenameHint"] | FragmentToken219 | FragmentToken220;
