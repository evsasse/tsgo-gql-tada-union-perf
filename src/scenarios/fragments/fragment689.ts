import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken687 } from "./fragment687";
import type { FragmentToken688 } from "./fragment688";

export const FRAGMENT_689 = gql(`
  fragment Fragment689 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult689 = ResultOf<typeof FRAGMENT_689>;
type FragmentSelf689 = NonNullable<FragmentResult689>;

export type FragmentToken689 =
  | FragmentSelf689["__typename"]
  | FragmentSelf689["typenameHint"] | FragmentToken687 | FragmentToken688;
