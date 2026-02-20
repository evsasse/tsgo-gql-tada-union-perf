import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken257 } from "./fragment257";
import type { FragmentToken258 } from "./fragment258";

export const FRAGMENT_259 = gql(`
  fragment Fragment259 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult259 = ResultOf<typeof FRAGMENT_259>;
type FragmentSelf259 = NonNullable<FragmentResult259>;

export type FragmentToken259 =
  | FragmentSelf259["__typename"]
  | FragmentSelf259["typenameHint"] | FragmentToken257 | FragmentToken258;
