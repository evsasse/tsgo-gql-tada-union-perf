import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken472 } from "./fragment472";
import type { FragmentToken473 } from "./fragment473";

export const FRAGMENT_474 = gql(`
  fragment Fragment474 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult474 = ResultOf<typeof FRAGMENT_474>;
type FragmentSelf474 = NonNullable<FragmentResult474>;

export type FragmentToken474 =
  | FragmentSelf474["__typename"]
  | FragmentSelf474["typenameHint"] | FragmentToken472 | FragmentToken473;
