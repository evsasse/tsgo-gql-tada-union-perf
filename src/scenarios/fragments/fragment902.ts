import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken900 } from "./fragment900";
import type { FragmentToken901 } from "./fragment901";

export const FRAGMENT_902 = gql(`
  fragment Fragment902 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult902 = ResultOf<typeof FRAGMENT_902>;
type FragmentSelf902 = NonNullable<FragmentResult902>;

export type FragmentToken902 =
  | FragmentSelf902["__typename"]
  | FragmentSelf902["typenameHint"] | FragmentToken900 | FragmentToken901;
