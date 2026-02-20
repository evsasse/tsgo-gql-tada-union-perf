import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken212 } from "./fragment212";
import type { FragmentToken213 } from "./fragment213";

export const FRAGMENT_214 = gql(`
  fragment Fragment214 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult214 = ResultOf<typeof FRAGMENT_214>;
type FragmentSelf214 = NonNullable<FragmentResult214>;

export type FragmentToken214 =
  | FragmentSelf214["__typename"]
  | FragmentSelf214["typenameHint"] | FragmentToken212 | FragmentToken213;
