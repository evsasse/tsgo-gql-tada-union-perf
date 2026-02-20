import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken458 } from "./fragment458";
import type { FragmentToken459 } from "./fragment459";

export const FRAGMENT_460 = gql(`
  fragment Fragment460 on Member179 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_179
    memberCount_179
    memberMetric_179
  }
`);

type FragmentResult460 = ResultOf<typeof FRAGMENT_460>;
type FragmentSelf460 = NonNullable<FragmentResult460>;

export type FragmentToken460 =
  | FragmentSelf460["__typename"]
  | FragmentSelf460["typenameHint"] | FragmentToken458 | FragmentToken459;
