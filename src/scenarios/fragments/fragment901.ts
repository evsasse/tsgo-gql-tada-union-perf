import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken899 } from "./fragment899";
import type { FragmentToken900 } from "./fragment900";

export const FRAGMENT_901 = gql(`
  fragment Fragment901 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult901 = ResultOf<typeof FRAGMENT_901>;
type FragmentSelf901 = NonNullable<FragmentResult901>;

export type FragmentToken901 =
  | FragmentSelf901["__typename"]
  | FragmentSelf901["typenameHint"] | FragmentToken899 | FragmentToken900;
