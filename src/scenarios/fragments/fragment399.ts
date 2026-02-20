import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken397 } from "./fragment397";
import type { FragmentToken398 } from "./fragment398";

export const FRAGMENT_399 = gql(`
  fragment Fragment399 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult399 = ResultOf<typeof FRAGMENT_399>;
type FragmentSelf399 = NonNullable<FragmentResult399>;

export type FragmentToken399 =
  | FragmentSelf399["__typename"]
  | FragmentSelf399["typenameHint"] | FragmentToken397 | FragmentToken398;
